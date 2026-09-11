// Live AniList integration with graceful fallback to the bundled catalog.
    const ANILIST_ENDPOINT = 'https://graphql.anilist.co';
    const anilistCache = new Map();
    async function anilistQuery(query, variables={}){
      const response = await fetch(ANILIST_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({query,variables})});
      if(!response.ok) throw new Error('AniList request failed: '+response.status);
      const json=await response.json();
      if(json.errors) throw new Error(json.errors[0].message);
      return json.data;
    }
    function anilistItem(m){
      const title=m.title?.english || m.title?.romaji || m.title?.native || 'Untitled Anime';
      const audio=m.countryOfOrigin==='JP' ? 'Subtitled' : 'Dub | Sub';
      const item={title,audio,img:m.coverImage?.extraLarge || m.coverImage?.large || epImgs[0],genres:(m.genres||[]).join(', ')||'Anime',anilistId:m.id};
      anilistCache.set(slugify(title),m);
      return item;
    }
    const ANILIST_CATALOG_QUERY=`query($page:Int,$perPage:Int,$sort:[MediaSort]){Page(page:$page,perPage:$perPage){media(type:ANIME,sort:$sort,isAdult:false){id title{romaji english native} coverImage{large extraLarge} genres countryOfOrigin averageScore format episodes duration description}}}`;
    async function hydrateAniListCatalog(){
      try{
        const data=await anilistQuery(ANILIST_CATALOG_QUERY,{page:1,perPage:24,sort:['POPULARITY_DESC']});
        const live=(data.Page.media||[]).map(anilistItem);
        if(live.length<6) return;
        browseCatalog.splice(0,browseCatalog.length,...live.slice(0,12));
        simulcastCatalog.splice(0,simulcastCatalog.length,...live.slice(12,20));
        heroSlides.splice(0,heroSlides.length,...live.slice(0,6).map(item=>({title:item.title.toUpperCase(),studio:'© AniList',desc:'Discover '+item.title+' and more anime from AniList.',img:item.img})));
        renderBrowseAll(); renderSimulcastGrids();
        showToast('Live AniList catalog loaded');
      }catch(error){
        console.warn('AniList unavailable; using bundled catalog.',error);
      }
    }
    async function searchAniListLive(query){
      try{
        const data=await anilistQuery(`query($search:String){Page(page:1,perPage:20){media(type:ANIME,search:$search,isAdult:false,sort:SEARCH_MATCH){id title{romaji english native} coverImage{large extraLarge} genres countryOfOrigin format episodes duration}}}`,{search:query});
        return (data.Page.media||[]).map(anilistItem);
      }catch(error){
        console.warn('AniList search unavailable; using bundled search results.',error);
        return null;
      }
    }
    let liveSearchToken=0;
    async function handleSearch(query){
      const token=++liveSearchToken;
      staticHandleSearch(query);
      if(!query.trim()) return;
      const live=await searchAniListLive(query);
      if(token!==liveSearchToken || !live || !live.length) return;
      const box=document.getElementById('search-results');
      const rows=live.map(item=>searchResultRow({title:item.title,meta:'AniList anime entry',audio:item.audio,kind:'Series',img:item.img})).join('');
      box.innerHTML='<section><div class="flex items-center justify-between mb-4"><h2 class="text-[21px] font-normal">Top Results</h2><span class="text-xs text-neutral-400">Live from AniList</span></div><div class="space-y-2">'+rows+'</div></section>';
    }
    function applyAniListDetails(title, fallback, media){
      if(!media) return fallback;
      const d=Object.assign({},fallback);
      d.rawTitle=media.title?.english || media.title?.romaji || title;
      d.titleHTML=d.rawTitle;
      d.heroImg=media.coverImage?.extraLarge || media.coverImage?.large || d.heroImg;
      d.genres=(media.genres||[]).join(', ') || d.genres;
      d.duration=(media.episodes?((media.episodes+' Episodes')):d.duration);
      d.ratingScore=media.averageScore?String((media.averageScore/10).toFixed(1)):d.ratingScore;
      d.synopsisSnippet=(media.description||'').replace(/<[^>]+>/g,'').slice(0,220)||d.synopsisSnippet;
      d.fullSynopsis=(media.description||'').replace(/<[^>]+>/g,'')||d.fullSynopsis;
      return d;
    }
    const staticGetAnimeData=getAnimeData;
    getAnimeData=function(title,genre,audio,img){
      const base=staticGetAnimeData(title,genre,audio,img);
      return applyAniListDetails(title,base,anilistCache.get(slugify(title)));
    };
    setTimeout(hydrateAniListCatalog,900);
