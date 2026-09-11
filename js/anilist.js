// AniList data layer: live catalog, search, section-aware rails, and detail hydration.
const ANILIST_ENDPOINT = 'https://graphql.anilist.co';
const anilistCache = new Map();
const anilistRequests = new Map();

async function anilistQuery(query, variables = {}) {
  const key = query + JSON.stringify(variables);
  if (anilistRequests.has(key)) return anilistRequests.get(key);
  const request = fetch(ANILIST_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  }).then(async response => {
    if (!response.ok) throw new Error('AniList request failed: ' + response.status);
    const json = await response.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);
    return json.data;
  });
  anilistRequests.set(key, request);
  try { return await request; } catch (error) { anilistRequests.delete(key); throw error; }
}

const ANILIST_MEDIA_FIELDS = `
  id title { romaji english native }
  coverImage { large extraLarge }
  genres countryOfOrigin averageScore format episodes duration
  description season seasonYear status startDate { year month day }
`;
const ANILIST_PAGE_QUERY = `query($page:Int,$perPage:Int,$sort:[MediaSort],$status:MediaStatus,$genre:String,$search:String){
  Page(page:$page,perPage:$perPage){ media(type:ANIME,isAdult:false,sort:$sort,status:$status,genre:$genre,search:$search){${ANILIST_MEDIA_FIELDS}} }
}`;

function aniTitle(media) { return media.title?.english || media.title?.romaji || media.title?.native || 'Untitled Anime'; }
function aniImage(media) { return media.coverImage?.extraLarge || media.coverImage?.large || epImgs[0]; }
function aniAudio(media) { return media.countryOfOrigin === 'JP' ? 'Subtitled' : 'Dub | Sub'; }
function aniDescription(media) { return (media.description || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); }

function anilistItem(media) {
  const title = aniTitle(media);
  const item = {
    title,
    audio: aniAudio(media),
    img: aniImage(media),
    genres: (media.genres || []).join(', ') || 'Anime',
    anilistId: media.id
  };
  anilistCache.set(slugify(title), media);
  anilistCache.set(String(media.id), media);
  return item;
}

function jikanMedia(item) {
  const title = item.title_english || item.title || item.title_japanese || 'Untitled Anime';
  return { id: 'mal-' + item.mal_id, title: { romaji: title, english: item.title_english, native: item.title_japanese }, coverImage: { large: item.images?.jpg?.large_image_url || item.images?.jpg?.image_url, extraLarge: item.images?.jpg?.large_image_url || item.images?.jpg?.image_url }, genres: (item.genres || []).map(g => g.name), countryOfOrigin: 'JP', averageScore: item.score ? Math.round(item.score * 10) : null, format: item.type, episodes: item.episodes, duration: parseInt(item.duration) || null, description: item.synopsis || '', status: item.status };
}
async function jikanPage(options = {}) {
  let url;
  const limit = options.perPage || 18;
  if (options.search) url = 'https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(options.search) + '&order_by=popularity&sort=asc&limit=' + limit;
  else if (options.status === 'RELEASING') url = 'https://api.jikan.moe/v4/seasons/now?limit=' + limit;
  else if (options.genre === 'Romance') url = 'https://api.jikan.moe/v4/anime?genres=22&order_by=members&sort=desc&limit=' + limit;
  else if (options.genre === 'Music') url = 'https://api.jikan.moe/v4/anime?genres=19&order_by=members&sort=desc&limit=' + limit;
  else url = 'https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=' + limit;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Jikan request failed: ' + response.status);
  const json = await response.json();
  return (json.data || []).map(jikanMedia).map(anilistItem);
}
async function fetchAniListPage(options = {}) {
  try {
    const data = await anilistQuery(ANILIST_PAGE_QUERY, {
      page: 1,
      perPage: options.perPage || 18,
      sort: options.sort || ['POPULARITY_DESC'],
      status: options.status || null,
      genre: options.genre || null,
      search: options.search || null
    });
    return (data.Page.media || []).map(anilistItem);
  } catch (error) {
    console.warn('AniList unavailable; using real Jikan/MAL catalog fallback.', error);
    return await jikanPage(options);
  }
}

function livePosterCard(item) {
  return posterCard(item);
}

function replaceHomeRail(label, items) {
  const heading = [...document.querySelectorAll('#tab-home h2')].find(node => node.textContent.trim() === label);
  if (!heading || !items?.length) return;
  const section = heading.closest('section');
  const rail = section?.querySelector('.flex.gap-3.overflow-x-auto');
  if (rail) rail.innerHTML = items.map(livePosterCard).join('');
}

function updateHeroFromLive(items) {
  if (!items?.length) return;
  heroSlides.splice(0, heroSlides.length, ...items.slice(0, 6).map(item => ({
    title: item.title,
    studio: '© AniList',
    desc: aniDescription(anilistCache.get(slugify(item.title))) || ('Discover ' + item.title + ' and more anime from AniList.'),
    img: item.img
  })));
  currentHeroIndex = 0;
  setHeroSlide(0);
}

async function hydrateAniListCatalog() {
  try {
    const results = await Promise.allSettled([
      fetchAniListPage({ sort: ['POPULARITY_DESC'], perPage: 24 }),
      fetchAniListPage({ status: 'RELEASING', sort: ['START_DATE_DESC'], perPage: 18 }),
      fetchAniListPage({ sort: ['SCORE_DESC'], perPage: 18 }),
      fetchAniListPage({ genre: 'Romance', sort: ['POPULARITY_DESC'], perPage: 12 }),
      fetchAniListPage({ genre: 'Music', sort: ['POPULARITY_DESC'], perPage: 12 })
    ]);
    const liveSets = results.map(result => result.status === 'fulfilled' ? result.value : []);
    const popular = liveSets[0] || [];
    const releasing = liveSets[1]?.length ? liveSets[1] : popular;
    const scored = liveSets[2]?.length ? liveSets[2] : popular;
    const romance = liveSets[3]?.length ? liveSets[3] : popular;
    const music = liveSets[4]?.length ? liveSets[4] : popular;
    if (!popular.length) return;

    // Preserve product placement while replacing placeholder records with live anime.
    browseCatalog.splice(0, browseCatalog.length, ...popular.slice(0, 18));
    simulcastCatalog.splice(0, simulcastCatalog.length, ...releasing.slice(0, 18));
    renderBrowseAll();
    renderSimulcastGrids();
    updateHeroFromLive(popular);

    replaceHomeRail('Most Popular', popular.slice(0, 12));
    replaceHomeRail('New Anime from the Current Season', releasing.slice(0, 12));
    replaceHomeRail('Top Picks for You', scored.slice(0, 12));
    replaceHomeRail('Welcome! We Have White-Haired Characters!', popular.filter(item => /Action|Fantasy|Supernatural|Shounen|Shonen/i.test(item.genres)).slice(0, 12));
    replaceHomeRail('Your Watchlist', popular.slice(8, 20));
    replaceHomeRail('100 Anime Characters vs. 1 Gorilla', popular.filter(item => /Action|Adventure|Comedy/i.test(item.genres)).slice(0, 12));
    replaceHomeRail('Get Your Rom-Com Fix', romance.slice(0, 12));
    replaceHomeRail('Memorable Openings', music.slice(0, 12));
    showToast('Live AniList catalog loaded');
  } catch (error) {
    console.warn('AniList unavailable; keeping the bundled catalog.', error);
  }
}

async function searchAniListLive(query) {
  try { return await fetchAniListPage({ search: query, sort: ['SEARCH_MATCH'], perPage: 24 }); }
  catch (error) { console.warn('AniList search unavailable; using bundled search results.', error); return null; }
}

let liveSearchToken = 0;
async function handleSearch(query) {
  const token = ++liveSearchToken;
  staticHandleSearch(query);
  if (!query.trim()) return;
  const live = await searchAniListLive(query);
  if (token !== liveSearchToken || !live?.length) return;
  const box = document.getElementById('search-results');
  const rows = live.map(item => searchResultRow({
    title: item.title,
    meta: 'AniList anime',
    audio: item.audio,
    kind: 'Series',
    img: item.img,
    genres: item.genres
  })).join('');
  box.innerHTML = '<section><div class="flex items-center justify-between mb-4"><h2 class="text-[21px] font-normal">Top Results</h2><span class="text-xs text-neutral-400">Live from AniList</span></div><div class="space-y-2">' + rows + '</div></section>';
}

function applyAniListDetails(title, fallback, media) {
  if (!media) return fallback;
  const description = aniDescription(media);
  const d = Object.assign({}, fallback);
  d.rawTitle = aniTitle(media);
  d.titleHTML = d.rawTitle;
  d.heroImg = aniImage(media);
  d.genres = (media.genres || []).join(', ') || d.genres;
  d.duration = media.episodes ? ((media.episodes + ' Episodes') + (media.duration ? ' • ' + media.duration + 'm each' : '')) : d.duration;
  d.ratingScore = media.averageScore ? String((media.averageScore / 10).toFixed(1)) : d.ratingScore;
  d.synopsisSnippet = description.slice(0, 220) || d.synopsisSnippet;
  d.fullSynopsis = description || d.fullSynopsis;
  d.audioType = aniAudio(media);
  d.episodes = media.episodes ? Array.from({ length: Math.min(media.episodes, 12) }, (_, i) => ({
    id: i + 1, title: `${i + 1}. Episode ${i + 1}`, duration: (media.duration || 24) + 'm', img: d.heroImg,
    synopsis: description || `Episode ${i + 1} of ${d.rawTitle}.`
  })) : d.episodes;
  return d;
}

const staticGetAnimeData = getAnimeData;
getAnimeData = function(title, genre, audio, img) {
  return applyAniListDetails(title, staticGetAnimeData(title, genre, audio, img), anilistCache.get(slugify(title)));
};

setTimeout(hydrateAniListCatalog, 900);
