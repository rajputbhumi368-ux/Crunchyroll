/* AniSignal live anime metadata layer.
   AniList supplies metadata and artwork only; it does not supply licensed video playback. */
const ANILIST_ENDPOINT = 'https://graphql.anilist.co';
const anilistCache = new Map();
const LIVE_TIMEOUT_MS = 8000;

async function anilistQuery(query, variables = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LIVE_TIMEOUT_MS);
  try {
    const response = await fetch(ANILIST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`AniList request failed: ${response.status}`);
    const json = await response.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);
    return json.data;
  } finally {
    clearTimeout(timer);
  }
}

function anilistItem(media) {
  const title = media.title?.english || media.title?.romaji || media.title?.native || 'Untitled Anime';
  const item = {
    title,
    audio: media.countryOfOrigin === 'JP' ? 'Subtitled' : 'Dub | Sub',
    img: media.coverImage?.extraLarge || media.coverImage?.large || epImgs[0],
    genres: (media.genres || []).join(', ') || 'Anime',
    anilistId: media.id,
    description: (media.description || '').replace(/<[^>]+>/g, ''),
  };
  anilistCache.set(slugify(title), media);
  return item;
}

const LIVE_MEDIA_FIELDS = `
  id title { romaji english native } coverImage { large extraLarge }
  genres countryOfOrigin averageScore format episodes duration description
`;
const POPULAR_QUERY = `query($page:Int,$perPage:Int){Page(page:$page,perPage:$perPage){media(type:ANIME,sort:POPULARITY_DESC,isAdult:false){${LIVE_MEDIA_FIELDS}}}}`;
const TRENDING_QUERY = `query($page:Int,$perPage:Int){Page(page:$page,perPage:$perPage){media(type:ANIME,sort:TRENDING_DESC,isAdult:false,status:RELEASING){${LIVE_MEDIA_FIELDS}}}}`;
const TOP_SCORE_QUERY = `query($page:Int,$perPage:Int){Page(page:$page,perPage:$perPage){media(type:ANIME,sort:SCORE_DESC,isAdult:false){${LIVE_MEDIA_FIELDS}}}}`;
const SEARCH_QUERY = `query($search:String){Page(page:1,perPage:20){media(type:ANIME,search:$search,isAdult:false,sort:SEARCH_MATCH){${LIVE_MEDIA_FIELDS}}}}`;
const DETAIL_QUERY = `query($search:String){Page(page:1,perPage:5){media(type:ANIME,search:$search,isAdult:false){${LIVE_MEDIA_FIELDS}}}}`;

function livePosterCard(item) {
  const title = String(item.title || 'Untitled Anime');
  const img = item.img || epImgs[0];
  const genres = item.genres || 'Anime';
  const audio = item.audio || 'Subtitled';
  const arg = value => JSON.stringify(String(value)).replace(/'/g, '&#39;');
  return `<article class="flex-none w-32 snap-start space-y-1.5 cursor-pointer" onclick='openAnimeDetails(${arg(title)},${arg(genres)},${arg(audio)},${arg(img)})'>
    <div class="w-full aspect-[2/3] rounded-sm overflow-hidden bg-neutral-800"><img src="${img}" alt="${title.replace(/"/g, '&quot;')}" loading="lazy" decoding="async" class="w-full h-full object-cover"/></div>
    <p class="text-xs font-semibold text-white truncate">${title.replace(/</g, '&lt;')}</p>
    <div class="flex items-center justify-between text-[11px] text-cr-subtext"><span>${audio}</span><button onclick='event.stopPropagation();openActionSheet(${arg(title)})' class="hover:text-white p-0.5">⋮</button></div>
  </article>`;
}

function liveHomeRail(heading, items) {
  const headings = Array.from(document.querySelectorAll('#tab-home h2'));
  const headingNode = headings.find(node => node.textContent.trim() === heading);
  const rail = headingNode?.parentElement?.nextElementSibling;
  if (!rail || !items?.length) return false;
  rail.className = 'flex gap-3 overflow-x-auto no-scrollbar flex-nowrap scroll-smooth px-4 pt-1 pb-2';
  rail.innerHTML = items.slice(0, 10).map(livePosterCard).join('');
  return true;
}

function applyLiveHero(items) {
  if (!items?.length) return;
  heroSlides.splice(0, heroSlides.length, ...items.slice(0, 6).map(item => ({
    title: item.title.toUpperCase(),
    studio: '© AniList',
    desc: item.description || `Discover ${item.title} and more anime on AniSignal.`,
    img: item.img,
  })));
  if (typeof setHeroSlide === 'function') setHeroSlide(0);
}

async function hydrateAniListCatalog() {
  const results = await Promise.allSettled([
    anilistQuery(POPULAR_QUERY, { page: 1, perPage: 30 }),
    anilistQuery(TRENDING_QUERY, { page: 1, perPage: 30 }),
    anilistQuery(TOP_SCORE_QUERY, { page: 1, perPage: 30 }),
  ]);
  const getItems = result => result.status === 'fulfilled' ? (result.value?.Page?.media || []).map(anilistItem) : [];
  const popular = getItems(results[0]);
  const current = getItems(results[1]);
  const top = getItems(results[2]);
  const live = [...popular, ...current, ...top].filter((item, index, all) => all.findIndex(x => x.anilistId === item.anilistId) === index);
  if (!live.length) {
    console.warn('AniList unavailable; using bundled AniSignal catalog.');
    return;
  }

  window.__anisignalLiveCatalog = live;
  browseCatalog.splice(0, browseCatalog.length, ...live.slice(0, 24));
  simulcastCatalog.splice(0, simulcastCatalog.length, ...(current.length ? current.slice(0, 18) : live.slice(24, 42)));
  applyLiveHero(popular.length ? popular : live);
  liveHomeRail('Most Popular', popular);
  liveHomeRail('New Anime from the Current Season', current.length ? current : popular.slice(0, 10));
  liveHomeRail('Top Picks for You', top.length ? top : popular.slice(0, 10));
  renderBrowseAll();
  renderSimulcastGrids();
  showToast('Live AniList catalog loaded');
}

async function searchAniListLive(query) {
  try {
    const data = await anilistQuery(SEARCH_QUERY, { search: query });
    return (data.Page.media || []).map(anilistItem);
  } catch (error) {
    console.warn('AniList search unavailable; using bundled search results.', error);
    return null;
  }
}

let liveSearchToken = 0;
async function handleSearch(query) {
  const token = ++liveSearchToken;
  staticHandleSearch(query);
  if (!query.trim()) return;
  const live = await searchAniListLive(query);
  if (token !== liveSearchToken || !live?.length) return;
  const box = document.getElementById('search-results');
  const rows = live.map(item => searchResultRow({ title: item.title, meta: 'AniList anime entry', audio: item.audio, kind: 'Series', img: item.img })).join('');
  box.innerHTML = `<section><div class="flex items-center justify-between mb-4"><h2 class="text-[21px] font-normal">Top Results</h2><span class="text-xs text-neutral-400">Live from AniList</span></div><div class="space-y-2">${rows}</div></section>`;
}

async function fetchAniListDetails(title) {
  try {
    const data = await anilistQuery(DETAIL_QUERY, { search: title });
    const media = data.Page.media?.[0];
    if (media) anilistCache.set(slugify(title), media);
    return media || null;
  } catch (error) {
    console.warn('AniList details unavailable; using bundled details.', error);
    return null;
  }
}

function applyAniListDetails(title, fallback, media) {
  if (!media) return fallback;
  const details = Object.assign({}, fallback);
  details.rawTitle = media.title?.english || media.title?.romaji || title;
  details.titleHTML = details.rawTitle;
  details.heroImg = media.coverImage?.extraLarge || media.coverImage?.large || details.heroImg;
  details.genres = (media.genres || []).join(', ') || details.genres;
  details.duration = media.episodes ? `${media.episodes} Episodes` : details.duration;
  details.ratingScore = media.averageScore ? String((media.averageScore / 10).toFixed(1)) : details.ratingScore;
  details.synopsisSnippet = (media.description || '').replace(/<[^>]+>/g, '').slice(0, 220) || details.synopsisSnippet;
  details.fullSynopsis = (media.description || '').replace(/<[^>]+>/g, '') || details.fullSynopsis;
  return details;
}

const staticGetAnimeData = getAnimeData;
getAnimeData = function(title, genre, audio, img) {
  return applyAniListDetails(title, staticGetAnimeData(title, genre, audio, img), anilistCache.get(slugify(title)));
};

setTimeout(() => { hydrateAniListCatalog().catch(error => console.warn('AniList hydration skipped.', error)); }, 450);
