const SAMPLE_STREAM = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const heroSlides = [
      { title:"ONE PIECE", studio:"© Toei Animation", desc:"Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond...", img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=900&auto=format&fit=crop" },
      { title:"MUSHOKU TENSEI", studio:"© Studio Bind", desc:"Reincarnated into a fantastical universe with memories of his former life intact, Rudeus Greyrat masters mystical arts and strives to conquer his regrets.", img:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=900&auto=format&fit=crop" },
      { title:"SOLO LEVELING", studio:"© A-1 Pictures", desc:"Sung Jinwoo, the notorious 'weakest hunter of all mankind', unlocks a mysterious quest log that grants him infinite power in an unforgiving world.", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=900&auto=format&fit=crop" },
      { title:"MY HERO ACADEMIA", studio:"© BONES Inc.", desc:"Izuku Midoriya continues his climactic battle alongside Class 1-A to protect civilization from the devastating grasp of All For One and Tomura Shigaraki.", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop" },
      { title:"THE EXILED HEAVY KNIGHT", studio:"© Project Black Torch", desc:"Disowned and deemed powerless by his swordsman clan, Elymas awakens an ancient heavy knight arsenal that turns standard class tiers upside down.", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=900&auto=format&fit=crop" },
      { title:"JUJUTSU KAISEN", studio:"© MAPPA", desc:"Yuji Itadori and Jujutsu High sorcerers plunge into the brutal Culling Game, confronting Kenjaku's deepest ancient domain expansions.", img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=900&auto=format&fit=crop" }
    ];

    const epImgs = [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop"
    ];

    const blackCloverEpisodes = [
      {id:1, title:"1. Asta and Yuno", synopsis:"Young Asta and Yuno are to receive powerful, personal magic tomes at the Grimoire Awarding Ceremony, but for one of them, the rite goes very wrong."},
      {id:2, title:"2. The Boys' Promise", synopsis:"Asta and Yuno make a life-defining promise: one of them will become the Wizard King. Their paths begin to split the moment the grimoires choose."},
      {id:3, title:"3. To the Royal Capital of the Clover Kingdom!", synopsis:"The two orphans leave the church behind and head for the royal capital, chasing the Magic Knights entrance exam."},
      {id:4, title:"4. The Magic Knights Entrance Exam", synopsis:"Asta and Yuno face the Magic Knights entrance exam, where raw guts collide with raw magical talent."},
      {id:5, title:"5. The Path to the Wizard King", synopsis:"Asta is recruited into the infamous Black Bulls, taking his first real step on the path to Wizard King."},
      {id:6, title:"6. The Black Bulls", synopsis:"Asta meets his chaotic new squad and learns what it really means to wear the Black Bulls robe."},
      {id:7, title:"7. The Other New Recruit", synopsis:"Another newcomer joins the Black Bulls, and Asta's first mission as a Magic Knight begins."},
      {id:45, title:"45. The Guy Who Doesn't Know When to Quit", synopsis:"Asta refuses to stay down as the battle pushes him past every limit he thought he had."},
      {id:46, title:"46. Awakening", synopsis:"A hidden power stirs as Asta's anti-magic takes a new form in the heat of battle."},
      {id:47, title:"47. The Only Weapon", synopsis:"With magic failing around him, Asta's sword becomes the only weapon that can turn the tide."},
      {id:48, title:"48. Despair vs. Hope", synopsis:"Despair closes in on the Clover Kingdom as Asta and his allies fight to keep hope alive."},
      {id:49, title:"49. Beyond Limits", synopsis:"The Black Bulls push beyond their limits to protect the people they swore to defend."},
      {id:50, title:"50. End of the Battle, End of Despair", synopsis:"The clash reaches its breaking point as despair and determination collide."},
      {id:51, title:"51. Proof of Rightness", synopsis:"Asta proves his path — with or without magic — as the battle's aftermath reshapes the kingdom."}
    ].map((e,i)=>({...e, duration:"23m", img: epImgs[i % epImgs.length]}));

    const animeDatabase = {
      "black clover": {
        rawTitle:"Black Clover", titleHTML:'Black <span class="inline-block text-white text-3xl align-middle mx-1">✤</span> Clover',
        heroImg:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
        ageRating:"U/A 16+", audioType:"Dub | Sub", genres:"Action, Adventure, Comedy, Fantasy, Shonen",
        ratingScore:"4.8", reviewsCount:"(317K)",
        synopsisSnippet:"Asta and Yuno are two orphans who want the same thing: to become the Wizard King. Locked in a friendly rivalry, they work hard towards their goal. While Yuno excels at magic, Asta has a p...",
        fullSynopsis:"Asta and Yuno are two orphans who want the same thing: to become the Wizard King. Locked in a friendly rivalry, they work hard towards their goal. While Yuno excels at magic, Asta has a problem uncommon in this world: he has no powers! But, on the day they receive their grimoires, they surprise everyone. To reach their goal, they’ll each find their own path to greatness—with or without magic.",
        advisoryTags:"Violence, Profanity, Suggestive Dialogue, Sexualized Imagery, Smoking",
        duration:"6 Seasons, 172 Episodes",
        audioLanguages:"English, Italiano, Deutsch, العربية, Français, Japanese, Español (América Latina), Português (Brasil), Español (España), Русский",
        subtitlesLanguages:"Español (España), Français, English, Português (Brasil), Polski, Deutsch, Español (América Latina), Italiano, العربية, Русский",
        seasons:[{name:"Season 1 Part 1",count:"51 Episodes"},{name:"Season 1 Part 2",count:"51 Episodes"},{name:"Season 1 Part 3",count:"52 Episodes"},{name:"Season 1 Part 4",count:"16 Episodes"},{name:"SP: OVA",count:"1 Episode"}],
        episodes: blackCloverEpisodes
      },
      "one piece": { rawTitle:"One Piece", titleHTML:"One Piece", heroImg:"https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop", ageRating:"U/A 16+", audioType:"Dub | Sub", genres:"Adventure, Action, Comedy, Shonen", ratingScore:"4.9", reviewsCount:"(820K)", synopsisSnippet:"Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates...", fullSynopsis:"Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the Grand Line, this captain will never give up until he claims the One Piece.", advisoryTags:"Cartoon Violence, Comic Mischief, Mild Language", duration:"14 Seasons, 1090 Episodes", audioLanguages:"English, Japanese, Español, Português, Français, Deutsch", subtitlesLanguages:"English, Español, Français, Deutsch, Português, Italiano", seasons:[{name:"Egghead Arc",count:"35 Episodes"},{name:"Wano Country",count:"195 Episodes"},{name:"East Blue",count:"61 Episodes"}], episodes:[{id:1,title:"1. I'm Luffy! The Man Who Will Become the Pirate King!",duration:"24m",img:epImgs[5],synopsis:"A young pirate named Luffy sets sail to become King of the Pirates and find the legendary One Piece."},{id:2,title:"2. Pirate Hunter Roronoa Zoro",duration:"24m",img:epImgs[1],synopsis:"Luffy meets the feared pirate hunter Roronoa Zoro and makes him the first member of his crew."}] },
      "solo leveling": { rawTitle:"Solo Leveling", titleHTML:"Solo Leveling", heroImg:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop", ageRating:"16+", audioType:"Dub | Sub", genres:"Action, Dungeon, Fantasy, Super Power", ratingScore:"4.9", reviewsCount:"(412K)", synopsisSnippet:"They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter Sung Jinwoo...", fullSynopsis:"Sung Jinwoo, the world's weakest hunter, awakens a mysterious player interface after a brutal dual-dungeon massacre and begins leveling without limit.", advisoryTags:"Graphic Violence, Blood and Gore", duration:"1 Season, 12 Episodes", audioLanguages:"English, Japanese, Korean, Español, Deutsch, Français", subtitlesLanguages:"English, Español, Français, Deutsch, Português", seasons:[{name:"Season 1",count:"12 Episodes"},{name:"Season 2: Arise from the Shadow",count:"Coming Soon"}], episodes:[{id:1,title:"1. I'm Used to It",duration:"24m",img:epImgs[3],synopsis:"The world's weakest hunter Sung Jinwoo walks into another raid, used to being the one who barely survives."},{id:2,title:"2. If I Had One More Chance",duration:"24m",img:epImgs[4],synopsis:"Trapped in a double dungeon, Jinwoo is given one impossible chance to live — and to grow stronger."}] },
      "jujutsu kaisen": { rawTitle:"JUJUTSU KAISEN", titleHTML:"JUJUTSU KAISEN", heroImg:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop", ageRating:"16+", audioType:"Dub | Sub", genres:"Dark Fantasy, Supernatural, Shonen", ratingScore:"4.9", reviewsCount:"(540K)", synopsisSnippet:"Yuji Itadori swallows a cursed finger to save his friend and binds his soul with Ryomen Sukuna...", fullSynopsis:"Yuji Itadori swallows a legendary cursed object to save a classmate, binding his soul with the King of Curses and plunging into the world of Jujutsu sorcerers.", advisoryTags:"Graphic Violence, Body Horror", duration:"2 Seasons, 47 Episodes", audioLanguages:"English, Japanese, Español, Português, Français", subtitlesLanguages:"English, Español, Français, Deutsch, Português", seasons:[{name:"Season 2: Shibuya Incident",count:"23 Episodes"},{name:"Season 1",count:"24 Episodes"}], episodes:[{id:1,title:"1. Ryomen Sukuna",duration:"24m",img:epImgs[4],synopsis:"Yuji Itadori swallows a cursed finger to save his friends and becomes the vessel of Ryomen Sukuna."},{id:2,title:"2. For Myself",duration:"24m",img:epImgs[3],synopsis:"Yuji begins life as a jujutsu sorcerer, fighting curses not just for others, but for himself."}] },
      "my hero academia": { rawTitle:"My Hero Academia", titleHTML:"My Hero Academia", heroImg:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop", ageRating:"U/A 13+", audioType:"Dub | Sub", genres:"Shonen, Superheroes, Action", ratingScore:"4.8", reviewsCount:"(650K)", synopsisSnippet:"Izuku Midoriya lives in a world where 80% of humans have Quirks. Born powerless, his hero spirit earns All Might's flame...", fullSynopsis:"Izuku Midoriya is born Quirkless in a superpowered world, then inherits One For All and enters U.A. High to become the greatest hero.", advisoryTags:"Superhero Violence, Mild Language", duration:"7 Seasons, 150 Episodes", audioLanguages:"English, Japanese, Español, Français, Deutsch", subtitlesLanguages:"English, Español, Français, Deutsch, Português", seasons:[{name:"Season 7",count:"21 Episodes"},{name:"Season 1",count:"13 Episodes"}], episodes:[{id:1,title:"1. Izuku Midoriya: Origin",duration:"24m",img:epImgs[1],synopsis:"Quirkless Izuku Midoriya still dreams of becoming a hero — until a fateful meeting with All Might changes everything."}] }
    };

    const browseCatalog = [
      { title:"Frieren: Beyond Journey's End", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=700&auto=format&fit=crop", genres:"Fantasy, Adventure, Drama" },
      { title:"Golden Kamuy", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop", genres:"Action, Adventure, Seinen" },
      { title:"Fire Force Season 3", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop", genres:"Action, Supernatural, Shonen" },
      { title:"Fate/strange Fake", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop", genres:"Action, Fantasy, Supernatural" },
      { title:"Solo Leveling", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop", genres:"Action, Fantasy" },
      { title:"JUJUTSU KAISEN", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop", genres:"Action, Supernatural, Shonen" },
      { title:"One Piece", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=700&auto=format&fit=crop", genres:"Action, Adventure, Shonen" },
      { title:"Black Clover", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop", genres:"Action, Fantasy, Shonen" }
    ];

    const simulcastCatalog = [
      { title:"Mushoku Tensei: Jobless Reincarnation", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=700&auto=format&fit=crop" },
      { title:"Kaiju No. 8", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop" },
      { title:"The 100 Girlfriends Who Really Love You", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop" },
      { title:"Saga of Tanya the Evil", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop" },
      { title:"Daemons of the Shadow Realm", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop" },
      { title:"BLACK TORCH", audio:"Dub | Sub", img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop" }
    ];

    const genreTiles = [
      { name:"ACTION", icon:'<path d="M12 3c1 4 3 6 6 7-3 1-5 3-6 7-1-4-3-6-6-7 3-1 5-3 6-7z" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop" },
      { name:"ADVENTURE", icon:'<rect x="6" y="8" width="12" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="12" r="1.2" fill="currentColor"/><circle cx="15" cy="12" r="1.2" fill="currentColor"/>', img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop" },
      { name:"COMEDY", icon:'<path d="M7 14c1.2 2 3 3 5 3s3.8-1 5-3M8 10h.01M16 10h.01" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=700&auto=format&fit=crop" },
      { name:"DRAMA", icon:'<path d="M12 7c2-3 7 1 0 7-7-6-2-10 0-7z" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop" },
      { name:"FANTASY", icon:'<path d="M8 17l4-12 4 12M9.5 13h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>', img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop" },
      { name:"MUSIC", icon:'<path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="7" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="16" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=700&auto=format&fit=crop" },
      { name:"ROMANCE", icon:'<path d="M8.5 8.5c-1.5 0-2.5 1.3-2.5 2.7 0 3.3 4 5.8 6 6.8 2-1 6-3.5 6-6.8 0-1.4-1-2.7-2.5-2.7-1.1 0-2 .6-2.5 1.5-.5-.9-1.4-1.5-2.5-1.5z" fill="none" stroke="currentColor" stroke-width="1.6"/>', img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop" },
      { name:"SCI-FI", icon:'<ellipse cx="12" cy="13" rx="8" ry="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 13c0-4 8-4 8 0" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=700&auto=format&fit=crop" },
      { name:"SEINEN", icon:'<path d="M8 7h8l1 4H7l1-4zM7 11h10v7H7z" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1485846234645-a62644f84781?q=80&w=700&auto=format&fit=crop" },
      { name:"SHOJO", icon:'<rect x="7" y="4" width="10" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 11c.8-1.6 3-.4 0 2-3-2.4-.8-3.6 0-2z" fill="currentColor"/>', img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=700&auto=format&fit=crop" },
      { name:"SHONEN", icon:'<path d="M8 13c0-4 8-5 8 0v5H8v-5z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M10 10V7h4v3" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=700&auto=format&fit=crop" },
      { name:"SLICE OF LIFE", icon:'<rect x="6" y="6" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6 10h12M10 6v4" stroke="currentColor" stroke-width="1.7"/><text x="12" y="17" text-anchor="middle" font-size="6" fill="currentColor" font-weight="700">18</text>', img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=700&auto=format&fit=crop" },
      { name:"SPORTS", icon:'<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 4c2 3 2 13 0 16M4 12c3 2 13 2 16 0" fill="none" stroke="currentColor" stroke-width="1.5"/>', img:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=700&auto=format&fit=crop" },
      { name:"SUPERNATURAL", icon:'<path d="M12 5c4 3 5 7 3 11-1 0-2-1-3-1s-2 1-3 1c-2-4-1-8 3-11z" fill="none" stroke="currentColor" stroke-width="1.7"/>', img:"https://images.unsplash.com/photo-1509248961158-e54f6937749c?q=80&w=700&auto=format&fit=crop" },
      { name:"THRILLER", icon:'<path d="M8 18l2-10 2 4 2-6 2 12" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>', img:"https://images.unsplash.com/photo-1485846234645-a62644f84781?q=80&w=700&auto=format&fit=crop" }
    ];

    const simulcastSeasons = [
      "Summer 2026","Spring 2026","Winter 2026","Fall 2025","Summer 2025","Spring 2025","Winter 2025",
      "Fall 2024","Summer 2024","Spring 2024","Winter 2024","Fall 2023","Summer 2023","Spring 2023",
      "Winter 2023","Fall 2022","Summer 2022"
    ];

    let currentHeroIndex = 0;
    let activeAnime = null;
    let activeSeasonIndex = 0;
    let currentEpisodeIndex = 0;
    let watchlistSet = new Set();
    let currentActionItem = "";
    let currentListTab = "watchlist";
    let currentBrowseTab = "all";
    let currentSimulcastSeason = "Summer 2026";
    let browseSortIndex = 0;
    const browseSorts = ["Popular","Newest","A-Z"];
    setInterval(() => setHeroSlide((currentHeroIndex + 1) % heroSlides.length), 6000);

    function slugify(t){ return String(t||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim(); }
    function makeEps(title){
      return [1,2,3,4,5,6,7].map((n,i)=>({
        id:n,
        title:n+". Episode "+n,
        duration:"23m",
        img: epImgs[i%epImgs.length],
        synopsis: "Episode "+n+" of "+title+" continues the story as new battles, secrets, and turning points unfold."
      }));
    }
    function getAnimeData(title, genre, audio, img){
      const key = slugify(title);
      for (const k in animeDatabase) {
        if (key.includes(k) || k.includes(key) || slugify(animeDatabase[k].rawTitle) === key) {
          const d = Object.assign({}, animeDatabase[k]);
          if (genre) d.genres = genre;
          if (audio) d.audioType = audio;
          if (img) d.heroImg = img;
          return d;
        }
      }
      const name = title || "Anime";
      return {
        rawTitle: name, titleHTML: name,
        heroImg: img || "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
        ageRating:"U/A 16+", audioType: audio || "Dub | Sub", genres: genre || "Action, Adventure, Fantasy",
        ratingScore:"4.8", reviewsCount:"(245K)",
        synopsisSnippet: name+" follows legendary heroes fighting for freedom, friendship, and destiny against impossible challenges...",
        fullSynopsis: "In the universe of "+name+", heroes rise against darkness with extraordinary resolve. Experience high-octane battles, emotional storylines, and world-class animation produced direct from Japan. To reach their goal, they’ll each find their own path to greatness.",
        advisoryTags:"Violence, Profanity, Suggestive Dialogue, Action Themes",
        duration:"4 Seasons, 96 Episodes",
        audioLanguages:"English, Italiano, Deutsch, العربية, Français, Japanese, Español (América Latina), Português (Brasil), Español (España), Русский",
        subtitlesLanguages:"Español (España), Français, English, Português (Brasil), Polski, Deutsch, Español (América Latina), Italiano, العربية, Русский",
        seasons:[{name:"Season 1 Part 1",count:"24 Episodes"},{name:"Season 1 Part 2",count:"24 Episodes"},{name:"Season 2",count:"24 Episodes"}],
        episodes: makeEps(name)
      };
    }

    function posterCard(item){
      return '<div class="space-y-1.5 cursor-pointer" onclick="openAnimeDetails(\''+esc(item.title)+'\', \''+esc(item.genres||'Action, Adventure')+'\', \''+esc(item.audio)+'\', \''+esc(item.img)+'\')">'+
        '<div class="w-full aspect-[2/3] overflow-hidden bg-neutral-900"><img src="'+item.img+'" class="w-full h-full object-cover" alt="'+item.title+'"/></div>'+
        '<p class="text-[13px] font-semibold text-white leading-snug line-clamp-2 min-h-[40px]">'+item.title+'</p>'+
        '<div class="flex items-center justify-between text-[12px] text-neutral-400">'+
          '<span>'+item.audio+'</span>'+
          '<button onclick="event.stopPropagation(); openActionSheet(\''+esc(item.title)+'\')" class="px-1 text-lg leading-none">⋮</button>'+
        '</div></div>';
    }

    function renderBrowseAll(){
      let items = browseCatalog.slice();
      if (browseSorts[browseSortIndex] === "A-Z") items.sort((a,b)=>a.title.localeCompare(b.title));
      if (browseSorts[browseSortIndex] === "Newest") items = items.slice().reverse();
      document.getElementById('browse-all-grid').innerHTML = items.map(posterCard).join('');
    }
    function renderSimulcastGrids(){
      const html = simulcastCatalog.map(posterCard).join('');
      document.getElementById('browse-simulcast-grid').innerHTML = html;
      document.getElementById('nav-simulcast-grid').innerHTML = html;
      document.querySelectorAll('.simulcast-season-label').forEach(el => el.innerText = currentSimulcastSeason);
    }
    function renderGenres(){
      document.getElementById('browse-pane-genres').innerHTML = genreTiles.map(g =>
        '<button onclick="openGenre(\''+esc(g.name)+'\')" class="relative w-full aspect-[16/10] overflow-hidden">'+
          '<img src="'+g.img+'" class="absolute inset-0 w-full h-full object-cover"/>'+
          '<div class="absolute inset-0 bg-black/55"></div>'+
          '<div class="relative z-10 h-full flex flex-col items-center justify-center text-white gap-2">'+
            '<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24">'+g.icon+'</svg>'+
            '<span class="text-[13px] font-bold tracking-[1.5px]">'+g.name+'</span>'+
          '</div></button>'
      ).join('');
    }
    function openGenre(name){
      showToast('Showing '+name+' anime');
      switchBrowseTab('all');
    }
    function cycleBrowseSort(){
      browseSortIndex = (browseSortIndex + 1) % browseSorts.length;
      document.getElementById('browse-sort-label').innerText = browseSorts[browseSortIndex];
      renderBrowseAll();
    }
    function switchBrowseTab(tab){
      currentBrowseTab = tab;
      ['all','simulcasts','genres'].forEach(t=>{
        const btn = document.getElementById('browsetab-'+t);
        const pane = document.getElementById('browse-pane-'+t);
        const on = t===tab;
        btn.className = 'pb-3 whitespace-nowrap relative ' + (on ? 'text-white' : 'text-neutral-400');
        btn.innerHTML = (t==='all'?'All Anime':t==='simulcasts'?'Simulcasts':'Anime Genres') + (on ? '<span class="absolute left-0 right-0 -bottom-px h-[3px] bg-cr-orange rounded-t"></span>' : '');
        pane.classList.toggle('hidden', !on);
      });
    }
    function switchListTab(tab){
      currentListTab = tab;
      ['watchlist','crunchylists','history','downloads'].forEach(t=>{
        const btn = document.getElementById('listtab-'+t);
        const pane = document.getElementById('lists-pane-'+t);
        const on = t===tab;
        pane.classList.toggle('hidden', !on);
        if (t==='downloads') {
          btn.className = 'pb-3 whitespace-nowrap relative flex items-center gap-1.5 ' + (on ? 'text-white' : 'text-neutral-400');
          btn.innerHTML = '<svg class="w-4 h-4 text-cr-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/></svg>Downloads' + (on ? '<span class="absolute left-0 right-0 -bottom-px h-[3px] bg-cr-orange rounded-t"></span>' : '');
        } else {
          const label = t==='watchlist'?'Watchlist':t==='crunchylists'?'Crunchylists':'History';
          btn.className = 'pb-3 whitespace-nowrap relative ' + (on ? 'text-white' : 'text-neutral-400');
          btn.innerHTML = label + (on ? '<span class="absolute left-0 right-0 -bottom-px h-[3px] bg-cr-orange rounded-t"></span>' : '');
        }
      });
      if (tab==='watchlist') renderWatchlist();
    }
    function renderWatchlist(){
      const empty = document.getElementById('watchlist-empty');
      const grid = document.getElementById('watchlist-grid');
      const titles = Array.from(watchlistSet);
      if (!titles.length) {
        empty.classList.remove('hidden');
        grid.classList.add('hidden');
        grid.innerHTML = '';
        return;
      }
      empty.classList.add('hidden');
      grid.classList.remove('hidden');
      grid.innerHTML = titles.map(t => {
        const found = browseCatalog.concat(simulcastCatalog).find(x => slugify(x.title) === t) || { title: t.replace(/\b\w/g,c=>c.toUpperCase()), audio:"Dub | Sub", img: epImgs[0], genres:"Action" };
        const data = getAnimeData(found.title, found.genres, found.audio, found.img);
        return posterCard({ title: data.rawTitle, audio: data.audioType, img: data.heroImg, genres: data.genres });
      }).join('');
    }
    function openSimulcastSeasonPicker(){
      document.getElementById('simulcast-season-list').innerHTML = simulcastSeasons.map(s =>
        '<button onclick="selectSimulcastSeason(\''+s+'\')" class="w-full text-left py-4 text-[17px] '+(s===currentSimulcastSeason?'text-cr-orange font-semibold':'text-white')+'">'+s+'</button>'
      ).join('');
      document.getElementById('simulcast-season-modal').classList.remove('hidden');
    }
    function closeSimulcastSeasonPicker(){ document.getElementById('simulcast-season-modal').classList.add('hidden'); }
    function selectSimulcastSeason(s){
      currentSimulcastSeason = s;
      renderSimulcastGrids();
      closeSimulcastSeasonPicker();
      showToast('Showing '+s+' simulcasts');
    }

    function setHeroSlide(index){
      currentHeroIndex = index;
      const data = heroSlides[index];
      const img = document.getElementById('hero-img');
      img.classList.add('opacity-40');
      setTimeout(()=>{
        img.src = data.img;
        document.getElementById('hero-title-area').innerHTML = '<span class="text-3xl font-black tracking-tighter text-amber-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] uppercase italic block font-sans">'+data.title+'</span><span class="text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold">'+data.studio+'</span>';
        document.getElementById('hero-desc').innerText = data.desc;
        img.classList.remove('opacity-40');
      },200);
      document.querySelectorAll('.hero-indicator').forEach((btn,i)=>{
        btn.classList.toggle('bg-cr-orange', i===index);
        btn.classList.toggle('bg-neutral-600', i!==index);
      });
    }

    function openAnimeDetails(title, genre, audio, img){
      activeAnime = getAnimeData(title, genre, audio, img);
      activeSeasonIndex = 0;
      document.getElementById('detail-hero-img').src = activeAnime.heroImg;
      document.getElementById('header-series-title').innerText = activeAnime.rawTitle;
      document.getElementById('detail-main-title').innerHTML = activeAnime.titleHTML;
      document.getElementById('detail-age-tag').innerText = activeAnime.ageRating;
      document.getElementById('detail-audio-type').innerText = activeAnime.audioType;
      document.getElementById('detail-genres-text').innerText = activeAnime.genres;
      document.getElementById('detail-score-text').innerText = activeAnime.ratingScore;
      document.getElementById('detail-reviews-count').innerText = activeAnime.reviewsCount+' ▾';
      document.getElementById('detail-synopsis-snippet').innerText = activeAnime.synopsisSnippet;
      document.getElementById('more-details-page-title').innerText = activeAnime.rawTitle;
      document.getElementById('more-details-full-synopsis').innerText = activeAnime.fullSynopsis;
      document.getElementById('more-details-advisory-rating').innerText = activeAnime.ageRating;
      document.getElementById('more-details-advisory-tags').innerText = activeAnime.advisoryTags;
      document.getElementById('more-details-duration').innerText = activeAnime.duration;
      document.getElementById('more-details-audio').innerText = activeAnime.audioLanguages;
      document.getElementById('more-details-subs').innerText = activeAnime.subtitlesLanguages;
      document.getElementById('current-season-label').innerText = activeAnime.seasons[0].name;
      updateWatchlistButtonsUI();
      renderEpisodes();
      renderMoreLikeThis();
      switchDetailTab('episodes');
      const screen = document.getElementById('anime-details-screen');
      screen.classList.remove('hidden');
      screen.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      const headerTitle = document.getElementById('header-series-title');
      const headerBar = document.getElementById('details-top-header');
      screen.onscroll = function(){
        if (screen.scrollTop > 220) { headerTitle.classList.remove('opacity-0'); headerBar.classList.add('bg-black'); }
        else { headerTitle.classList.add('opacity-0'); headerBar.classList.remove('bg-black'); }
      };
    }
    function openDetailsModal(title, genre, audio, img){ openAnimeDetails(title, genre, audio, img); }
    function closeAnimeDetails(){ document.getElementById('anime-details-screen').classList.add('hidden'); document.body.style.overflow='auto'; }

    function renderEpisodes(){
      document.getElementById('episode-list-items').innerHTML = activeAnime.episodes.map((ep, idx) =>
        '<div onclick="playEpisodeAt('+idx+')" class="flex gap-3 items-center py-1.5 cursor-pointer">'+
          '<div class="relative w-36 aspect-[16/9] flex-shrink-0 bg-neutral-900 overflow-hidden">'+
            '<img src="'+ep.img+'" class="w-full h-full object-cover"/>'+
            '<div class="absolute top-1 left-1 bg-black/85 px-1.5 py-0.5 rounded flex items-center gap-1"><span class="text-cr-gold text-[10px]">👑</span><span class="text-[9px] font-black text-cr-gold">PREMIUM</span></div>'+
            '<div class="absolute bottom-1 right-1 bg-black/85 text-[10px] px-1 rounded">'+ep.duration+'</div>'+
          '</div>'+
          '<div class="flex-1"><h4 class="text-xs font-semibold leading-snug">'+ep.title+'</h4></div>'+
          '<div class="flex items-center gap-2 text-neutral-400">'+
            '<button onclick="event.stopPropagation(); showToast(\'Downloading '+esc(ep.title)+'...\')" class="p-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg></button>'+
            '<button onclick="event.stopPropagation(); openActionSheet(\''+esc(ep.title)+'\')" class="p-1">⋮</button>'+
          '</div></div>'
      ).join('');
    }
    function esc(s){ return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }
    function renderMoreLikeThis(){
      const keys = Object.keys(animeDatabase).filter(k => slugify(animeDatabase[k].rawTitle) !== slugify(activeAnime.rawTitle)).slice(0,3);
      document.getElementById('similar-container').innerHTML = keys.map(k => {
        const item = animeDatabase[k];
        return '<div class="space-y-1 cursor-pointer" onclick="openAnimeDetails(\''+esc(item.rawTitle)+'\')"><div class="aspect-[2/3] bg-neutral-900 overflow-hidden"><img src="'+item.heroImg+'" class="w-full h-full object-cover"/></div><p class="text-xs font-semibold truncate">'+item.rawTitle+'</p></div>';
      }).join('');
    }
    function openSeasonsModal(){
      document.getElementById('seasons-list-container').innerHTML = activeAnime.seasons.map((s,i)=>
        '<div onclick="selectSeason('+i+')" class="flex items-center justify-between cursor-pointer"><span class="'+(i===activeSeasonIndex?'text-cr-orange font-bold':'text-white')+'">'+s.name+'</span><span class="text-sm text-neutral-500">'+s.count+'</span></div>'
      ).join('');
      document.getElementById('seasons-modal').classList.remove('hidden');
    }
    function closeSeasonsModal(){ document.getElementById('seasons-modal').classList.add('hidden'); }
    function selectSeason(i){ activeSeasonIndex=i; document.getElementById('current-season-label').innerText=activeAnime.seasons[i].name; closeSeasonsModal(); showToast('Switched to '+activeAnime.seasons[i].name); }
    function nextSeason(){ selectSeason((activeSeasonIndex+1)%activeAnime.seasons.length); }
    function openMoreDetailsModal(){ document.getElementById('more-details-modal').classList.remove('hidden'); }
    function closeMoreDetailsModal(){ document.getElementById('more-details-modal').classList.add('hidden'); }
    function updateWatchlistButtonsUI(){
      const saved = watchlistSet.has(slugify(activeAnime.rawTitle));
      document.getElementById('detail-watchlist-icon').innerText = saved ? '✓' : '+';
      document.getElementById('detail-watchlist-text').innerText = saved ? 'Added' : 'My List';
      document.getElementById('floating-bookmark-icon').setAttribute('fill', saved ? 'currentColor' : 'none');
    }
    function toggleActiveAnimeWatchlist(){
      const k = slugify(activeAnime.rawTitle);
      if (watchlistSet.has(k)) { watchlistSet.delete(k); showToast('Removed "'+activeAnime.rawTitle+'" from My Lists'); }
      else { watchlistSet.add(k); showToast('Added "'+activeAnime.rawTitle+'" to your Watchlist!'); }
      updateWatchlistButtonsUI();
      renderWatchlist();
    }
    function switchDetailTab(tab){
      const epBtn=document.getElementById('tab-episodes-btn'), simBtn=document.getElementById('tab-similar-btn');
      const epC=document.getElementById('episodes-container'), simC=document.getElementById('similar-container');
      if(tab==='episodes'){ epBtn.className='pb-3 text-white border-b-2 border-cr-orange'; simBtn.className='pb-3 text-neutral-500'; epC.classList.remove('hidden'); simC.classList.add('hidden'); }
      else { simBtn.className='pb-3 text-white border-b-2 border-cr-orange'; epBtn.className='pb-3 text-neutral-500'; simC.classList.remove('hidden'); epC.classList.add('hidden'); }
    }

    function epNameOnly(title){
      return String(title||"").replace(/^\d+\.\s*/, "");
    }

    function playFirstEpisode(){ playEpisodeAt(0); }

    function playAnime(title){
      if (!activeAnime) activeAnime = getAnimeData(title);
      let idx = 0;
      if (title && activeAnime.episodes) {
        const found = activeAnime.episodes.findIndex(ep => title.indexOf(ep.title) !== -1 || title.indexOf(epNameOnly(ep.title)) !== -1);
        if (found >= 0) idx = found;
      }
      playEpisodeAt(idx);
    }

    function playEpisodeAt(index){
      if (!activeAnime) return;
      const eps = activeAnime.episodes || [];
      if (!eps.length) return;
      currentEpisodeIndex = Math.max(0, Math.min(index, eps.length - 1));
      const ep = eps[currentEpisodeIndex];
      const next = eps[currentEpisodeIndex + 1];

      document.getElementById('player-series-name').innerText = activeAnime.rawTitle;
      document.getElementById('player-ep-title').innerText = "E" + ep.id + " - " + epNameOnly(ep.title);
      document.getElementById('player-age-tag').innerText = activeAnime.ageRating;
      document.getElementById('player-audio-type').innerText = activeAnime.audioType;
      document.getElementById('player-synopsis').innerText = ep.synopsis || ("Episode " + ep.id + " of " + activeAnime.rawTitle + ".");
      document.getElementById('player-advisory-rating').innerText = activeAnime.ageRating;
      document.getElementById('player-advisory-tags').innerText = activeAnime.advisoryTags;

      const nextWrap = document.getElementById('player-next-wrap');
      if (next) {
        nextWrap.classList.remove('hidden');
        document.getElementById('player-next-img').src = next.img;
        document.getElementById('player-next-title').innerText = next.title;
        document.getElementById('player-next-dur').innerText = next.duration;
      } else {
        nextWrap.classList.add('hidden');
      }

      const video = document.getElementById('html5-video');
      video.poster = ep.img || activeAnime.heroImg;
      if (!video.getAttribute('src') && video.querySelector('source')) {
        video.querySelector('source').src = SAMPLE_STREAM;
      }
      video.load();
      document.getElementById('video-modal').classList.remove('hidden');
      document.getElementById('video-modal').scrollTop = 0;
      video.play().catch(function(){});
    }

    function playNextEpisode(){ playEpisodeAt(currentEpisodeIndex + 1); }

    function closeVideoModal(){
      const video = document.getElementById('html5-video');
      video.pause();
      document.getElementById('video-modal').classList.add('hidden');
    }

    function showToast(message){
      const toast=document.getElementById('toast'); document.getElementById('toast-text').innerText=message;
      toast.classList.remove('opacity-0','pointer-events-none');
      setTimeout(()=>toast.classList.add('opacity-0','pointer-events-none'),2400);
    }
    function toggleWatchlist(button, title){
      const isSaved = button.classList.contains('bg-cr-orange');
      if (isSaved) { button.classList.remove('bg-cr-orange','text-black'); button.classList.add('text-cr-orange'); watchlistSet.delete(slugify(title)); showToast('Removed "'+title+'" from My Lists'); }
      else { button.classList.add('bg-cr-orange','text-black'); button.classList.remove('text-cr-orange'); watchlistSet.add(slugify(title)); showToast('Added "'+title+'" to your Watchlist!'); }
      renderWatchlist();
    }
    function hideStartupSplash(){
      const splash=document.getElementById('startup-splash');
      if(!splash) return;
      splash.classList.add('opacity-0');
      setTimeout(()=>splash.remove(),550);
    }
    function showNormalLoading(duration=750){
      const loader=document.getElementById('normal-loading');
      if(!loader) return;
      loader.classList.remove('hidden');
      setTimeout(()=>loader.classList.add('hidden'),duration);
    }
    window.addEventListener('load',()=>setTimeout(hideStartupSplash,1000));
    function switchTab(tabId){
      ['home','lists','browse','simulcasts','account'].forEach(t=>{
        document.getElementById('tab-'+t).classList.add('hidden');
        document.getElementById('nav-'+t).classList.remove('text-cr-orange');
        document.getElementById('nav-'+t).classList.add('text-neutral-400');
      });
      document.getElementById('tab-'+tabId).classList.remove('hidden');
      document.getElementById('nav-'+tabId).classList.add('text-cr-orange');
      document.getElementById('nav-'+tabId).classList.remove('text-neutral-400');
      document.getElementById('app-top-header').classList.toggle('hidden', tabId !== 'home');
      const stickyPremium = document.getElementById('sticky-premium-bar');
      if (stickyPremium) stickyPremium.classList.toggle('hidden', tabId !== 'home');
      if (tabId === 'browse') showNormalLoading();
      if (tabId === 'lists') renderWatchlist();
      window.scrollTo({top:0,behavior:'smooth'});
    }
    function openActionSheetForCurrent(){ openActionSheet(activeAnime?activeAnime.rawTitle:'Options'); }
    function openActionSheet(title){ currentActionItem=title; document.getElementById('action-sheet-title').innerText=title; document.getElementById('action-sheet').classList.remove('hidden'); }
    function closeActionSheet(){ document.getElementById('action-sheet').classList.add('hidden'); }
    function saveFromActionSheet(){ showToast('Saved "'+currentActionItem+'" to your Watchlist!'); watchlistSet.add(slugify(currentActionItem)); if(activeAnime){ updateWatchlistButtonsUI(); } renderWatchlist(); closeActionSheet(); }
    function downloadEntireCurrentSeason(){ showToast('Downloading '+(activeAnime&&activeAnime.seasons[activeSeasonIndex].name)+' in 1080p...'); }
    function shareAnimeLink(){ showToast('Share link copied to clipboard!'); }
    function toggleServerChooser(){
      const chooser=document.getElementById('server-chooser');
      chooser.classList.toggle('hidden');
      document.getElementById('server-chooser-arrow').innerText=chooser.classList.contains('hidden')?'›':'⌃';
    }
    function selectAccountServer(server){
      document.getElementById('server-1-check').classList.toggle('hidden',server!==1);
      document.getElementById('server-2-check').classList.toggle('hidden',server!==2);
      document.getElementById('selected-server-label').innerText='Server '+server;
      document.getElementById('server-chooser').classList.add('hidden');
      document.getElementById('server-chooser-arrow').innerText='›';
      showToast('Connected to Server '+server);
    }
    function openPremiumModal(){ document.getElementById('premium-modal').classList.remove('hidden'); }
    function closePremiumModal(){ document.getElementById('premium-modal').classList.add('hidden'); }
    const searchReferenceItems=[
      {title:'JUJUTSU KAISEN',meta:'4 Seasons, 60 Episodes',audio:'Dub | Sub',kind:'Series',img:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop'},
      {title:'JUJUTSU KAISEN 0',meta:'1 Season, 1 Episode',audio:'Dub | Sub',kind:'Movies',img:'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop'},
      {title:'How Not to Summon a Demon Lord',meta:'3 Seasons, 32 Episodes',audio:'Dub | Sub',kind:'Series',img:'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop'},
      {title:'Sony Music AnimeSongs ONLINE 2022',meta:'1 Season, 1 Episode',audio:'Japanese',kind:'Series',img:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop'}
    ];
    function searchResultRow(item){
      const t=esc(item.title), img=esc(item.img);
      return '<button onclick="openAnimeDetails(\''+t+'\',\'Action, Adventure\',\''+esc(item.audio)+'\',\''+img+'\');closeSearchModal()" class="w-full flex items-center gap-4 py-2 text-left"><div class="w-[42%] aspect-[16/9] shrink-0 overflow-hidden bg-neutral-900"><img src="'+img+'" class="w-full h-full object-cover" alt="'+t+'"></div><div class="min-w-0 flex-1"><p class="text-[17px] font-semibold truncate">'+t+'</p><p class="text-[15px] text-neutral-400 mt-1">'+item.meta+'</p><p class="text-[14px] mt-3"><span class="text-[#12b8b5]">'+item.kind+'</span><span class="text-neutral-400"> • '+item.audio+'</span></p></div><span class="text-3xl leading-none text-neutral-400">⋮</span></button>';
    }
    function openSearchModal(){
      document.getElementById('search-modal').classList.remove('hidden');
      document.getElementById('search-input').focus();
      handleSearch(document.getElementById('search-input').value);
    }
    function closeSearchModal(){ document.getElementById('search-modal').classList.add('hidden'); }
    function clearSearchInput(){ const input=document.getElementById('search-input'); input.value=''; handleSearch(''); input.focus(); }
    function staticHandleSearch(query){
      const box=document.getElementById('search-results'), clear=document.getElementById('search-clear');
      clear.classList.toggle('hidden',!query.trim());
      if(!query.trim()){ box.innerHTML=''; return; }
      const matched=searchReferenceItems.filter(item=>item.title.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes('jujutsu'));
      if(!matched.length){ box.innerHTML='<p class="text-sm text-neutral-500 py-8 text-center">No results found</p>'; return; }
      const top=matched.slice(0,3), series=matched.filter(x=>x.kind==='Series'), movies=matched.filter(x=>x.kind==='Movies');
      const section=(name,items,view)=>items.length?'<section class="mb-8"><div class="flex items-center justify-between mb-4"><h2 class="text-[21px] font-normal">'+name+'</h2>'+(view?'<button onclick="showToast(\'Showing all '+name+' results\')" class="text-cr-orange text-[15px] font-bold">View All</button>':'')+'</div><div class="space-y-2">'+items.map(searchResultRow).join('')+'</div></section>':'';
      box.innerHTML=section('Top Results',top,false)+section('Series',series,true)+section('Movies',movies,true);
    }
    function applySearchTag(tag){ const input=document.getElementById('search-input'); input.value=tag; handleSearch(tag); }
    function setDeviceView(mode){
      const wrapper=document.getElementById('viewport-wrapper'), stickyBar=document.getElementById('sticky-premium-bar'), bottomNav=document.querySelector('nav');
      const btnPhone=document.getElementById('btn-phone'), btnFull=document.getElementById('btn-full');
      if(mode==='phone'){
        wrapper.className="w-full max-w-[430px] mx-auto min-h-screen bg-black relative mobile-frame pb-32 transition-all duration-300";
        stickyBar.className="fixed bottom-16 inset-x-0 max-w-[430px] mx-auto px-4 z-30 pointer-events-none transition-all duration-300" + (document.getElementById('tab-home').classList.contains('hidden') ? " hidden" : "");
        bottomNav.className="fixed bottom-0 inset-x-0 max-w-[430px] mx-auto bg-[#161616] backdrop-blur-lg border-t border-neutral-900 px-2 py-1.5 z-40 flex items-center justify-around select-none";
        btnPhone.className="px-3 py-1 rounded bg-cr-orange text-black font-semibold text-xs transition";
        btnFull.className="px-3 py-1 rounded bg-[#1e2026] text-neutral-300 font-semibold text-xs transition";
      } else {
        wrapper.className="w-full max-w-5xl mx-auto min-h-screen bg-black relative pb-32 transition-all duration-300";
        stickyBar.className="fixed bottom-16 inset-x-0 max-w-5xl mx-auto px-6 z-30 pointer-events-none transition-all duration-300" + (document.getElementById('tab-home').classList.contains('hidden') ? " hidden" : "");
        bottomNav.className="fixed bottom-0 inset-x-0 max-w-5xl mx-auto bg-[#161616] backdrop-blur-lg border-t border-neutral-900 px-6 py-2 z-40 flex items-center justify-around select-none";
        btnFull.className="px-3 py-1 rounded bg-cr-orange text-black font-semibold text-xs transition";
        btnPhone.className="px-3 py-1 rounded bg-[#1e2026] text-neutral-300 font-semibold text-xs transition";
      }
    }

    renderBrowseAll();
    renderSimulcastGrids();
    renderGenres();

    // Fresh genre detail page implementation.
    const freshGenreShows = {
      popular: [
        {title:"Frieren: Beyond Journey's End", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=700&auto=format&fit=crop", genres:"Fantasy, Adventure, Drama"},
        {title:"Golden Kamuy", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop", genres:"Action, Adventure, Seinen"},
        {title:"Fire Force", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop", genres:"Action, Supernatural, Shonen"}
      ],
      new: [
        {title:"I Became a Legend after My 10-Year-Long Last Stand", age:"Dub हिंदी | Sub", time:"40 mins ago", img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop", genres:"Adventure, Fantasy"},
        {title:"Crowned in a Hundred Days", age:"Subtitled", time:"10 hours ago", img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop", genres:"Fantasy, Romance"},
        {title:"The Exiled Heavy Knight Knows How to Game the System", age:"Dub | Sub", time:"22 hours ago", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop", genres:"Action, Fantasy"}
      ],
      action: [
        {title:"Golden Kamuy", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop", genres:"Action, Adventure"},
        {title:"Fire Force", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop", genres:"Action, Supernatural"},
        {title:"Solo Leveling", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop", genres:"Action, Fantasy"}
      ]
    };
    const freshExtraGenreShows = {
      Isekai: [
        {title:"In Another World With My Smartphone", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=700&auto=format&fit=crop", genres:"Isekai, Fantasy"},
        {title:"Seirei Gensouki: Spirit Chronicles", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop", genres:"Isekai, Fantasy"},
        {title:"How a Realist Hero Rebuilt the Kingdom", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop", genres:"Isekai, Fantasy"}
      ],
      Romance: [
        {title:"Fena: Pirate Princess", age:"Subtitled", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop", genres:"Romance, Adventure"},
        {title:"Chrono Crusade", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop", genres:"Romance, Fantasy"},
        {title:"The World is Still Beautiful", age:"Subtitled", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop", genres:"Romance, Fantasy"}
      ],
      "Sci-Fi": [
        {title:"Fire Force", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=700&auto=format&fit=crop", genres:"Sci-Fi, Action"},
        {title:"TRIGUN STAMPEDE", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=700&auto=format&fit=crop", genres:"Sci-Fi, Adventure"},
        {title:"My Hero Academia", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop", genres:"Sci-Fi, Action"}
      ],
      Supernatural: [
        {title:"To Your Eternity", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop", genres:"Supernatural, Drama"},
        {title:"JoJo's Bizarre Adventure", age:"Subtitled", img:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=700&auto=format&fit=crop", genres:"Supernatural, Action"},
        {title:"Hunter x Hunter", age:"Dub | Sub", img:"https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=700&auto=format&fit=crop", genres:"Supernatural, Action"}
      ]
    };
    const freshGenreInfo = {
      ADVENTURE: {title:"Adventure", icon:'<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 8.5l8-3 8 3v7l-8 3-8-3v-7z"/><path d="M8 10l2 1 2-1 2 1 2-1M12 8v7"/></svg>', description:"Venture forth with heroes who hope to achieve their dreams!"},
      ACTION: {title:"Action", icon:'<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 3c1 4 3 6 6 7-3 1-5 3-6 7-1-4-3-6-6-7 3-1 5-3 6-7z"/></svg>', description:"Fast-paced battles, fearless heroes, and impossible challenges."}
    };
    function freshSafe(value){ return String(value||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
    function freshExpand(items){
      const expanded=[];
      for(let i=0;i<9;i++) expanded.push(items[i % items.length]);
      return expanded;
    }
    function freshPosterCard(item){
      const title=freshSafe(item.title), img=freshSafe(item.img), audio=freshSafe(item.age), genres=freshSafe(item.genres);
      return `<article class="flex-none w-[31%] min-w-0"><button class="block w-full text-left" onclick="openAnimeDetails('${title}','${genres}','${audio}','${img}')"><div class="w-full aspect-[2/3] overflow-hidden bg-neutral-900"><img src="${img}" alt="${title}" class="w-full h-full object-cover"></div><p class="mt-2 text-[13px] leading-tight truncate">${title}</p>${item.time?`<p class="mt-2 text-[12px] text-neutral-400 truncate">${freshSafe(item.time)}</p>`:''}<div class="mt-2 flex items-center justify-between text-[12px] text-neutral-400"><span>${audio}</span><span class="text-xl leading-none">⋮</span></div></button></article>`;
    }
    function freshAllCard(item){ return freshPosterCard(item).replace('flex-none w-[31%]','min-w-0'); }
    function freshOpenGenre(name){
      const key=String(name||'ADVENTURE').toUpperCase();
      const info=freshGenreInfo[key]||freshGenreInfo.ADVENTURE;
      document.getElementById('fresh-genre-icon').innerHTML=info.icon;
      document.getElementById('fresh-genre-title').innerText=info.title;
      document.getElementById('fresh-genre-description').innerText=info.description;
      const rows=[['Popular',freshGenreShows.popular],['New',freshGenreShows.new],['Action',freshGenreShows.action],['Isekai',freshExtraGenreShows.Isekai],['Romance',freshExtraGenreShows.Romance],['Sci-Fi',freshExtraGenreShows['Sci-Fi']],['Supernatural',freshExtraGenreShows.Supernatural]];
      document.getElementById('fresh-genre-rows').innerHTML=rows.map(([label,items])=>`<section class="pb-1"><div class="flex items-center justify-between px-6 mb-4"><h3 class="text-[18px] font-medium">${label}</h3><button onclick="freshOpenAll('${label}')" class="text-[15px] font-bold">View All</button></div><div class="flex gap-3 overflow-x-auto no-scrollbar px-6">${freshExpand(items).map(freshPosterCard).join('')}</div></section>`).join('');
      document.getElementById('fresh-genre-detail').classList.remove('hidden');
      window.scrollTo({top:0,behavior:'smooth'});
    }
    function freshCloseGenre(){ document.getElementById('fresh-genre-detail').classList.add('hidden'); }
    function freshOpenAll(label){
      const key=String(label||'Popular');
      const source = freshGenreShows[key.toLowerCase()] || freshExtraGenreShows[key] || freshGenreShows.action;
      const extended=freshExpand(source);
      document.getElementById('fresh-all-title').innerText=key;
      document.getElementById('fresh-all-rows').innerHTML='<section><div class="grid grid-cols-2 gap-x-3 gap-y-6 px-6">'+extended.concat(extended).map(freshAllCard).join('')+'</div></section>';
      document.getElementById('fresh-genre-detail').classList.add('hidden');
      document.getElementById('fresh-view-all').classList.remove('hidden');
      window.scrollTo({top:0,behavior:'smooth'});
    }
    function freshCloseAll(){ document.getElementById('fresh-view-all').classList.add('hidden'); document.getElementById('fresh-genre-detail').classList.remove('hidden'); }
    function openGenre(name){ freshOpenGenre(name); }

    function prepareImagesForSmoothScrolling(){
      document.querySelectorAll('img').forEach((img, index) => {
        if(!img.hasAttribute('decoding')) img.decoding = 'async';
        if(index > 4 && !img.hasAttribute('loading')) img.loading = 'lazy';
        img.draggable = false;
      });
    }

    function expandHomeAnimeRails(){
      const home = document.getElementById('tab-home');
      if(!home) return;
      home.querySelectorAll('.flex.gap-3.overflow-x-auto').forEach((rail)=>{
        const cards = Array.from(rail.children).filter(card => card.classList.contains('flex-none') && card.classList.contains('w-32') && card.querySelector('img'));
        if(!cards.length || cards.length >= 10) return;
        rail.classList.add('flex-nowrap','scroll-smooth');
        cards.forEach(card => card.classList.add('snap-start'));
        for(let i=cards.length; i<10; i++){
          const clone = cards[i % cards.length].cloneNode(true);
          clone.classList.add('snap-start');
          rail.appendChild(clone);
        }
      });
    }
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { expandHomeAnimeRails(); prepareImagesForSmoothScrolling(); });
    else { expandHomeAnimeRails(); prepareImagesForSmoothScrolling(); }
