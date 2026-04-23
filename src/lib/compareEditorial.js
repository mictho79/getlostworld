import { COMPARE_EDITORIAL_FR } from './compareEditorialFr.js';
import { COMPARE_EDITORIAL_ES } from './compareEditorialEs.js';

/**
 * Editorial content for the most-searched country pairs.
 * Key format: slugs sorted alphabetically joined by "-vs-"
 * e.g. france vs spain → "france-vs-spain"
 */
export const COMPARE_EDITORIAL = {

  'france-vs-spain': {
    intro: 'France and Spain are Europe\'s two great travel giants — sharing a 650km border yet offering radically different experiences. France excels in art, haute cuisine, and romantic sophistication; Spain captivates with energy, coastal diversity, and tapas culture. The best choice depends on what you\'re optimising for.',
    whichToVisit: {
      a: 'Choose France for iconic bucket-list Europe: Paris, the Loire Valley, the Riviera, and world-class fine dining. France wins if art history, wine regions, and refined culture are your priority.',
      b: 'Choose Spain for beach culture, budget travel, and vibrant social atmosphere. Spain wins if you want Mediterranean beaches, flamenco, Moorish architecture, and excellent food at lower prices.',
    },
    keyDifferences: [
      'Cost: Spain is roughly 25–35% cheaper than France for accommodation and dining.',
      'Climate: Spain gets more sun and higher summer temperatures; France\'s Atlantic coasts are cooler.',
      'Language: Both have their own language, but English is more widely spoken in tourist Spain.',
      'Culture: France is centrally defined by Paris; Spain\'s regions (Catalonia, Andalusia, Basque Country) have distinct identities.',
    ],
    faq: [
      { q: 'Is France more expensive than Spain?', a: 'Yes. France is generally 25–35% more expensive, especially Paris vs. Spanish cities. However, France\'s countryside (Loire Valley, Dordogne, Provence) is more affordable than the capital.' },
      { q: 'Can you combine France and Spain in one trip?', a: 'Absolutely. High-speed trains connect Paris to Barcelona in 6.5 hours. A classic combination: Barcelona (3 nights) → Madrid (2 nights) → San Sebastián (2 nights) → Bordeaux (2 nights) → Paris (3 nights).' },
      { q: 'Which has better beaches — France or Spain?', a: 'Spain wins. The Mediterranean Costa Dorada, Balearics (Mallorca, Formentera), and Canary Islands are world-class. France\'s Côte d\'Azur is beautiful but rocky and pricey.' },
    ],
    blogLink: '/blog/france-vs-spain-which-to-visit/',
    blogLabel: 'Full guide: France vs Spain — Which to Visit?',
  },

  'italy-vs-greece': {
    intro: 'Italy and Greece anchor opposite ends of the Mediterranean summer dream. Italy offers the world\'s greatest concentration of art, food, and history; Greece delivers island-hopping paradise and simple pleasures under the Aegean sun. Both are unmissable — but they reward different travel styles.',
    whichToVisit: {
      a: 'Choose Italy for cultural depth: Rome\'s ancient forums, Florence\'s Renaissance masterpieces, Venice\'s canals, and Naples\' unrivalled pizza. Italy wins if cities, food regions, and art are your priority.',
      b: 'Choose Greece for island life, clear water, and whitewashed simplicity. Greece wins for beach holidays, sailing, Santorini sunsets, and a more relaxed Mediterranean pace.',
    },
    keyDifferences: [
      'Beaches: Greece wins — 6,000 islands, 15,000km of coastline, crystal-clear Aegean water.',
      'Food: Italy wins for regional depth and complexity; Greece wins for freshness and sea-to-table simplicity.',
      'Cost: Greece is slightly cheaper, especially on the mainland and smaller islands.',
      'Ancient history: Both are extraordinary — Italy for Roman/Renaissance layers; Greece for cleaner ancient Greek sites.',
    ],
    faq: [
      { q: 'Which is better for a summer holiday — Italy or Greece?', a: 'Greece wins for beach-focused summer holidays. Italy\'s cities (Rome, Florence) are extremely hot and crowded in July-August. The Amalfi Coast and Sicily are beautiful but expensive.' },
      { q: 'Is Italy more expensive than Greece?', a: 'Generally yes, especially for accommodation. However, Santorini and Mykonos rival Italian resort prices in peak season. The Greek mainland and lesser-known islands are excellent value.' },
      { q: 'When is the best time to visit Italy and Greece?', a: 'May, June, and September are ideal for both — warm, less crowded than July-August, and better value. October is excellent for cultural travel in cities.' },
    ],
    blogLink: '/blog/italy-vs-greece-summer-holiday/',
    blogLabel: 'Full guide: Italy vs Greece for Summer',
  },

  'japan-vs-south-korea': {
    intro: 'Japan and South Korea are Northeast Asia\'s two most compelling travel destinations — and frequent competitors in travellers\' shortlists. Japan offers one of the world\'s most distinctive cultures, refined cuisine, and centuries-old traditions; South Korea punches well above its weight with Seoul\'s dynamism, extraordinary street food, and K-culture\'s global reach.',
    whichToVisit: {
      a: 'Choose Japan for ancient temples, tea ceremony culture, bullet trains, and the world\'s most precise food culture. Japan rewards slow travel and multiple trips.',
      b: 'Choose South Korea for a more compact first trip to Northeast Asia: Seoul\'s energy, Korean BBQ culture, excellent value, and a fascinating contrast of Confucian tradition and hyper-modernity.',
    },
    keyDifferences: [
      'Scale: Japan is 3.8x larger with far more geographic diversity and regional variation.',
      'Cost: Both are comparable — Japan\'s weak yen has made it better value than its reputation suggests.',
      'Culture: Japan is more reserved and ritual-focused; South Korea is more outwardly social.',
      'Language: Both are manageable — South Korea has slightly more English signage in tourist areas.',
    ],
    faq: [
      { q: 'Is Japan or South Korea cheaper to visit?', a: 'Both are comparable at roughly $60–90/day for comfortable mid-range travel. Japan\'s yen weakness since 2022 has made it excellent value. South Korea is slightly cheaper outside Seoul.' },
      { q: 'Can I visit both Japan and South Korea in one trip?', a: 'Yes — direct flights between Seoul and Tokyo take about 2.5 hours. A 2-3 week Northeast Asia trip covering both countries is very popular: Seoul (5 nights) → Tokyo (4 nights) → Kyoto/Osaka (4 nights).' },
      { q: 'Which is better for food lovers?', a: 'Both are exceptional. Japan for technical precision — Tokyo has more Michelin stars than any city on Earth. South Korea for bold, communal flavours — Korean BBQ, street food markets, and fermentation culture.' },
    ],
    blogLink: '/blog/japan-vs-south-korea-travel/',
    blogLabel: 'Full guide: Japan vs South Korea',
  },

  'australia-vs-new-zealand': {
    intro: 'Australia and New Zealand share a hemisphere and a spirit of outdoor adventure — but they are very different countries. Australia is ancient, vast, and defined by its unique wildlife and laid-back coastal cities; New Zealand is geologically young, dramatically Alpine, and the undisputed adventure sports capital of the world.',
    whichToVisit: {
      a: 'Choose Australia for unique wildlife (kangaroos, koalas, Great Barrier Reef), world-class cities (Sydney, Melbourne), and a road trip culture that is genuinely unmatched. Needs at least 3–4 weeks.',
      b: 'Choose New Zealand for concentrated mountain scenery, fjords, and adventure sports (bungee, heli-ski, hiking the Great Walks). More compact — 2–3 weeks covers it well.',
    },
    keyDifferences: [
      'Size: Australia is 28x larger — distances require internal flights or significant driving time.',
      'Wildlife: Australia wins significantly — 80% of species found nowhere else on Earth.',
      'Adventure sports: New Zealand wins — Queenstown is the world\'s adventure capital.',
      'Cities: Australia wins for urban variety and scale — Sydney and Melbourne are world-class.',
    ],
    faq: [
      { q: 'Which is more expensive — Australia or New Zealand?', a: 'Both are expensive. Australia\'s greater distances mean more transport spending. New Zealand\'s adventure activities add up. Budget roughly AUD $80–120/day in Australia, NZD $80–110/day in New Zealand.' },
      { q: 'Can I visit both Australia and New Zealand in one trip?', a: 'Yes — a 5-6 week trip is the classic Antipodean adventure. Sydney → East Coast → Cairns (Reef) → fly to Auckland → South Island campervan is one of travel\'s great experiences.' },
      { q: 'Which is better for backpackers?', a: 'Both are excellent. Australia\'s East Coast (Sydney → Cairns) is one of the world\'s great backpacker routes. New Zealand\'s campervan culture and Great Walks appeal to adventure-focused backpackers. Both offer working holiday visas for ages 18–35.' },
    ],
    blogLink: '/blog/australia-vs-new-zealand-travel/',
    blogLabel: 'Full guide: Australia vs New Zealand',
  },

  'thailand-vs-vietnam': {
    intro: 'Thailand and Vietnam are Southeast Asia\'s two most popular backpacker destinations — and genuinely different travel experiences. Thailand has two decades of established tourism infrastructure and world-famous islands; Vietnam offers an extraordinary north-south adventure through dramatically changing landscapes and one of the world\'s greatest street food cultures.',
    whichToVisit: {
      a: 'Choose Thailand for islands and beaches (Koh Phi Phi, Koh Samui), established backpacker infrastructure, and if this is your first Southeast Asia trip. Easier to navigate, more tourist-friendly.',
      b: 'Choose Vietnam for a more adventurous end-to-end journey, greater cultural depth, arguably even better food, and a slightly lower cost. The north-south route from Hanoi to Ho Chi Minh City is one of travel\'s great experiences.',
    },
    keyDifferences: [
      'Islands: Thailand wins — world-class islands with better infrastructure.',
      'Culture: Vietnam wins — more layered history, French colonial architecture, ancient towns.',
      'Cost: Vietnam is marginally cheaper, especially outside tourist centres.',
      'Journey: Thailand is shorter/easier; Vietnam rewards longer, north-to-south exploration.',
    ],
    faq: [
      { q: 'Is Thailand or Vietnam cheaper?', a: 'Vietnam is marginally cheaper — bia hoi (fresh beer) from $0.40, street food from $1.20. Thailand\'s islands push costs up. Both countries are very budget-friendly at $25–45/day.' },
      { q: 'Which has better food — Thailand or Vietnam?', a: 'It\'s genuinely equal — just different. Thai food is bolder and more globally recognised. Vietnamese food is fresher, lighter, and more regionally varied. Most food lovers want to experience both.' },
      { q: 'Can I visit both Thailand and Vietnam in one trip?', a: 'Yes — a classic 5-6 week Southeast Asia trip: Bangkok → Chiang Mai → Thai islands → fly to Hanoi → south through Vietnam to Ho Chi Minh City. Many travellers do this.' },
    ],
    blogLink: '/blog/thailand-vs-vietnam-backpacking/',
    blogLabel: 'Full guide: Thailand vs Vietnam for Backpackers',
  },

  'canada-vs-united-states-of-america': {
    intro: 'Canada and the United States share the world\'s longest land border — and a common language — yet offer dramatically different travel experiences. The USA delivers iconic landmarks and intense urban culture; Canada counters with vast wilderness, exceptional safety, and a famously welcoming character.',
    whichToVisit: {
      a: 'Choose Canada for wilderness, wildlife, and safety. Banff\'s turquoise lakes, the Northern Lights in Yukon, Montreal\'s bilingual culture, and a more relaxed pace define the Canadian experience.',
      b: 'Choose the USA for iconic landmarks (Grand Canyon, Yellowstone, NYC, New Orleans), unmatched urban diversity, and the world\'s greatest road trip network. The USA wins on scale and variety of unmissable experiences.',
    },
    keyDifferences: [
      'Safety: Canada ranks significantly higher — much lower crime rates and no medical cost shock.',
      'Nature: Both are extraordinary — Canada for remote wilderness; USA for more accessible national parks.',
      'Cities: USA wins for urban variety and global cultural influence.',
      'Cost: Canada is often slightly cheaper thanks to exchange rates; both are expensive destinations.',
    ],
    faq: [
      { q: 'Is Canada safer than the USA?', a: 'Yes, significantly. Canada\'s homicide rate is 3-4x lower. Major Canadian cities consistently rank higher in global safety indices. Medical emergencies won\'t bankrupt you in Canada the way they can in the USA without insurance.' },
      { q: 'Which has better national parks?', a: 'Both are exceptional. The USA has more famous parks (Yellowstone, Yosemite, Grand Canyon). Canada\'s parks (Banff, Jasper) feel more remote and are less crowded. The Canadian Rockies are arguably more scenically dramatic.' },
      { q: 'Do I need a visa for Canada and the USA?', a: 'Citizens of most countries (EU, UK, Australia) need an eTA for Canada (~CAD $7) and an ESTA for the USA (~$21). Both are simple online applications approved within minutes.' },
    ],
    blogLink: '/blog/usa-vs-canada-comparison/',
    blogLabel: 'Full guide: USA vs Canada',
  },

  'germany-vs-austria': {
    intro: 'Germany and Austria share a language and much of their history, yet they are distinctly different travel destinations. Germany is Europe\'s economic giant with a diverse city scene; Austria is defined by imperial Vienna, Alpine skiing, and the Habsburgs\' extraordinary cultural legacy.',
    whichToVisit: {
      a: 'Choose Germany for Berlin\'s unmatched creative energy and history, Bavarian beer culture, and the ability to explore multiple distinct cities (Berlin, Munich, Hamburg, Cologne) in one trip.',
      b: 'Choose Austria for Vienna\'s imperial grandeur and coffee house culture, world-class Alpine skiing (Kitzbühel, St. Anton), and Salzburg\'s compact perfection. Austria wins for concentrated excellence.',
    },
    keyDifferences: [
      'Scale: Germany is 4x larger with 10x the population — more urban variety.',
      'Mountains: Austria wins for Alpine skiing and hiking.',
      'Culture: Germany for WWII history and confronting modernity; Austria for imperial grandeur.',
      'Cities: Germany for variety; Vienna stands alone as one of Europe\'s greatest single destinations.',
    ],
    faq: [
      { q: 'Can I visit both Germany and Austria in one trip?', a: 'Easily. Munich to Salzburg is under 2 hours by train; Vienna is 4 hours from Munich. A classic circuit: Berlin → Munich → Salzburg → Vienna (10–12 days).' },
      { q: 'Which is better for skiing — Germany or Austria?', a: 'Austria wins clearly. Austrian resorts (Kitzbühel, St. Anton, Ischgl) are among Europe\'s finest with far larger ski areas than Germany\'s Bavarian resorts.' },
      { q: 'Do Germans and Austrians understand each other?', a: 'Yes — both speak German, though with different accents and dialects. Written German is essentially identical. Viennese dialect can be challenging even for Germans, but Standard German (Hochdeutsch) is mutually intelligible.' },
    ],
    blogLink: '/blog/germany-vs-austria-differences/',
    blogLabel: 'Full guide: Germany vs Austria',
  },

  'portugal-vs-spain': {
    intro: 'Portugal and Spain dominate the conversation about southern Europe for expats and travellers alike. They share the Iberian Peninsula but offer meaningfully different experiences: Portugal is quieter, more affordable (outside Lisbon), and has an established expat visa route; Spain offers larger cities, more cultural diversity, and the Beckham Law tax advantage.',
    whichToVisit: {
      a: 'Choose Portugal for relaxed Atlantic coastlines, Lisbon and Porto\'s exceptional livability, more affordable cost of living outside the capital, and the D7 passive income visa for expats.',
      b: 'Choose Spain for larger, more cosmopolitan cities (Barcelona, Madrid, Seville), more cultural and regional diversity, better Spanish language learning opportunities, and the Beckham Law (24% flat tax).',
    },
    keyDifferences: [
      'Size: Spain is 5.5x larger with 4.5x more people — far more regional variety.',
      'Cost: Portugal (outside Lisbon/Porto) is cheaper. Spain\'s costs vary widely by region.',
      'Language: Spanish is easier to learn and more globally useful. Portuguese is harder phonetically.',
      'Visa: Portugal\'s D7 is more accessible for retirees; Spain\'s Beckham Law benefits higher earners.',
    ],
    faq: [
      { q: 'Is Portugal or Spain better for expats?', a: 'Portugal for budget-conscious expats, retirees, and remote workers with modest income (D7 visa from ~€760/month). Spain for higher earners (Beckham Law 24% flat tax), career opportunities, and those wanting larger cities.' },
      { q: 'Which is cheaper to live in — Portugal or Spain?', a: 'Outside Lisbon and Porto, Portugal is cheaper. However, Lisbon has become expensive. Spain\'s regional variation is wider — Valencia and Seville are much cheaper than Barcelona or Madrid.' },
      { q: 'Which is better as a tourist — Portugal or Spain?', a: 'Both are outstanding. Portugal for Atlantic beaches, Fado music, pastéis de nata, and a more intimate, less-crowded experience. Spain for greater diversity — Gaudi\'s Barcelona, flamenco in Seville, the Alhambra in Granada.' },
    ],
    blogLink: '/blog/portugal-vs-spain-expat/',
    blogLabel: 'Full guide: Portugal vs Spain for Expats',
  },

  'india-vs-china': {
    intro: 'India and China are the world\'s two most populous countries — together home to nearly 3 billion people. As travel destinations they offer extraordinary complexity and depth, but very different experiences: India is sensory, spiritual, and chaotic; China is organised, historically monumental, and rapidly modern.',
    whichToVisit: {
      a: 'Choose India for sensory intensity, spiritual depth, and extraordinary diversity. The Taj Mahal, Rajasthan\'s forts, Kerala\'s backwaters, Himalayan treks, and one of the world\'s greatest cuisines await.',
      b: 'Choose China for monumental history (Great Wall, Forbidden City, Terracotta Army) alongside cutting-edge modernity. China\'s scale and infrastructure are extraordinary — high-speed rail connects everything.',
    },
    keyDifferences: [
      'Infrastructure: China\'s transport infrastructure is superior — world\'s largest high-speed rail network.',
      'Language: India has widespread English in tourist areas; China requires a translation app or guide.',
      'Visa: India e-visa is straightforward; China visa requires more planning (no e-visa for most countries).',
      'Cuisine: Both are world-class — India for spice complexity; China for eight distinct regional cuisines.',
    ],
    faq: [
      { q: 'Which is easier to travel — India or China?', a: 'China is operationally easier — better infrastructure, less chaos, and a more predictable travel experience. India is more challenging but often more rewarding: unpredictability is part of the appeal.' },
      { q: 'Do I need a visa for India and China?', a: 'India offers a simple e-visa (eTV) for most nationalities, processed in 3–5 days online. China\'s visa requires a consulate application for most nationalities — allow 2–4 weeks. No spontaneous visits.' },
      { q: 'Which country has better food — India or China?', a: 'Both are world-class food cultures. India for extraordinary spice complexity and vegetarian tradition (8,000+ rice varieties, countless curry traditions). China for eight major regional cuisines — Sichuan\'s mala spice and Cantonese dim sum are particularly influential globally.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'brazil-vs-argentina': {
    intro: 'Brazil and Argentina are South America\'s two great powerhouses — rivals on the football pitch and contrasting personalities off it. Brazil is vast, tropical, and exuberantly diverse; Argentina is long, European-influenced, and defined by steak, tango, and Patagonia\'s breathtaking landscapes.',
    whichToVisit: {
      a: 'Choose Brazil for the Amazon rainforest, Iguazu Falls, Rio\'s Carnival energy, and the most biodiverse country on Earth. Brazil wins for sheer natural spectacle and tropical diversity.',
      b: 'Choose Argentina for Buenos Aires\' Buenos Aires\' European café culture, Patagonia\'s Torres del Paine and Perito Moreno Glacier, Mendoza\'s Malbec wine, and one of the world\'s greatest steak cultures.',
    },
    keyDifferences: [
      'Size: Brazil is 3x larger — the world\'s 5th largest country vs Argentina\'s 8th.',
      'Climate: Brazil is mostly tropical; Argentina spans subtropical to Antarctic.',
      'Cuisine: Argentina wins for meat culture; Brazil wins for tropical fruit and Bahian seafood.',
      'Cost: Argentina has had extreme currency fluctuations — check current rates. Brazil is more stable.',
    ],
    faq: [
      { q: 'Can I combine Brazil and Argentina in one trip?', a: 'Yes — Iguazu Falls sits on the Brazil-Argentina border, making it a natural meeting point for both countries. Fly into São Paulo, see Iguazu from both sides, then continue to Buenos Aires. A 2-3 week trip covers both highlights.' },
      { q: 'Is Brazil or Argentina safer for tourists?', a: 'Both require vigilance in cities. Argentina (particularly Buenos Aires outside tourist areas) has lower violent crime than Brazil\'s major cities. Both reward staying in established tourist areas and taking standard urban precautions.' },
      { q: 'Which country has better food — Brazil or Argentina?', a: 'Argentina wins for red meat — Patagonian lamb, Buenos Aires parrillas, and Malbec wine from Mendoza are world-class. Brazil wins for tropical variety, Bahian seafood, churrasco culture, and açaí.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'egypt-vs-morocco': {
    intro: 'Egypt and Morocco represent the two most accessible gateways to Africa\'s ancient civilisations — and both rank among the world\'s most dramatically atmospheric destinations. Egypt is defined by the Nile, the Pyramids, and 5,000 years of monumental history; Morocco captivates with its labyrinthine medinas, Saharan dunes, and Moorish architecture.',
    whichToVisit: {
      a: 'Choose Egypt if ancient history is your primary motivation — the Pyramids of Giza, Luxor\'s Valley of the Kings, and Abu Simbel are among humanity\'s greatest achievements. Egypt is bucket-list history at scale.',
      b: 'Choose Morocco for sensory richness and variety: Marrakech\'s souks, the blue city of Chefchaouen, Fez\'s medieval medina, and Sahara desert sunrises. Morocco rewards slow exploration.',
    },
    keyDifferences: [
      'History: Egypt wins for ancient monuments — nothing on Earth rivals the Pyramids.',
      'Atmosphere: Morocco wins for daily sensory richness and medina culture.',
      'Cost: Both are affordable — Morocco has more variety at lower prices.',
      'Climate: Egypt is extreme (40°C+ in summer); Morocco is more temperate year-round.',
    ],
    faq: [
      { q: 'Which is better for a first trip to North Africa — Egypt or Morocco?', a: 'Morocco for first-timers — easier to navigate, more variety in a compact space, and no single unmissable landmark pressure (like the Pyramids) means you can be spontaneous. Egypt for history enthusiasts who have the Pyramids on their bucket list.' },
      { q: 'Is Egypt or Morocco cheaper?', a: 'Both are affordable. Egypt is slightly cheaper for accommodation and food. Morocco offers better value for varied experiences across cities, mountains, and Sahara.' },
      { q: 'When is the best time to visit Egypt and Morocco?', a: 'Both are best visited October–April. Egypt\'s summers (May–September) are extreme at 40°C+. Morocco is pleasant year-round but Sahara and mountain regions are coldest in winter nights.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'france-vs-germany': {
    intro: 'France and Germany are the two historical powers that shaped modern continental Europe — twin engines of the EU with very different personalities. France leans cultural, aesthetic, and centralised around Paris; Germany leans efficient, federal, and spread across a dozen distinctive cities. For travellers, the two make an outstanding one-trip combination, but they reward quite different instincts.',
    whichToVisit: {
      a: 'Choose France for art, wine, fashion, and the romance of its regions — Paris, the Loire Valley châteaux, Provence\'s lavender fields, and the Côte d\'Azur. France is the world\'s most visited country for a reason: it consistently delivers on atmosphere and food.',
      b: 'Choose Germany for a more decentralised experience — Berlin\'s creative scene, Munich\'s Bavarian culture, the Romantic Road, castles of the Rhine, and Hamburg\'s harbour. Germany is better value than France and far easier to travel by train.',
    },
    keyDifferences: [
      'Cities: France is Paris-centric; Germany has 5–6 genuinely world-class cities.',
      'Cost: Germany is 15–25% cheaper on food, hotels, and transport.',
      'Trains: Germany\'s Deutsche Bahn network is denser but less punctual than France\'s TGV.',
      'Cuisine: France wins decisively for food and wine; Germany wins for beer and hearty regional cuisine.',
    ],
    faq: [
      { q: 'Is Germany or France cheaper to visit?', a: 'Germany is roughly 15–25% cheaper, particularly for hotels and restaurants. Berlin especially offers excellent value compared to Paris. Both become expensive in major tourist areas in peak season.' },
      { q: 'Can I combine France and Germany in one trip?', a: 'Easily — Paris to Frankfurt is under 4 hours by TGV, and Strasbourg (on the French-German border) makes a perfect bridge. A classic two-week itinerary: Paris (4 nights) → Strasbourg (2) → Munich (3) → Berlin (4).' },
      { q: 'Which has better food — France or Germany?', a: 'France, uncontestedly, for fine dining, patisserie, cheese, and wine. Germany counters with excellent beer culture, bread tradition, and hearty regional dishes (currywurst, schnitzel, spätzle). Both deserve to be explored for their cuisine.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'france-vs-italy': {
    intro: 'France and Italy are Europe\'s two most visited countries after each other — both culinary and cultural superpowers, often on the same Grand Tour itinerary. France is refined, centralised, and Paris-dominant; Italy is regional, passionate, and shaped by the distinct personalities of its city-states. Both are unmissable, and picking between them for a single trip is often genuinely difficult.',
    whichToVisit: {
      a: 'Choose France for centralised elegance: Paris above all, the Loire Valley, Provence, Bordeaux wine country, and the Côte d\'Azur. France rewards a curated, polished experience and some of the world\'s great museums.',
      b: 'Choose Italy for regional density and sheer concentration of masterpieces: Rome, Florence, Venice, the Amalfi Coast, Tuscany, and Sicily. Italy has more UNESCO Heritage Sites than any other country on Earth.',
    },
    keyDifferences: [
      'Art & history: Italy wins — Rome, Florence, and Venice are unmatched cultural density.',
      'Food: Italy for everyday eating; France for fine dining and pastry.',
      'Cost: Italy is slightly cheaper outside Venice and Amalfi.',
      'Regions: Italy\'s regional variation (Sicily vs. Piedmont) is greater than France\'s.',
    ],
    faq: [
      { q: 'Which is better for a first trip to Europe — France or Italy?', a: 'Italy tends to deliver more variety per day for first-time visitors — compact cities, extraordinary food, and clear highlights. France rewards repeat visits as you explore beyond Paris into the regions.' },
      { q: 'Can you see both France and Italy in one trip?', a: 'Yes. Paris to Milan by direct train takes about 7 hours; Paris to Rome by plane is 2 hours. A classic 2-3 week itinerary: Paris → Nice → Rome → Florence → Venice.' },
      { q: 'Which is more expensive — France or Italy?', a: 'Paris is the most expensive major European city; outside Paris, France is comparable to Italy. Italy\'s tourist hotspots (Venice, Amalfi) match Paris prices; Italian cities like Bologna, Naples, and Palermo are excellent value.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'germany-vs-italy': {
    intro: 'Germany and Italy occupy opposite poles of European travel personality. Germany is orderly, efficient, and engineered for infrastructure; Italy is expressive, chaotic, and built around the pleasures of the table. Both are economic powerhouses of the eurozone with extraordinary cultural depth — but they reward dramatically different travel moods.',
    whichToVisit: {
      a: 'Choose Germany for Berlin\'s cutting-edge creativity, Bavarian tradition (Oktoberfest, beer gardens), fairytale castles of the Rhine, and excellent trains. Germany is perfect if you want structure, punctuality, and cultural depth.',
      b: 'Choose Italy for the pure sensory pleasure of eating, drinking, and wandering — Rome\'s ancient layers, Florence\'s Renaissance, Venice\'s canals, Amalfi beaches. Italy is perfect if you want to slow down and surrender to the atmosphere.',
    },
    keyDifferences: [
      'Infrastructure: Germany wins — better-maintained roads, faster internet, punctual trains.',
      'Food: Italy wins — arguably the world\'s most influential cuisine.',
      'Cities: Germany has more genuinely distinct major cities; Italy\'s historic cities are more visually iconic.',
      'Pace: Germany is efficient; Italy rewards patience and leisurely meals.',
    ],
    faq: [
      { q: 'Which is better for a summer holiday — Germany or Italy?', a: 'Italy wins decisively for summer — beaches, Mediterranean cities, long evenings. Germany can be pleasant in summer (lake districts, beer gardens) but lacks the Mediterranean coastline that defines Italian summers.' },
      { q: 'Is Germany or Italy more expensive?', a: 'Roughly comparable. Germany\'s hotels are slightly cheaper; Italy\'s restaurants and coffee are cheaper. Touristy Italian destinations (Venice, Capri, Amalfi) can exceed Munich or Berlin prices.' },
      { q: 'Which has better trains — Germany or Italy?', a: 'Germany\'s network is denser and more reliable for regional trains; Italy\'s high-speed Frecciarossa (Milan-Rome) is arguably faster and cheaper than German ICEs. Both are among Europe\'s top 3 rail systems.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'spain-vs-italy': {
    intro: 'Spain and Italy are the Mediterranean\'s two great travel superpowers — both food-obsessed, beach-rich, regionally diverse peninsulas that deliver exceptional travel experiences at relatively reasonable prices. Spain is more festive and modern; Italy is more layered with history and refinement. Most travellers visit both eventually; choosing between them for one trip usually comes down to mood and season.',
    whichToVisit: {
      a: 'Choose Spain for energy, nightlife, Moorish architecture (the Alhambra, Córdoba), and the distinct personalities of its autonomous regions (Catalonia, Andalusia, Basque Country). Spain is the better first-trip Mediterranean destination.',
      b: 'Choose Italy for unmatched art-historical density, culinary regions, and three of the world\'s most iconic cities (Rome, Florence, Venice) in a single country. Italy rewards repeat visits more deeply.',
    },
    keyDifferences: [
      'Dining hours: Spain eats dinner at 10pm; Italy at 8pm.',
      'Art: Italy wins — more UNESCO sites than any country, and the Renaissance canon.',
      'Cost: Spain is 10–20% cheaper on average outside Madrid/Barcelona.',
      'Beaches: Spain wins — Mediterranean coast, Balearics, Canaries offer more variety.',
    ],
    faq: [
      { q: 'Which is better for a beach holiday — Spain or Italy?', a: 'Spain for variety — Costa Brava, Costa del Sol, Mallorca, Menorca, and Canary Islands cover every beach preference. Italy\'s beaches (Amalfi, Sardinia, Puglia) are stunning but more crowded and expensive.' },
      { q: 'Is food better in Spain or Italy?', a: 'Both are top-tier. Italy has more global influence (pasta, pizza, gelato) and more UNESCO-listed food traditions. Spain wins for tapas culture, jamón ibérico, and regional diversity (seafood in Galicia, paella in Valencia).' },
      { q: 'Which is cheaper — Spain or Italy?', a: 'Spain is typically 10–20% cheaper, especially for dining and nightlife. Madrid and Barcelona approach Italian prices; Seville, Valencia, and Granada are excellent value.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'england-vs-france': {
    intro: 'England and France sit 34 kilometres apart across the Channel — neighbours, ancient rivals, and two of the world\'s most visited countries. They share centuries of intertwined history but offer genuinely different travel moods: England is pub culture, countryside footpaths, and dry humour; France is café culture, long lunches, and cultivated elegance.',
    whichToVisit: {
      a: 'Choose England for London\'s unmatched urban energy, museums (most are free), countryside walking (the Lake District, Cotswolds), and a universally accessible language. England is easier for first-time international travellers.',
      b: 'Choose France for Paris, wine regions, Provence, and food culture that remains the global benchmark. France rewards travellers willing to slow down and engage with regional differences.',
    },
    keyDifferences: [
      'Language: English works everywhere in England; French is still essential outside Paris.',
      'Food: France wins definitively for everyday eating and restaurant culture.',
      'Cost: London is the most expensive major European city; France is cheaper outside Paris.',
      'Weather: Both are cool and rainy; southern France has the Mediterranean advantage.',
    ],
    faq: [
      { q: 'Can I combine England and France in one trip?', a: 'Easily — the Eurostar from London to Paris takes 2 hours 15 minutes. A classic combination: London (4 nights) → Paris (4 nights) → Loire Valley or Normandy (3 nights).' },
      { q: 'Is England or France cheaper to visit?', a: 'Outside the capitals it is close — London is noticeably more expensive than most of France. Paris and London are comparable. Rural France (Loire, Dordogne) is better value than rural England.' },
      { q: 'Which has better museums — England or France?', a: 'Both are world-class. London\'s major museums (British Museum, National Gallery, Tate Modern) are free. Paris\'s Louvre, Orsay, and Pompidou are paid but unrivalled for art concentration. Both cities reward a week.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'netherlands-vs-belgium': {
    intro: 'The Netherlands and Belgium are Europe\'s two most underrated small-nation destinations — often overlooked by travellers heading to France or Germany but offering extraordinary density of art, food, and beer culture in compact, flat, bike-friendly countries. The Netherlands is more open, liberal, and internationally-oriented; Belgium is more discreet, regionally complex, and punches above its weight on food and beer.',
    whichToVisit: {
      a: 'Choose the Netherlands for Amsterdam\'s canals and cultural scene, Dutch Masters at the Rijksmuseum and Mauritshuis, tulip fields in spring, and the country\'s unmatched cycling infrastructure. English is universally spoken.',
      b: 'Choose Belgium for Bruges\' medieval perfection, Brussels\' EU-scale cosmopolitanism, and arguably the world\'s greatest beer and chocolate cultures. Belgium also has Flemish masters (Rubens, Van Eyck) to rival the Dutch.',
    },
    keyDifferences: [
      'Language: Netherlands is Dutch + universal English; Belgium is trilingual (Dutch, French, German) with less English.',
      'Beer: Belgium wins decisively — Trappist ales, lambic, and 1,500+ varieties.',
      'Cities: Amsterdam is the single most famous city; Belgium has 4–5 beautiful medium-sized cities (Bruges, Ghent, Antwerp, Brussels).',
      'Cost: Similar; Belgium\'s food/beer is slightly better value.',
    ],
    faq: [
      { q: 'Can I combine the Netherlands and Belgium in one trip?', a: 'Ideally so — they\'re each only 2 hours by train across. A classic week: Amsterdam (3 nights) → Bruges (2 nights) → Brussels (2 nights), with day trips to Ghent or Antwerp.' },
      { q: 'Which has better beer — Netherlands or Belgium?', a: 'Belgium, without question. Trappist breweries (Westvleteren, Chimay, Orval), lambic fermentation (gueuze, kriek), and trappist-grade quality make Belgium the world\'s beer capital. The Netherlands is good but not in the same league.' },
      { q: 'Which is better for art lovers — Netherlands or Belgium?', a: 'Close contest. The Netherlands for the Dutch Golden Age (Rembrandt, Vermeer, Van Gogh). Belgium for Flemish Primitives (Van Eyck, Memling) and Baroque (Rubens). Combining both gives you a complete Low Countries art tour.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'brazil-vs-united-states-of-america': {
    intro: 'Brazil and the United States are the two largest countries in the Americas — with populations over 200 million each and similar continental-scale geographic diversity. The USA offers an unmatched infrastructure for domestic travel and iconic landmarks; Brazil offers extraordinary natural diversity, beach culture, and the warmth of Latin American hospitality at a fraction of the price.',
    whichToVisit: {
      a: 'Choose Brazil for the Amazon rainforest, Iguazu Falls, Rio\'s beaches and Carnival, Salvador da Bahia\'s Afro-Brazilian heritage, and affordable prices. Brazil is best for nature, music, and cultural immersion.',
      b: 'Choose the USA for the diversity of its 50 states — NYC, California, Florida, the national parks of the West, New Orleans, Chicago. The USA has more iconic bucket-list experiences per visit.',
    },
    keyDifferences: [
      'Cost: Brazil is 40–60% cheaper than the USA for most travellers.',
      'Safety: The USA is safer in most tourist areas; Brazil requires more urban vigilance.',
      'Language: English is essential in the USA; Portuguese skills help massively in Brazil (Spanish works partially).',
      'Landmarks: USA wins for iconic cities and national parks; Brazil wins for beaches, rainforest, and cultural richness.',
    ],
    faq: [
      { q: 'Is Brazil safer than the USA for tourists?', a: 'The USA is safer overall — much lower homicide rates in most cities and very low risk for tourists. Brazil\'s favelas and some urban areas require care; well-trodden tourist routes (Rio beaches, Salvador pelourinho, Iguazu) are well-patrolled and reasonably safe in daylight.' },
      { q: 'Do I need a visa for Brazil or the USA?', a: 'Visa requirements differ by nationality. US citizens can enter Brazil visa-free for 90 days as of 2024. Most Europeans need ESTA for the USA and can enter Brazil visa-free. Americans do not need visas for most of Europe (90-day Schengen).' },
      { q: 'Which is better for beaches — Brazil or the USA?', a: 'Brazil decisively — over 7,000 km of coastline with world-class beaches (Copacabana, Ipanema, Jericoacoara, Fernando de Noronha). The USA has Hawaii, Florida, and California but nothing matches Brazil\'s beach culture.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'mexico-vs-colombia': {
    intro: 'Mexico and Colombia are Latin America\'s two most popular destinations — both rebuilding their global image after decades defined by cartel narratives, both delivering extraordinary food, hospitality, and variety. Mexico is easier to access and more developed for tourism; Colombia is more compact, more intense, and currently one of the fastest-growing tourism destinations on Earth.',
    whichToVisit: {
      a: 'Choose Mexico for its diversity — Mayan ruins, Pacific surf, Caribbean beaches (Tulum, Riviera Maya), Mexico City\'s cultural depth, and the world\'s most influential street food culture. Mexico delivers more variety per country.',
      b: 'Choose Colombia for a more concentrated experience — Cartagena\'s Caribbean colonial beauty, Medellín\'s impressive urban transformation, Bogotá\'s cultural scene, and the Coffee Axis (Eje Cafetero). Colombia feels newer and more energetic.',
    },
    keyDifferences: [
      'Cost: Colombia is roughly 15–25% cheaper than Mexico, especially outside Cartagena.',
      'Infrastructure: Mexico\'s tourist infrastructure is more developed, especially Yucatan and Baja.',
      'Beaches: Mexico wins — Caribbean (Quintana Roo) and Pacific coasts both deliver.',
      'Safety: Both require precautions; Colombia has improved dramatically since the early 2000s.',
    ],
    faq: [
      { q: 'Is Mexico or Colombia safer?', a: 'Both have improved significantly and both have risk zones. Mexico\'s tourist zones (Yucatan, Quintana Roo) are very safe; some border states are not. Colombia\'s major tourist cities (Cartagena, Medellín, Bogotá) are now comparable to Mexico City in safety. Avoid rural border areas in both.' },
      { q: 'Which has better beaches — Mexico or Colombia?', a: 'Mexico wins. The Riviera Maya (Tulum, Playa del Carmen), Baja California Sur (Los Cabos), and Pacific coast offer far more beach variety. Colombia\'s Caribbean coast (Cartagena, Tayrona) is beautiful but more limited in scale.' },
      { q: 'Which is easier to travel — Mexico or Colombia?', a: 'Mexico — larger but with denser tourist infrastructure, more direct flights from the US and Europe, and more English spoken in tourist areas. Colombia rewards a bit more planning but is fully manageable with basic Spanish.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'china-vs-japan': {
    intro: 'China and Japan are East Asia\'s two great civilisations — historically intertwined but radically different for today\'s traveller. China offers scale, monumental ancient sites, and a rapidly modernising megacity experience; Japan offers precision, refinement, and one of the world\'s most distinctive cultures preserved alongside hyper-modernity. Most travellers prioritise Japan for first trips; China rewards those seeking more challenge and scale.',
    whichToVisit: {
      a: 'Choose China for monumental scale: the Great Wall, Forbidden City, Terracotta Army, Shanghai\'s skyline, Yunnan\'s ethnic diversity. China\'s high-speed rail network (48,000+ km) is the world\'s largest and makes the country surprisingly navigable.',
      b: 'Choose Japan for cultural depth: Kyoto\'s temples, Tokyo\'s neighbourhoods, onsen towns, bullet trains, and one of the world\'s most refined food cultures. Japan is easier operationally and consistently delivers on atmosphere.',
    },
    keyDifferences: [
      'Language: Japan has much more English signage; China is harder without translation apps.',
      'Visa: Japan is visa-free for most Westerners; China requires a pre-obtained visa.',
      'Scale: China is 25x larger than Japan — distances require flights and careful planning.',
      'Technology: China bans many Western apps (Google, WhatsApp); a VPN is often necessary for tourists.',
    ],
    faq: [
      { q: 'Which is easier to travel — Japan or China?', a: 'Japan is dramatically easier. English signage is widespread, visas are visa-free for most Western citizens, payments are smooth, and the country is safe and navigable. China requires a visa, a translation app, a VPN for Western internet, and local payment apps (Alipay/WeChat Pay).' },
      { q: 'Is Japan or China cheaper?', a: 'China is significantly cheaper for accommodation, food, and transport outside Beijing and Shanghai. Japan is surprisingly affordable since the yen weakened in 2022-2024, but still more expensive than China on average.' },
      { q: 'Which has better food — Japan or China?', a: 'Both are top-tier globally. Japan for precision, seasonality, and single-ingredient focus (sushi, ramen, kaiseki). China for eight distinct regional cuisines (Sichuan, Cantonese, Shandong, etc.) and extraordinary variety. Most food lovers end up exploring both.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'indonesia-vs-malaysia': {
    intro: 'Indonesia and Malaysia are Southeast Asia\'s two most diverse Muslim-majority nations — close neighbours separated by a narrow strait but dramatically different in scale and travel personality. Indonesia is vast, island-scattered, and offers both Bali\'s beach culture and genuine exploration; Malaysia is more developed, more multicultural, and more accessible for mainstream tourism.',
    whichToVisit: {
      a: 'Choose Indonesia for Bali (still the world\'s most visited tropical destination), the cultural depth of Java (Yogyakarta, Borobudur), diving in Komodo and Raja Ampat, and the sheer scale of 17,000 islands to explore.',
      b: 'Choose Malaysia for a more polished and multicultural experience — Kuala Lumpur\'s skyline, Penang\'s UNESCO-listed George Town (and food scene), Malaysian Borneo (Sabah, Sarawak) for orangutans and jungle, and the beaches of Langkawi.',
    },
    keyDifferences: [
      'Scale: Indonesia is 8x larger and has 9x the population — more diversity but harder to navigate.',
      'Infrastructure: Malaysia is more developed — better roads, better internet, less chaos.',
      'Religion: Indonesia is more conservative Muslim; Malaysia is officially Muslim but has large Chinese and Indian minorities with more visible diversity.',
      'Cost: Indonesia is cheaper outside Bali; Bali itself is comparable to Malaysia.',
    ],
    faq: [
      { q: 'Which is better for a first trip to Southeast Asia — Indonesia or Malaysia?', a: 'Malaysia is easier for first-timers — better infrastructure, more English, more diverse food in compact distances. Indonesia (especially Bali) is also beginner-friendly but requires more island-hopping if you want to see variety.' },
      { q: 'Is Bali or Malaysian Borneo better for nature?', a: 'Malaysian Borneo wins for wildlife — orangutans, proboscis monkeys, pygmy elephants, and vast tropical rainforest. Bali is beautiful but heavily developed. Indonesia\'s Komodo and Raja Ampat are Bali alternatives that rival Borneo for nature.' },
      { q: 'Can I combine Indonesia and Malaysia in one trip?', a: 'Yes — easy flight connections (2-3 hours between major cities). A classic two-week route: Kuala Lumpur → Penang → Langkawi → fly to Bali → Yogyakarta. Consider visa requirements: Indonesian visa-on-arrival, Malaysian visa-free for most Western nationals.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'france-vs-japan': {
    intro: 'France and Japan sit at opposite ends of Eurasia but share more than meets the eye — both are obsessed with food, seasonality, craft, and ritualised daily life. They are also two of the world\'s most visited non-regional destinations for Western travellers. France is the Latin expression of these obsessions; Japan is their East Asian minimalist counterpart.',
    whichToVisit: {
      a: 'Choose France for Paris, wine regions, patisserie, and the romance of southern Europe (Provence, Côte d\'Azur). France is easier for first-time transatlantic travellers and culturally closer to most Western visitors.',
      b: 'Choose Japan for the complete novelty experience — Tokyo\'s neighbourhoods, Kyoto\'s temples, ryokan stays, bullet trains, and some of the world\'s most precise food culture. Japan rewards slow travel and multiple trips.',
    },
    keyDifferences: [
      'Familiarity: France feels more familiar to Western travellers; Japan is more genuinely foreign.',
      'Food: Both cuisines are UNESCO-recognised; Japan for seasonal precision, France for technique.',
      'Cost: Since 2022 Japan has become meaningfully cheaper than France due to yen weakness.',
      'Trains: Both have excellent high-speed networks (TGV, Shinkansen); Japan\'s is more punctual.',
    ],
    faq: [
      { q: 'Which is better for a first long-haul trip — France or Japan?', a: 'If you\'re Western, France is an easier first big trip (shorter flights, more familiar culture, English more widely spoken). Japan is more genuinely transformative but requires more adjustment — jet lag, different writing system, more careful planning.' },
      { q: 'Is Japan or France more expensive?', a: 'France, currently. The yen\'s weakness since 2022 has made Japan surprisingly affordable — comparable to Italy or Spain rather than France. Paris remains Europe\'s most expensive capital.' },
      { q: 'Which is better for food — France or Japan?', a: 'Both are at the absolute top. France wins for restaurant culture, cheese, wine, and pastry. Japan wins for raw-ingredient obsession, technique (sushi, ramen, kaiseki), and has more Michelin stars in Tokyo than any other city on Earth.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'germany-vs-japan': {
    intro: 'Germany and Japan are the world\'s third and fourth largest economies — both defined by engineering excellence, post-war reinvention, and extraordinary infrastructure. Despite the obvious cultural distance, they share a surprising temperamental affinity: punctuality, craft obsession, and deep respect for rules. For travellers the combination is one of the world\'s great contrast trips.',
    whichToVisit: {
      a: 'Choose Germany for European depth — Berlin\'s creative energy, Bavaria\'s beer culture, Rhine castles, Christmas markets. Germany also has the easier visa for most travellers and is a few hours closer for Westerners.',
      b: 'Choose Japan for total immersion in a distinctive culture — Tokyo, Kyoto, bullet trains, ryokan stays. Japan consistently ranks as the world\'s most satisfying single-country trip for first-time visitors from Europe or the Americas.',
    },
    keyDifferences: [
      'Language: Germany has widespread English; Japan has improving English but still limited outside tourist areas.',
      'Cost: Similar — Japan has become cheaper since 2022, Germany has become more expensive.',
      'Travel ease: Germany is easier (Schengen, shorter flight from Europe); Japan requires more planning.',
      'Cuisine: Very different — Germany for hearty regional; Japan for refined seasonal.',
    ],
    faq: [
      { q: 'Is Germany or Japan cheaper to visit?', a: 'Roughly comparable in 2024. Japan has become surprisingly affordable since the yen weakened; Germany\'s prices have risen with inflation. Daily budgets of $80-120 work well in both.' },
      { q: 'Which has better trains — Germany or Japan?', a: 'Japan wins decisively for punctuality and cleanliness — the Shinkansen is famously within 30 seconds of schedule. Germany\'s network is denser and more integrated but notoriously late. Both are excellent for rail-based travel.' },
      { q: 'Can I combine Germany and Japan in one trip?', a: 'A trans-continental two-nation trip is ambitious but doable — typically 10-14 days in Japan followed by 7-10 days in Germany (or vice versa) with a direct flight between Frankfurt/Munich and Tokyo (~12 hours).' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'england-vs-united-states-of-america': {
    intro: 'England and the United States share a language, legal tradition, and centuries of cultural exchange — but they are dramatically different places to travel. England is compact, historically layered, and walkable; the USA is continental, car-dependent, and built around scale. Both are accessible to English-speaking travellers, but the experience could hardly be more different.',
    whichToVisit: {
      a: 'Choose England for a compact history-dense trip — London, the Cotswolds, York, Bath, the Lake District. Everything is within 4 hours of London by train, and most major museums are free. England rewards slower exploration.',
      b: 'Choose the USA for continental scale — NYC, California, Florida, the Grand Canyon, New Orleans. No single US trip covers the country; most travellers focus on 2-3 regions per visit. The USA demands more planning but delivers more variety.',
    },
    keyDifferences: [
      'Scale: USA is 75x larger than England — you can see England in 2 weeks, you need decades for the USA.',
      'Cost: USA is cheaper on big-ticket items (gas, food portions) but healthcare and cities are expensive.',
      'History: England has far more visible pre-industrial history.',
      'Nature: USA wins for scale and national parks; England for countryside and hedgerows.',
    ],
    faq: [
      { q: 'Can I combine England and the USA in one trip?', a: 'Many travellers do — London is the most common first European stop for Americans, and NYC or California are common first American stops for Brits. A typical two-week combo might be London (5 days) + NYC (5 days), or London (3 days) + a US national-park road trip (10 days).' },
      { q: 'Is food better in England or the USA?', a: 'England has undergone a major culinary renaissance — London now has more Michelin stars than any city except Tokyo and Paris. The USA has greater regional variety (BBQ, NYC pizza, Mexican-American, Southern, Cajun). Both have moved beyond old stereotypes.' },
      { q: 'Which is safer — England or the USA?', a: 'England, significantly. Gun ownership is extremely restricted and homicide rates are roughly 4-5x lower than the USA. Both are safe for tourists in major destinations; the USA requires more awareness of neighbourhood boundaries in large cities.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'australia-vs-canada': {
    intro: 'Australia and Canada are two Commonwealth countries both defined by vast landscapes, progressive politics, and outdoor culture — yet they sit at opposite climatic extremes. Australia is hot, sun-burnt, and beach-oriented; Canada is cold, forest-covered, and mountain-oriented. Both are top immigration destinations and increasingly popular with long-haul travellers.',
    whichToVisit: {
      a: 'Choose Australia for the Great Barrier Reef, wildlife (kangaroos, koalas), sun-baked cities (Sydney, Melbourne), and a famously relaxed culture. Australia rewards travellers who want beach and desert.',
      b: 'Choose Canada for the Rockies (Banff, Jasper), the Niagara-Toronto-Quebec circuit, Northern Lights in Yukon, and the world\'s most visible bilingual (English-French) culture. Canada rewards travellers who want mountains and forest.',
    },
    keyDifferences: [
      'Climate: Australia is mostly hot; Canada has 4 genuine seasons including cold winters.',
      'Wildlife: Australia for uniqueness (marsupials, monotremes); Canada for big mammals (bears, moose, whales).',
      'Cities: Similar quality — Sydney/Melbourne vs Toronto/Montreal/Vancouver.',
      'Distance: Australia is 25-30 hours from Europe; Canada is 7-10 hours — much shorter flight for Europeans.',
    ],
    faq: [
      { q: 'Is Australia or Canada safer for tourists?', a: 'Both are extremely safe and rank among the top 20 in the Global Peace Index. Canada\'s main safety risk is wildlife (bears) in remote areas; Australia\'s is venomous wildlife (spiders, snakes, jellyfish) though fatalities are very rare.' },
      { q: 'Which is cheaper to visit — Australia or Canada?', a: 'Canada is slightly cheaper, particularly for flights from Europe and for accommodation outside major cities. Australia\'s remoteness adds flight costs (from Europe, typically $1,500+ return).' },
      { q: 'Which has better national parks — Australia or Canada?', a: 'Different strengths. Canada\'s Rockies (Banff, Jasper, Yoho) are more dramatically mountainous. Australia\'s parks (Kakadu, Uluru-Kata Tjuta, Great Barrier Reef) are more unique biologically. Both have excellent park systems with camping and hiking.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'ghana-vs-nigeria': {
    intro: 'Ghana and Nigeria are West Africa\'s two most visited English-speaking nations — both Atlantic coastal countries with vibrant music, food, and entrepreneurial culture. Ghana is smaller, more stable, and increasingly popular with diaspora travellers and first-time visitors to Africa; Nigeria is vastly larger, more complex, and the continent\'s undisputed cultural and economic powerhouse.',
    whichToVisit: {
      a: 'Choose Ghana for a first-time African experience — the slave-trade history of Cape Coast and Elmina castles, Accra\'s growing creative scene, and a reputation for being one of West Africa\'s safest and most welcoming countries. Ghana launched the Year of Return (2019) specifically for diaspora travellers.',
      b: 'Choose Nigeria for the world\'s Afro-centric cultural capital — Lagos, Nollywood (the world\'s 2nd largest film industry), Afrobeats music origins, and extraordinary scale (220+ million people, 6x Ghana\'s population). Nigeria rewards travellers with patience and local connections.',
    },
    keyDifferences: [
      'Size: Nigeria has 6x Ghana\'s population and is West Africa\'s dominant economy.',
      'Safety: Ghana is markedly safer and easier to navigate; Nigeria requires more precautions.',
      'Visa: Ghana has e-visa for many nationalities; Nigeria is one of Africa\'s harder visas to obtain.',
      'Culture: Nigeria has greater global cultural exports (Afrobeats, Nollywood); Ghana has richer visible history (slave trade sites).',
    ],
    faq: [
      { q: 'Is Ghana or Nigeria safer to visit?', a: 'Ghana is considerably safer and more travel-friendly. Nigeria\'s security situation varies dramatically by region — Lagos and the southwest are generally fine in daylight, but parts of the north and Niger Delta have significant risks. Ghana is among West Africa\'s safest countries.' },
      { q: 'Which has better music scene — Ghana or Nigeria?', a: 'Nigeria is the global Afrobeats capital — artists like Burna Boy, Wizkid, Tems, and Rema dominate African music globally. Ghana\'s Highlife tradition influenced Nigerian Afrobeats, and its current Azonto and Afrobeats scene is strong. Both are top-tier African music destinations.' },
      { q: 'Can I combine Ghana and Nigeria in one trip?', a: 'Yes — short flight (1 hour) between Accra and Lagos. A classic week-long combo: Accra (3 nights) + Cape Coast (1 night) + Lagos (3 nights). Consider visa logistics in advance; Nigeria visa must be obtained before travel.' },
    ],
    blogLink: null,
    blogLabel: null,
  },

  'kenya-vs-south-africa': {
    intro: 'Kenya and South Africa are Africa\'s two most developed safari destinations — both English-speaking, both with world-class national parks, both deeply important cultural and economic centres on the continent. Kenya is the classic East African safari experience; South Africa is a more diverse, developed, and cosmopolitan all-rounder that goes far beyond wildlife.',
    whichToVisit: {
      a: 'Choose Kenya for the pure safari dream — the Masai Mara (especially during the Great Migration, July-October), Amboseli\'s elephants against Kilimanjaro, and a more intimate safari experience. Kenya is the classic African wildlife trip.',
      b: 'Choose South Africa for a more complete vacation country — Cape Town (one of the world\'s great cities), the Garden Route, Stellenbosch wine country, plus Kruger National Park rivalling Kenya\'s wildlife. South Africa offers more diversity per trip.',
    },
    keyDifferences: [
      'Safari: Kenya is the classic open-savanna experience; South Africa (Kruger) is dense bush.',
      'Cities: South Africa wins decisively — Cape Town is world-class; Nairobi is functional.',
      'Cost: Kenya is cheaper for budget safaris; South Africa is better value for mid-range all-inclusive trips.',
      'Migration: Kenya\'s Great Migration (Masai Mara, July-October) is the single most spectacular wildlife event on Earth.',
    ],
    faq: [
      { q: 'Which is better for safari — Kenya or South Africa?', a: 'Both are exceptional. Kenya offers the classic East African safari with huge open plains and the Great Migration spectacle. South Africa\'s Kruger is denser with a higher concentration of predators and Big Five encounters. For a first safari, either delivers; experienced safari-goers often prefer Kenya for pure wildlife spectacle.' },
      { q: 'Is Kenya or South Africa safer?', a: 'South Africa has higher crime rates in general, but tourist areas (Cape Town, wine country, Kruger) are well-managed. Kenya\'s main safety concerns are terrorism (contained to certain northern/coastal areas) and petty crime in Nairobi. Both are safe on organised safaris.' },
      { q: 'Can I combine Kenya and South Africa in one trip?', a: 'Yes — direct flights from Nairobi to Johannesburg or Cape Town (4 hours). A classic two-week combination: 6-8 nights Kenyan safari (Masai Mara + Amboseli) + 6-8 nights South Africa (Cape Town + Kruger). Plan around the Great Migration for optimal Kenya timing.' },
    ],
    blogLink: null,
    blogLabel: null,
  },
};

const EDITORIAL_BY_LANG = {
  en: COMPARE_EDITORIAL,
  fr: COMPARE_EDITORIAL_FR,
  es: COMPARE_EDITORIAL_ES,
};

/**
 * Returns editorial data for a given slug pair in the requested language,
 * trying both orderings. Falls back to EN if the translation is missing.
 */
export function getEditorial(slugA, slugB, lang = 'en') {
  const table = EDITORIAL_BY_LANG[lang] || COMPARE_EDITORIAL;
  const key1 = `${slugA}-vs-${slugB}`;
  const key2 = `${slugB}-vs-${slugA}`;
  // Try translated table first, then fall back to EN so pages never break.
  const data =
    table[key1] || table[key2] ||
    COMPARE_EDITORIAL[key1] || COMPARE_EDITORIAL[key2];
  if (!data) return null;
  const usedKey2 =
    !table[key1] && (table[key2] || (!table[key1] && COMPARE_EDITORIAL[key2]));
  if (usedKey2) {
    return {
      ...data,
      whichToVisit: { a: data.whichToVisit.b, b: data.whichToVisit.a },
    };
  }
  return data;
}
