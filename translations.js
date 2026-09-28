/* ==============================================================
   Escape to Nature Resort — all site text, in one place.
   To edit copy: find the language code below (en / de / it / ar / zh)
   and change the strings. Every language uses the SAME keys, so a
   translation can never go "missing" — if a key is empty the English
   value quietly shows instead (see app.js -> t()).

   Headings that use the big script drop-cap letter (the reference
   design's signature look) take { script, rest, full }: "script" is
   the oversized first letter, "rest" is the remainder, and "full" is
   the same heading as one plain string (used for Arabic & Chinese,
   where the Latin swash-letter treatment doesn't apply).
   ============================================================== */
const STRINGS = {

en: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Oman",
  nav:{ home:"Home", about:"About", rooms:"Bungalows", experience:"Experience", contact:"Contact", reserve:"Reserve Now" },
  hero:{
    year:"2026",
    tagline:"Red-earth bungalows beneath the Hajar Mountains, where the loudest sound is the wind through the date palms.",
    location:"Mahdah · Oman",
    cta:"Discover the Bungalows"
  },
  about:{
    eyebrow:"About the resort",
    statement:{ script:"W", rest:"e're a newly built retreat between date-palm oases and mountain foothills, made for travellers who want Oman slower.", full:"We're a newly built retreat between date-palm oases and mountain foothills, made for travellers who want Oman slower." },
    p1:"Every bungalow is hand-built from rammed earth and thatch, coloured the same red ochre as the hills around it — air-conditioned, en-suite, and fitted with a window that frames the mountains.",
    p2:"Spend the day at the outdoor pool or wandering the palm groves, then join us for a Middle Eastern dinner on the terrace. Continental breakfast, brunch, lunch and dinner are served daily.",
    cta:"See the bungalows →"
  },
  rooms:{
    eyebrow:"Where you'll stay",
    heading:{ script:"B", rest:"ungalow Retreat", full:"Bungalow Retreat" },
    intro:"Our one bungalow style, built for two, with private outdoor space, air-conditioning, and a view of the garden or the mountains beyond.",
    tags:["Mountain View","Garden View","Outdoor Pool"],
    badge_title:"Standard Bungalow",
    badge_meta:"1 king bed · 2 guests",
    badge_cta:"Check Availability"
  },
  experience:{
    eyebrow:"The experience",
    heading:{ script:"W", rest:"hat awaits you", full:"What awaits you" },
    items:[
      {n:"01", title:"Under the Stars", desc:"Far from any city glow, the sky above Mahdah fills with more stars than most travellers have ever seen at once."},
      {n:"02", title:"By the Pool", desc:"Cool off in the outdoor pool, shaded by palms, any hour you like."},
      {n:"03", title:"At the Table", desc:"Middle Eastern dishes made fresh — continental breakfast each morning, à la carte through the evening."}
    ]
  },
  info:{
    checkin:{label:"Check-in", value:"2:00 PM – 10:00 PM"},
    checkout:{label:"Check-out", value:"6:00 AM – 11:00 AM"},
    parking:{label:"Parking", value:"Free, on site"},
    airport:{label:"Nearest airport", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"R", rest:"eady to escape?", full:"Ready to escape?" },
    body:"Reserve your bungalow directly through Booking.com — full rates, dates and cancellation terms shown at checkout.",
  },
  footer:{
    links:["House Rules","Privacy Policy","Contact"],
    rights:"© 2026 Escape to Nature Resort. All rights reserved.",
    note:"Mahdah, Oman · Cash payments accepted on site"
  },
  alts:{
    hero:"Terracotta bungalow with a thatched pergola at Escape to Nature Resort, mountains behind",
    cluster:"A row of red-ochre bungalows shaded by trees at Escape to Nature Resort",
    roomWide:"Bungalow bedroom interior with a large bed and warm ochre walls",
    roomWindow:"View of the Hajar Mountains through a bungalow window",
    oasis:"Aerial view of the palm groves surrounding Escape to Nature Resort",
    bathroom:"En-suite bathroom inside an Escape to Nature bungalow",
    entrance:"Shaded entrance of a bungalow with a thatched roof"
  }
},

de: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Oman",
  nav:{ home:"Start", about:"Über uns", rooms:"Bungalows", experience:"Erlebnis", contact:"Kontakt", reserve:"Jetzt reservieren" },
  hero:{
    year:"2026",
    tagline:"Bungalows aus roter Erde unter den Hajar-Bergen – hier ist der Wind in den Dattelpalmen das lauteste Geräusch.",
    location:"Mahdah · Oman",
    cta:"Bungalows entdecken"
  },
  about:{
    eyebrow:"Über das Resort",
    statement:{ script:"W", rest:"ir sind ein neu erbautes Refugium zwischen Dattelpalmen-Oasen und Bergausläufern — für Reisende, die Oman langsamer erleben wollen.", full:"Wir sind ein neu erbautes Refugium zwischen Dattelpalmen-Oasen und Bergausläufern — für Reisende, die Oman langsamer erleben wollen." },
    p1:"Jeder Bungalow ist von Hand aus Stampflehm und Reet gebaut, im selben Rotocker wie die umliegenden Hügel — klimatisiert, mit eigenem Bad und einem Fenster, das die Berge einrahmt.",
    p2:"Verbringen Sie den Tag am Pool oder auf einem Spaziergang durch die Palmenhaine und genießen Sie abends ein nahöstliches Dinner auf der Terrasse. Kontinentales Frühstück, Brunch, Mittag- und Abendessen werden täglich serviert.",
    cta:"Bungalows ansehen →"
  },
  rooms:{
    eyebrow:"Ihre Unterkunft",
    heading:{ script:"B", rest:"ungalow-Idylle", full:"Bungalow-Idylle" },
    intro:"Unser einziger Bungalow-Stil, gebaut für zwei, mit privatem Außenbereich, Klimaanlage und Blick auf den Garten oder die Berge dahinter.",
    tags:["Bergblick","Gartenblick","Außenpool"],
    badge_title:"Standard-Bungalow",
    badge_meta:"1 Kingsize-Bett · 2 Gäste",
    badge_cta:"Verfügbarkeit prüfen"
  },
  experience:{
    eyebrow:"Das Erlebnis",
    heading:{ script:"W", rest:"as Sie erwartet", full:"Was Sie erwartet" },
    items:[
      {n:"01", title:"Unter den Sternen", desc:"Fernab jeden Stadtlichts füllt sich der Himmel über Mahdah mit mehr Sternen, als die meisten Reisenden je auf einmal gesehen haben."},
      {n:"02", title:"Am Pool", desc:"Kühlen Sie sich im Außenpool ab, beschattet von Palmen — zu jeder Stunde, die Ihnen gefällt."},
      {n:"03", title:"Bei Tisch", desc:"Frisch zubereitete nahöstliche Gerichte — kontinentales Frühstück jeden Morgen, abends à la carte."}
    ]
  },
  info:{
    checkin:{label:"Check-in", value:"14:00 – 22:00 Uhr"},
    checkout:{label:"Check-out", value:"6:00 – 11:00 Uhr"},
    parking:{label:"Parken", value:"Kostenlos, vor Ort"},
    airport:{label:"Nächster Flughafen", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"B", rest:"ereit zu entfliehen?", full:"Bereit zu entfliehen?" },
    body:"Reservieren Sie Ihren Bungalow direkt über Booking.com — Preise, Termine und Stornobedingungen werden beim Checkout angezeigt.",
  },
  footer:{
    links:["Hausordnung","Datenschutz","Kontakt"],
    rights:"© 2026 Escape to Nature Resort. Alle Rechte vorbehalten.",
    note:"Mahdah, Oman · Barzahlung vor Ort möglich"
  },
  alts:{
    hero:"Terrakotta-Bungalow mit Reetdach-Pergola im Escape to Nature Resort, Berge im Hintergrund",
    cluster:"Reihe rotockerfarbener Bungalows im Schatten von Bäumen",
    roomWide:"Bungalow-Schlafzimmer mit großem Bett und warmen Ockerwänden",
    roomWindow:"Blick auf die Hajar-Berge durch ein Bungalow-Fenster",
    oasis:"Luftaufnahme der Palmenhaine rund um das Resort",
    bathroom:"Eigenes Badezimmer in einem Escape-to-Nature-Bungalow",
    entrance:"Schattiger Eingang eines Bungalows mit Reetdach"
  }
},

it: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Oman",
  nav:{ home:"Home", about:"Chi siamo", rooms:"Bungalow", experience:"Esperienza", contact:"Contatti", reserve:"Prenota ora" },
  hero:{
    year:"2026",
    tagline:"Bungalow in terra rossa ai piedi dei Monti Hajar, dove il suono più forte è il vento tra le palme da dattero.",
    location:"Mahdah · Oman",
    cta:"Scopri i bungalow"
  },
  about:{
    eyebrow:"Sul resort",
    statement:{ script:"S", rest:"iamo un rifugio di nuova costruzione tra oasi di palme da dattero e le pendici delle montagne, pensato per chi vuole vivere l’Oman con più calma.", full:"Siamo un rifugio di nuova costruzione tra oasi di palme da dattero e le pendici delle montagne, pensato per chi vuole vivere l’Oman con più calma." },
    p1:"Ogni bungalow è costruito a mano in terra battuta e paglia, dello stesso ocra rosso delle colline circostanti: con aria condizionata, bagno privato e una finestra che inquadra le montagne.",
    p2:"Trascorrete la giornata nella piscina all’aperto o passeggiando tra le palme, per poi cenare con noi in terrazza con piatti mediorientali. Colazione continentale, brunch, pranzo e cena sono serviti ogni giorno.",
    cta:"Guarda i bungalow →"
  },
  rooms:{
    eyebrow:"Dove soggiornerai",
    heading:{ script:"R", rest:"ifugio Bungalow", full:"Rifugio Bungalow" },
    intro:"Il nostro unico stile di bungalow, pensato per due persone, con spazio esterno privato, aria condizionata e vista sul giardino o sulle montagne.",
    tags:["Vista montagna","Vista giardino","Piscina esterna"],
    badge_title:"Bungalow Standard",
    badge_meta:"1 letto king size · 2 ospiti",
    badge_cta:"Verifica disponibilità"
  },
  experience:{
    eyebrow:"L’esperienza",
    heading:{ script:"C", rest:"osa ti aspetta", full:"Cosa ti aspetta" },
    items:[
      {n:"01", title:"Sotto le stelle", desc:"Lontano dalle luci della città, il cielo sopra Mahdah si riempie di più stelle di quante la maggior parte dei viaggiatori ne abbia mai viste in una volta."},
      {n:"02", title:"In piscina", desc:"Rinfrescatevi nella piscina all’aperto, all’ombra delle palme, a qualsiasi ora del giorno."},
      {n:"03", title:"A tavola", desc:"Piatti mediorientali preparati al momento: colazione continentale ogni mattina, alla carta la sera."}
    ]
  },
  info:{
    checkin:{label:"Check-in", value:"14:00 – 22:00"},
    checkout:{label:"Check-out", value:"6:00 – 11:00"},
    parking:{label:"Parcheggio", value:"Gratuito, in loco"},
    airport:{label:"Aeroporto più vicino", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"P", rest:"ronti a fuggire?", full:"Pronti a fuggire?" },
    body:"Prenota il tuo bungalow direttamente su Booking.com: tariffe, date e condizioni di cancellazione sono indicate al momento del pagamento.",
  },
  footer:{
    links:["Regolamento","Privacy","Contatti"],
    rights:"© 2026 Escape to Nature Resort. Tutti i diritti riservati.",
    note:"Mahdah, Oman · Pagamento in contanti accettato in loco"
  },
  alts:{
    hero:"Bungalow in terracotta con pergola in paglia presso Escape to Nature Resort, montagne sullo sfondo",
    cluster:"Fila di bungalow color ocra rossa all’ombra degli alberi",
    roomWide:"Interno della camera da letto del bungalow con letto ampio e pareti ocra",
    roomWindow:"Vista sui Monti Hajar da una finestra del bungalow",
    oasis:"Vista aerea delle palme che circondano il resort",
    bathroom:"Bagno privato in un bungalow di Escape to Nature",
    entrance:"Ingresso ombreggiato di un bungalow con tetto in paglia"
  }
},

ar: {
  dir:"rtl",
  meta_title:"منتجع إسكيب تو نيتشر — مهضة، البريمي، عُمان",
  nav:{ home:"الرئيسية", about:"من نحن", rooms:"الأكواخ", experience:"التجربة", contact:"تواصل معنا", reserve:"احجز الآن" },
  hero:{
    year:"2026",
    tagline:"أكواخ من الطين الأحمر عند سفوح جبال الحجر، حيث لا يعلو صوت سوى حفيف الريح بين نخيل التمر.",
    location:"مهضة · عُمان",
    cta:"اكتشف الأكواخ"
  },
  about:{
    eyebrow:"عن المنتجع",
    statement:{ full:"نحن ملاذ حديث البناء بين واحات نخيل التمر وسفوح الجبال، صُمّم للمسافرين الذين يريدون اكتشاف عُمان بوتيرة أهدأ." },
    p1:"كل كوخ مبني يدويًا من الطين المدكوك والقش، بنفس اللون الأحمر الطيني للتلال المحيطة — مكيف، مع حمام خاص، ونافذة تطل مباشرة على الجبال.",
    p2:"اقضِ يومك في المسبح الخارجي أو متجولاً بين بساتين النخيل، ثم انضم إلينا لعشاء شرق أوسطي على التراس. يُقدّم الإفطار القاري والبرانتش والغداء والعشاء يومياً.",
    cta:"شاهد الأكواخ ←"
  },
  rooms:{
    eyebrow:"أين ستقيم",
    heading:{ full:"ملاذ الأكواخ" },
    intro:"طرازنا الوحيد من الأكواخ، مصمم لشخصين، مع مساحة خارجية خاصة وتكييف هواء وإطلالة على الحديقة أو الجبال المحيطة.",
    tags:["إطلالة على الجبل","إطلالة على الحديقة","مسبح خارجي"],
    badge_title:"الكوخ القياسي",
    badge_meta:"سرير كينغ واحد · نزيلان",
    badge_cta:"تحقق من التوفر"
  },
  experience:{
    eyebrow:"التجربة",
    heading:{ full:"ما الذي ينتظرك" },
    items:[
      {n:"01", title:"تحت النجوم", desc:"بعيدًا عن أضواء المدن، تمتلئ سماء مهضة بنجوم أكثر مما رآه معظم المسافرين في آن واحد."},
      {n:"02", title:"عند المسبح", desc:"انتعش في المسبح الخارجي المظلل بالنخيل، في أي وقت تشاء."},
      {n:"03", title:"على المائدة", desc:"أطباق شرق أوسطية طازجة — إفطار قاري كل صباح، وقائمة طعام حرة في المساء."}
    ]
  },
  info:{
    checkin:{label:"تسجيل الوصول", value:"2:00 ظهرًا – 10:00 مساءً"},
    checkout:{label:"تسجيل المغادرة", value:"6:00 – 11:00 صباحًا"},
    parking:{label:"موقف السيارات", value:"مجاني في الموقع"},
    airport:{label:"أقرب مطار", value:"العين · 63 كم"}
  },
  ctaFooter:{
    statement:{ full:"هل أنت مستعد للهروب؟" },
    body:"احجز كوخك مباشرة عبر Booking.com — وتظهر الأسعار والتواريخ وشروط الإلغاء عند إتمام الحجز.",
  },
  footer:{
    links:["قواعد المنزل","سياسة الخصوصية","تواصل معنا"],
    rights:"© 2026 Escape to Nature Resort. جميع الحقوق محفوظة.",
    note:"مهضة، عُمان · يُقبل الدفع نقدًا في الموقع"
  },
  alts:{
    hero:"كوخ من الطين الأحمر بمظلة من القش في منتجع إسكيب تو نيتشر، والجبال خلفه",
    cluster:"صف من الأكواخ الطينية الحمراء في ظل الأشجار",
    roomWide:"غرفة نوم داخل الكوخ بسرير كبير وجدران طينية دافئة",
    roomWindow:"إطلالة على جبال الحجر من نافذة الكوخ",
    oasis:"منظر جوي لبساتين النخيل المحيطة بالمنتجع",
    bathroom:"حمام خاص داخل أحد أكواخ المنتجع",
    entrance:"مدخل مظلل لكوخ بسقف من القش"
  }
},

zh: {
  dir:"ltr",
  meta_title:"逃逸自然度假村 — 阿曼布赖米马赫达",
  nav:{ home:"首页", about:"关于我们", rooms:"小屋", experience:"体验", contact:"联系我们", reserve:"立即预订" },
  hero:{
    year:"2026",
    tagline:"哈杰尔山脚下的红土小屋，这里最响亮的声音，不过是风穿过椒枣林的沙沙声。",
    location:"马赫达 · 阿曼",
    cta:"探索小屋"
  },
  about:{
    eyebrow:"度假村介绍",
    statement:{ full:"我们是一处新建的静谧栖息地，坐落于椒枣绿洲与山脉之间，专为那些想要放慢脚步、细细品味阿曼的旅人而建。" },
    p1:"每间小屋均以夹土与茅草手工搭建，色泽与四周山丘同样的赭红，配备空调与独立卫浴，窗外正是连绵山景。",
    p2:"白天可以在室外泳池畅泳，或漫步椒枣林间，傍晚则在露台享用中东风味晚餐。西式早餐、brunch、午餐与晚餐每日供应。",
    cta:"查看小屋 →"
  },
  rooms:{
    eyebrow:"下榻之处",
    heading:{ full:"小屋静修" },
    intro:"我们唯一的小屋风格，专为两人打造，配有私人户外空间、空调，以及花园或群山景观。",
    tags:["山景","花园景观","室外泳池"],
    badge_title:"标准小屋",
    badge_meta:"1 张特大床 · 2位客人",
    badge_cta:"查看空房"
  },
  experience:{
    eyebrow:"体验",
    heading:{ full:"静待你的时刻" },
    items:[
      {n:"01", title:"星空之下", desc:"远离城市灯光，马赫达的夜空繁星密布，许多旅人从未一次见过如此多的星星。"},
      {n:"02", title:"泳池时光", desc:"在椒枣树阴下的室外泳池畅快消暑，随时随心。"},
      {n:"03", title:"餐桌之上", desc:"新鲜烹制的中东美食——每日清晨供应西式早餐，傍晚可点单享用。"}
    ]
  },
  info:{
    checkin:{label:"入住时间", value:"下午2:00 – 晚上10:00"},
    checkout:{label:"退房时间", value:"早上6:00 – 上午11:00"},
    parking:{label:"停车", value:"现场免费停车"},
    airport:{label:"最近机场", value:"艾因 · 63公里"}
  },
  ctaFooter:{
    statement:{ full:"准备好逃离尘嚣了吗？" },
    body:"通过 Booking.com 直接预订您的小屋——完整价格、日期与取消政策将在结账时显示。",
  },
  footer:{
    links:["入住须知","隐私政策","联系我们"],
    rights:"© 2026 Escape to Nature Resort. 保留所有权利。",
    note:"马赫达，阿曼 · 现场接受现金支付"
  },
  alts:{
    hero:"逃逸自然度假村的赤陶小屋与茅草凉亩，背后群山环绕",
    cluster:"树阴下一排赭红色小屋",
    roomWide:"小屋卧室内部，大床与温暖赭色墙面",
    roomWindow:"透过小屋窗户望见的哈杰尔山景",
    oasis:"度假村周边椒枣林的航拍景观",
    bathroom:"小屋内的独立卫浴",
    entrance:"茅草屋顶小屋的阴凉入口"
  }
},

nl: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Oman",
  nav:{ home:"Home", about:"Over ons", rooms:"Bungalows", experience:"Ervaring", contact:"Contact", reserve:"Nu reserveren" },
  hero:{
    year:"2026",
    tagline:"Bungalows van rode aarde aan de voet van het Hajargebergte, waar het geritsel van de wind door de dadelpalmen het hardste geluid is.",
    location:"Mahdah · Oman",
    cta:"Ontdek de bungalows"
  },
  about:{
    eyebrow:"Over het resort",
    statement:{ script:"W", rest:"e zijn een nieuw gebouwd toevluchtsoord tussen dadelpalmoases en de uitlopers van de bergen, gemaakt voor reizigers die Oman rustiger aan willen doen.", full:"We zijn een nieuw gebouwd toevluchtsoord tussen dadelpalmoases en de uitlopers van de bergen, gemaakt voor reizigers die Oman rustiger aan willen doen." },
    p1:"Elke bungalow is met de hand gebouwd van gestampte aarde en riet, in dezelfde roodoker kleur als de heuvels eromheen — met airconditioning, eigen badkamer en een raam dat uitzicht biedt op de bergen.",
    p2:"Breng de dag door bij het buitenzwembad of dwalend tussen de palmbosjes, en sluit u 's avonds bij ons aan voor een Midden-Oosters diner op het terras. Continentaal ontbijt, brunch, lunch en diner worden dagelijks geserveerd.",
    cta:"Bekijk de bungalows →"
  },
  rooms:{
    eyebrow:"Waar u verblijft",
    heading:{ script:"B", rest:"ungalow-retraite", full:"Bungalow-retraite" },
    intro:"Onze ene bungalowstijl, gebouwd voor twee, met een eigen buitenruimte, airconditioning en uitzicht op de tuin of de bergen daarachter.",
    tags:["Bergzicht","Tuinzicht","Buitenzwembad"],
    badge_title:"Standaard Bungalow",
    badge_meta:"1 kingsize bed · 2 gasten",
    badge_cta:"Beschikbaarheid controleren"
  },
  experience:{
    eyebrow:"De ervaring",
    heading:{ script:"W", rest:"at u te wachten staat", full:"Wat u te wachten staat" },
    items:[
      {n:"01", title:"Onder de sterren", desc:"Ver van elk stadslicht vult de hemel boven Mahdah zich met meer sterren dan de meeste reizigers ooit tegelijk hebben gezien."},
      {n:"02", title:"Bij het zwembad", desc:"Verfris uzelf in het buitenzwembad, beschaduwd door palmbomen, op elk gewenst moment."},
      {n:"03", title:"Aan tafel", desc:"Vers bereide Midden-Oosterse gerechten — elke ochtend continentaal ontbijt, 's avonds à la carte."}
    ]
  },
  info:{
    checkin:{label:"Inchecken", value:"14:00 – 22:00 uur"},
    checkout:{label:"Uitchecken", value:"6:00 – 11:00 uur"},
    parking:{label:"Parkeren", value:"Gratis, ter plaatse"},
    airport:{label:"Dichtstbijzijnde luchthaven", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"K", rest:"laar om te ontsnappen?", full:"Klaar om te ontsnappen?" },
    body:"Reserveer uw bungalow rechtstreeks via Booking.com — volledige tarieven, data en annuleringsvoorwaarden worden bij het afrekenen getoond.",
  },
  footer:{
    links:["Huisregels","Privacybeleid","Contact"],
    rights:"© 2026 Escape to Nature Resort. Alle rechten voorbehouden.",
    note:"Mahdah, Oman · Contant betalen ter plaatse mogelijk"
  },
  alts:{
    hero:"Terracotta bungalow met rieten pergola bij Escape to Nature Resort, bergen op de achtergrond",
    cluster:"Een rij roodoker bungalows in de schaduw van bomen bij Escape to Nature Resort",
    roomWide:"Interieur van een bungalowslaapkamer met een groot bed en warme okerkleurige muren",
    roomWindow:"Uitzicht op het Hajargebergte door een bungalowraam",
    oasis:"Luchtfoto van de palmbosjes rond Escape to Nature Resort",
    bathroom:"Eigen badkamer in een Escape to Nature-bungalow",
    entrance:"Schaduwrijke ingang van een bungalow met rieten dak"
  }
},

fr: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Oman",
  nav:{ home:"Accueil", about:"À propos", rooms:"Bungalows", experience:"Expérience", contact:"Contact", reserve:"Réserver" },
  hero:{
    year:"2026",
    tagline:"Des bungalows en terre rouge au pied des monts Hajar, où le vent dans les palmiers-dattiers est le bruit le plus fort que l'on entende.",
    location:"Mahdah · Oman",
    cta:"Découvrir les bungalows"
  },
  about:{
    eyebrow:"À propos du complexe",
    statement:{ script:"N", rest:"ous sommes un lieu de retraite tout juste construit, niché entre oasis de palmiers-dattiers et contreforts montagneux, pensé pour les voyageurs qui veulent découvrir Oman à un rythme plus lent.", full:"Nous sommes un lieu de retraite tout juste construit, niché entre oasis de palmiers-dattiers et contreforts montagneux, pensé pour les voyageurs qui veulent découvrir Oman à un rythme plus lent." },
    p1:"Chaque bungalow est construit à la main en terre battue et chaume, dans le même ocre rouge que les collines alentour — climatisé, avec salle de bains privative et une fenêtre qui encadre les montagnes.",
    p2:"Passez la journée à la piscine extérieure ou à flâner dans les palmeraies, puis rejoignez-nous pour un dîner moyen-oriental en terrasse. Petit-déjeuner continental, brunch, déjeuner et dîner sont servis chaque jour.",
    cta:"Voir les bungalows →"
  },
  rooms:{
    eyebrow:"Où vous séjournerez",
    heading:{ script:"U", rest:"n refuge en bungalow", full:"Un refuge en bungalow" },
    intro:"Notre unique style de bungalow, conçu pour deux personnes, avec espace extérieur privatif, climatisation et vue sur le jardin ou les montagnes au loin.",
    tags:["Vue sur la montagne","Vue sur le jardin","Piscine extérieure"],
    badge_title:"Bungalow Standard",
    badge_meta:"1 lit king size · 2 personnes",
    badge_cta:"Vérifier les disponibilités"
  },
  experience:{
    eyebrow:"L'expérience",
    heading:{ script:"C", rest:"e qui vous attend", full:"Ce qui vous attend" },
    items:[
      {n:"01", title:"Sous les étoiles", desc:"Loin de toute lumière urbaine, le ciel au-dessus de Mahdah se remplit de plus d'étoiles que la plupart des voyageurs n'en ont jamais vues à la fois."},
      {n:"02", title:"À la piscine", desc:"Rafraîchissez-vous dans la piscine extérieure, à l'ombre des palmiers, à l'heure de votre choix."},
      {n:"03", title:"À table", desc:"Des plats moyen-orientaux préparés minute — petit-déjeuner continental chaque matin, carte proposée le soir."}
    ]
  },
  info:{
    checkin:{label:"Arrivée", value:"14h00 – 22h00"},
    checkout:{label:"Départ", value:"6h00 – 11h00"},
    parking:{label:"Parking", value:"Gratuit, sur place"},
    airport:{label:"Aéroport le plus proche", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"P", rest:"rêt à vous évader ?", full:"Prêt à vous évader ?" },
    body:"Réservez votre bungalow directement via Booking.com — tarifs complets, dates et conditions d'annulation affichés au moment du paiement.",
  },
  footer:{
    links:["Règlement intérieur","Politique de confidentialité","Contact"],
    rights:"© 2026 Escape to Nature Resort. Tous droits réservés.",
    note:"Mahdah, Oman · Paiement en espèces accepté sur place"
  },
  alts:{
    hero:"Bungalow en terre cuite avec pergola de chaume à Escape to Nature Resort, montagnes en arrière-plan",
    cluster:"Une rangée de bungalows ocre rouge à l'ombre des arbres à Escape to Nature Resort",
    roomWide:"Intérieur d'une chambre de bungalow avec un grand lit et des murs ocre chaleureux",
    roomWindow:"Vue sur les monts Hajar depuis la fenêtre d'un bungalow",
    oasis:"Vue aérienne des palmeraies entourant Escape to Nature Resort",
    bathroom:"Salle de bains privative dans un bungalow d'Escape to Nature",
    entrance:"Entrée ombragée d'un bungalow au toit de chaume"
  }
},

pt: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Omã",
  nav:{ home:"Início", about:"Sobre nós", rooms:"Bangalôs", experience:"Experiência", contact:"Contacto", reserve:"Reservar agora" },
  hero:{
    year:"2026",
    tagline:"Bangalôs de terra vermelha aos pés das montanhas Hajar, onde o som mais alto é o vento entre as tamareiras.",
    location:"Mahdah · Oman",
    cta:"Descobrir os bangalôs"
  },
  about:{
    eyebrow:"Sobre o resort",
    statement:{ script:"S", rest:"omos um refúgio recém-construído entre oásis de tamareiras e as encostas das montanhas, feito para viajantes que preferem descobrir Omã com mais calma.", full:"Somos um refúgio recém-construído entre oásis de tamareiras e as encostas das montanhas, feito para viajantes que preferem descobrir Omã com mais calma." },
    p1:"Cada bangalô é construído à mão em terra batida e colmo, na mesma cor ocre avermelhada das colinas ao redor — com ar-condicionado, casa de banho privativa e uma janela que emoldura as montanhas.",
    p2:"Passe o dia na piscina exterior ou a passear pelos palmeirais, e junte-se a nós ao final do dia para um jantar do Médio Oriente no terraço. Pequeno-almoço continental, brunch, almoço e jantar são servidos diariamente.",
    cta:"Ver os bangalôs →"
  },
  rooms:{
    eyebrow:"Onde vai ficar",
    heading:{ script:"R", rest:"efúgio em Bangalô", full:"Refúgio em Bangalô" },
    intro:"O nosso único estilo de bangalô, feito para duas pessoas, com espaço exterior privativo, ar-condicionado e vista para o jardim ou para as montanhas ao fundo.",
    tags:["Vista para a Montanha","Vista para o Jardim","Piscina Exterior"],
    badge_title:"Bangalô Standard",
    badge_meta:"1 cama king · 2 hóspedes",
    badge_cta:"Verificar disponibilidade"
  },
  experience:{
    eyebrow:"A experiência",
    heading:{ script:"T", rest:"udo o que o espera", full:"Tudo o que o espera" },
    items:[
      {n:"01", title:"Sob as estrelas", desc:"Longe de qualquer brilho urbano, o céu sobre Mahdah enche-se de mais estrelas do que a maioria dos viajantes alguma vez viu de uma só vez."},
      {n:"02", title:"Junto à piscina", desc:"Refresque-se na piscina exterior, à sombra das palmeiras, a qualquer hora do dia."},
      {n:"03", title:"À mesa", desc:"Pratos do Médio Oriente preparados na hora — pequeno-almoço continental todas as manhãs, menu à la carte ao final do dia."}
    ]
  },
  info:{
    checkin:{label:"Check-in", value:"14h00 – 22h00"},
    checkout:{label:"Check-out", value:"6h00 – 11h00"},
    parking:{label:"Estacionamento", value:"Gratuito, no local"},
    airport:{label:"Aeroporto mais próximo", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"P", rest:"ronto para escapar?", full:"Pronto para escapar?" },
    body:"Reserve o seu bangalô diretamente através do Booking.com — tarifas completas, datas e condições de cancelamento apresentadas no checkout.",
  },
  footer:{
    links:["Regras da Casa","Política de Privacidade","Contacto"],
    rights:"© 2026 Escape to Nature Resort. Todos os direitos reservados.",
    note:"Mahdah, Omã · Pagamento em dinheiro aceite no local"
  },
  alts:{
    hero:"Bangalô em terracota com pérgola de colmo no Escape to Nature Resort, montanhas ao fundo",
    cluster:"Uma fila de bangalôs em ocre avermelhado à sombra de árvores no Escape to Nature Resort",
    roomWide:"Interior de um quarto de bangalô com uma cama grande e paredes em ocre quente",
    roomWindow:"Vista para as montanhas Hajar através da janela de um bangalô",
    oasis:"Vista aérea dos palmeirais que rodeiam o resort",
    bathroom:"Casa de banho privativa dentro de um bangalô do Escape to Nature",
    entrance:"Entrada sombreada de um bangalô com telhado de colmo"
  }
},

ru: {
  dir:"ltr",
  meta_title:"Курорт «Побег на природу» — Махда, Эль-Бурайми, Оман",
  nav:{ home:"Главная", about:"О нас", rooms:"Бунгало", experience:"Впечатления", contact:"Контакты", reserve:"Забронировать" },
  hero:{
    year:"2026",
    tagline:"Бунгало из красной глины у подножия гор Хаджар, где громче всего слышен только ветер в финиковых пальмах.",
    location:"Махда · Оман",
    cta:"Откройте для себя бунгало"
  },
  about:{
    eyebrow:"О курорте",
    statement:{ full:"Мы — недавно построенное убежище среди оазисов финиковых пальм и предгорий, созданное для путешественников, которые хотят открывать Оман неспешно." },
    p1:"Каждое бунгало построено вручную из глинобитной земли и тростника, в том же красно-охристом цвете, что и окрестные холмы — с кондиционером, собственной ванной комнатой и окном, из которого открывается вид на горы.",
    p2:"Проведите день у открытого бассейна или гуляя среди пальмовых рощ, а вечером присоединяйтесь к нам за ближневосточным ужином на террасе. Континентальный завтрак, бранч, обед и ужин подаются ежедневно.",
    cta:"Смотреть бунгало →"
  },
  rooms:{
    eyebrow:"Где вы остановитесь",
    heading:{ full:"Уединение в бунгало" },
    intro:"Наш единственный тип бунгало, рассчитанный на двоих, с собственной открытой зоной, кондиционером и видом на сад или горы вдали.",
    tags:["Вид на горы","Вид на сад","Открытый бассейн"],
    badge_title:"Стандартное бунгало",
    badge_meta:"1 кровать king-size · 2 гостя",
    badge_cta:"Проверить наличие"
  },
  experience:{
    eyebrow:"Впечатления",
    heading:{ full:"Что вас ждёт" },
    items:[
      {n:"01", title:"Под звёздами", desc:"Вдали от городских огней небо над Махдой наполняется таким множеством звёзд, что немногим путешественникам доводилось видеть больше за один раз."},
      {n:"02", title:"У бассейна", desc:"Освежитесь в открытом бассейне в тени пальм — в любой удобный для вас час."},
      {n:"03", title:"За столом", desc:"Свежеприготовленные блюда ближневосточной кухни — континентальный завтрак каждое утро, вечером — меню на выбор."}
    ]
  },
  info:{
    checkin:{label:"Заезд", value:"14:00 – 22:00"},
    checkout:{label:"Выезд", value:"6:00 – 11:00"},
    parking:{label:"Парковка", value:"Бесплатно, на территории"},
    airport:{label:"Ближайший аэропорт", value:"Эль-Айн · 63 км"}
  },
  ctaFooter:{
    statement:{ full:"Готовы сбежать от всего?" },
    body:"Бронируйте бунгало напрямую через Booking.com — полные тарифы, даты и условия отмены отображаются при оформлении.",
  },
  footer:{
    links:["Правила проживания","Политика конфиденциальности","Контакты"],
    rights:"© 2026 Escape to Nature Resort. Все права защищены.",
    note:"Махда, Оман · Оплата наличными на территории"
  },
  alts:{
    hero:"Терракотовое бунгало с тростниковой перголой на курорте Escape to Nature, горы на заднем плане",
    cluster:"Ряд бунгало красно-охристого цвета в тени деревьев на курорте Escape to Nature",
    roomWide:"Интерьер спальни бунгало с большой кроватью и тёплыми охристыми стенами",
    roomWindow:"Вид на горы Хаджар из окна бунгало",
    oasis:"Вид с воздуха на пальмовые рощи вокруг курорта",
    bathroom:"Собственная ванная комната в бунгало Escape to Nature",
    entrance:"Тенистый вход в бунгало с тростниковой крышей"
  }
},

es: {
  dir:"ltr",
  meta_title:"Escape to Nature Resort — Mahdah, Al Buraimi, Omán",
  nav:{ home:"Inicio", about:"Sobre nosotros", rooms:"Bungalós", experience:"Experiencia", contact:"Contacto", reserve:"Reservar ahora" },
  hero:{
    year:"2026",
    tagline:"Bungalós de tierra roja al pie de las montañas Hajar, donde el sonido más fuerte es el viento entre las palmeras datileras.",
    location:"Mahdah · Omán",
    cta:"Descubre los bungalós"
  },
  about:{
    eyebrow:"Sobre el resort",
    statement:{ script:"S", rest:"omos un refugio de nueva construcción entre oasis de palmeras datileras y estribaciones montañosas, pensado para viajeros que quieren vivir Omán con más calma.", full:"Somos un refugio de nueva construcción entre oasis de palmeras datileras y estribaciones montañosas, pensado para viajeros que quieren vivir Omán con más calma." },
    p1:"Cada bungaló está construido a mano con tierra apisonada y techo de paja, del mismo ocre rojizo que las colinas de alrededor — con aire acondicionado, baño privado y una ventana que enmarca las montañas.",
    p2:"Pasa el día en la piscina exterior o paseando por los palmerales, y únete a nosotros para una cena de Oriente Medio en la terraza. El desayuno continental, el brunch, el almuerzo y la cena se sirven a diario.",
    cta:"Ver los bungalós →"
  },
  rooms:{
    eyebrow:"Dónde te alojarás",
    heading:{ script:"R", rest:"efugio en bungaló", full:"Refugio en bungaló" },
    intro:"Nuestro único estilo de bungaló, pensado para dos personas, con espacio exterior privado, aire acondicionado y vistas al jardín o a las montañas al fondo.",
    tags:["Vistas a la montaña","Vistas al jardín","Piscina exterior"],
    badge_title:"Bungaló Estándar",
    badge_meta:"1 cama king · 2 huéspedes",
    badge_cta:"Comprobar disponibilidad"
  },
  experience:{
    eyebrow:"La experiencia",
    heading:{ script:"L", rest:"o que te espera", full:"Lo que te espera" },
    items:[
      {n:"01", title:"Bajo las estrellas", desc:"Lejos de cualquier resplandor urbano, el cielo sobre Mahdah se llena de más estrellas de las que la mayoría de los viajeros han visto nunca a la vez."},
      {n:"02", title:"Junto a la piscina", desc:"Refréscate en la piscina exterior, a la sombra de las palmeras, a la hora que prefieras."},
      {n:"03", title:"En la mesa", desc:"Platos de Oriente Medio recién preparados: desayuno continental cada mañana, carta disponible por la noche."}
    ]
  },
  info:{
    checkin:{label:"Entrada", value:"14:00 – 22:00"},
    checkout:{label:"Salida", value:"6:00 – 11:00"},
    parking:{label:"Aparcamiento", value:"Gratuito, en el lugar"},
    airport:{label:"Aeropuerto más cercano", value:"Al Ain · 63 km"}
  },
  ctaFooter:{
    statement:{ script:"¿", rest:"Listo para escapar?", full:"¿Listo para escapar?" },
    body:"Reserva tu bungaló directamente a través de Booking.com — tarifas completas, fechas y condiciones de cancelación se muestran al finalizar la reserva.",
  },
  footer:{
    links:["Normas de la Casa","Política de Privacidad","Contacto"],
    rights:"© 2026 Escape to Nature Resort. Todos los derechos reservados.",
    note:"Mahdah, Omán · Pago en efectivo aceptado en el lugar"
  },
  alts:{
    hero:"Bungaló de terracota con pérgola de paja en Escape to Nature Resort, montañas al fondo",
    cluster:"Una fila de bungalós en ocre rojizo a la sombra de los árboles en Escape to Nature Resort",
    roomWide:"Interior de un dormitorio de bungaló con una cama grande y cálidas paredes ocres",
    roomWindow:"Vistas a las montañas Hajar desde la ventana de un bungaló",
    oasis:"Vista aérea de los palmerales que rodean el resort",
    bathroom:"Baño privado dentro de un bungaló de Escape to Nature",
    entrance:"Entrada sombreada de un bungaló con techo de paja"
  }
}

};
