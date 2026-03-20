globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, f as renderComponent, d as renderTemplate, e as createAstro, F as Fragment, a as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_C2HQGDfO.mjs';
import { $ as $$Base } from '../../chunks/Base_DzHndBSy.mjs';
import { d as detectLang, C as COUNTRY_DATA, a as COUNTRY_VIBES, s as slugify, g as getT, t as translateRegion, b as COUNTRY_INSIGHTS, f as COUNTRY_CITIES, c as COUNTRY_PEAKS, e as COUNTRY_DISHES } from '../../chunks/detect_CIgPMk7_.mjs';
import { T as TRAVEL_ADVISORY, a as TRAVEL_SCORES } from '../../chunks/travelScores_CyA0wfgg.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

// ─── Country extras — structured data for compare & detail pages ─────────────
// climate   : dominant climate description
// religion  : primary religion + rough % where known
// hdi       : 'high' | 'medium' | 'low'  (UN HDI tiers)
// dishes    : 2–3 other iconic dishes (besides national dish)
// athletes  : 1–2 notable athletes or sporting achievements
// landlocked: true = no sea coast

const COUNTRY_REGION = {
  // Europe
  Albania:'Europe', Andorra:'Europe', Austria:'Europe', Belarus:'Europe',
  Belgium:'Europe', 'Bosnia and Herzegovina':'Europe', Bulgaria:'Europe',
  Croatia:'Europe', Cyprus:'Europe', 'Czech Republic':'Europe', Denmark:'Europe',
  Estonia:'Europe', Finland:'Europe', France:'Europe', Germany:'Europe',
  Greece:'Europe', Greenland:'Americas', Hungary:'Europe', Iceland:'Europe', Ireland:'Europe',
  Italy:'Europe', Kosovo:'Europe', Latvia:'Europe', Liechtenstein:'Europe',
  Lithuania:'Europe', Luxembourg:'Europe', Malta:'Europe', Moldova:'Europe',
  Monaco:'Europe', Montenegro:'Europe', Netherlands:'Europe',
  'North Macedonia':'Europe', Norway:'Europe', Poland:'Europe', Portugal:'Europe',
  Romania:'Europe', Russia:'Europe', 'San Marino':'Europe', Serbia:'Europe',
  Slovakia:'Europe', Slovenia:'Europe', Spain:'Europe', Sweden:'Europe',
  Switzerland:'Europe', Ukraine:'Europe',
  England:'Europe', Scotland:'Europe', Wales:'Europe', 'Northern Ireland':'Europe',
  // Asia
  Afghanistan:'Asia', Armenia:'Asia', Azerbaijan:'Asia', Bahrain:'Asia',
  Bangladesh:'Asia', Bhutan:'Asia', Brunei:'Asia', Cambodia:'Asia',
  China:'Asia', Georgia:'Asia', India:'Asia', Indonesia:'Asia',
  Iran:'Asia', Iraq:'Asia', Israel:'Asia', Japan:'Asia', Jordan:'Asia',
  Kazakhstan:'Asia', Kuwait:'Asia', Kyrgyzstan:'Asia', Laos:'Asia',
  Lebanon:'Asia', Malaysia:'Asia', Maldives:'Asia', Mongolia:'Asia',
  Myanmar:'Asia', Nepal:'Asia', 'North Korea':'Asia', Oman:'Asia',
  Pakistan:'Asia', Palestine:'Asia', Philippines:'Asia', Qatar:'Asia',
  'Saudi Arabia':'Asia', Singapore:'Asia', 'South Korea':'Asia',
  'Sri Lanka':'Asia', Syria:'Asia', Taiwan:'Asia', Tajikistan:'Asia',
  Thailand:'Asia', 'Timor-Leste':'Asia', Turkey:'Asia', Turkmenistan:'Asia',
  'United Arab Emirates':'Asia', Uzbekistan:'Asia', Vietnam:'Asia', Yemen:'Asia',
  // Africa
  Algeria:'Africa', Angola:'Africa', Benin:'Africa', Botswana:'Africa',
  'Burkina Faso':'Africa', Burundi:'Africa', 'Cabo Verde':'Africa',
  'Cape Verde':'Africa', Cameroon:'Africa',
  'Central African Republic':'Africa', Chad:'Africa', Comoros:'Africa',
  "Côte d'Ivoire":'Africa', 'Democratic Republic of the Congo':'Africa',
  Djibouti:'Africa', Egypt:'Africa', 'Equatorial Guinea':'Africa',
  Eritrea:'Africa', Eswatini:'Africa', Ethiopia:'Africa', Gabon:'Africa',
  Gambia:'Africa', Ghana:'Africa', Guinea:'Africa', 'Guinea-Bissau':'Africa',
  Kenya:'Africa', Lesotho:'Africa', Liberia:'Africa', Libya:'Africa',
  Madagascar:'Africa', Malawi:'Africa', Mali:'Africa', Mauritania:'Africa',
  Mauritius:'Africa', Morocco:'Africa', Mozambique:'Africa', Namibia:'Africa',
  Niger:'Africa', Nigeria:'Africa', 'Republic of the Congo':'Africa',
  Rwanda:'Africa', 'São Tomé and Príncipe':'Africa', Senegal:'Africa',
  Seychelles:'Africa', 'Sierra Leone':'Africa', Somalia:'Africa',
  'South Africa':'Africa', 'South Sudan':'Africa', Sudan:'Africa',
  Tanzania:'Africa', Togo:'Africa', Tunisia:'Africa', Uganda:'Africa',
  Zambia:'Africa', Zimbabwe:'Africa',
  // Americas
  'Antigua and Barbuda':'Americas', Argentina:'Americas', Bahamas:'Americas',
  Barbados:'Americas', Belize:'Americas', Bolivia:'Americas', Brazil:'Americas',
  Canada:'Americas', Chile:'Americas', Colombia:'Americas',
  'Costa Rica':'Americas', Cuba:'Americas', 'Dominican Republic':'Americas',
  Ecuador:'Americas', 'El Salvador':'Americas', Grenada:'Americas',
  Guatemala:'Americas', Guyana:'Americas', Haiti:'Americas', 'Puerto Rico':'Americas',
  Honduras:'Americas', 'Hong Kong':'Asia', Jamaica:'Americas', Mexico:'Americas',
  Nicaragua:'Americas', Panama:'Americas', Paraguay:'Americas',
  Peru:'Americas', 'Saint Lucia':'Americas', Suriname:'Americas',
  'Trinidad and Tobago':'Americas', 'United States of America':'Americas',
  Uruguay:'Americas', Venezuela:'Americas',
  // Oceania
  Australia:'Oceania', Fiji:'Oceania', Kiribati:'Oceania',
  'Marshall Islands':'Oceania', Micronesia:'Oceania', Nauru:'Oceania',
  'New Zealand':'Oceania', Palau:'Oceania', 'Papua New Guinea':'Oceania',
  Samoa:'Oceania', 'Solomon Islands':'Oceania', Tonga:'Oceania',
  Tuvalu:'Oceania', Vanuatu:'Oceania',
};

const COUNTRY_EXTRAS = {
  // ── A ──────────────────────────────────────────────────────────────────
  Afghanistan:    { climate:'Arid / Semi-arid', religion:'Islam (99%)', hdi:'low',    dishes:['Kabuli Pulao','Mantu','Bolani'],          athletes:['Rohullah Nikpai (Olympic taekwondo bronze)'],  landlocked:true  },
  Albania:        { climate:'Mediterranean / Continental', religion:'Islam (56%), Christianity (17%)', hdi:'medium', dishes:['Fërgesë','Tavë kosi','Byrek'], athletes:['Erjon Bogdani (football)','Briken Calja (weightlifting)'], landlocked:false },
  Algeria:        { climate:'Arid / Mediterranean', religion:'Islam (99%)', hdi:'medium', dishes:['Couscous','Chakhchoukha','Merguez'],  athletes:['Hassiba Boulmerka (Olympic 1500m)','Makhlouf Yahi'],  landlocked:false },
  Andorra:        { climate:'Mountain / Alpine',   religion:'Roman Catholic (90%)', hdi:'high',   dishes:['Escudella','Trinxat','Coca de recapte'], athletes:['Joan Verdú (skiing)'], landlocked:true  },
  Angola:         { climate:'Tropical / Semi-arid', religion:'Christianity (95%)', hdi:'medium', dishes:['Muamba de Galinha','Calulu','Moamba'], athletes:['Figo Lúcio (basketball)'],  landlocked:false },
  'Antigua and Barbuda': { climate:'Tropical', religion:'Protestant (68%)', hdi:'high', dishes:['Fungee & Pepperpot','Ducana','Saltfish'], athletes:['Viv Richards (cricket)','Darren Sammy'], landlocked:false },
  Argentina:      { climate:'Temperate / Semi-arid', religion:'Roman Catholic (92%)', hdi:'high',   dishes:['Asado','Empanadas','Medialunas'], athletes:['Lionel Messi','Diego Maradona'], landlocked:false },
  Armenia:        { climate:'Continental', religion:'Armenian Apostolic (93%)', hdi:'high',   dishes:['Khorovats','Dolma','Harissa'], athletes:['Artur Aleksanyan (wrestling)','Henrikh Mkhitaryan'], landlocked:true  },
  Australia:      { climate:'Arid / Temperate', religion:'Christianity (44%)', hdi:'high',   dishes:['Meat pie','Lamington','Vegemite toast'], athletes:['Cathy Freeman','Ian Thorpe'], landlocked:false },
  Austria:        { climate:'Alpine / Temperate', religion:'Roman Catholic (57%)', hdi:'high',   dishes:['Wiener Schnitzel','Tafelspitz','Kaiserschmarrn'], athletes:['Hermann Maier (skiing)','Thomas Muster (tennis)'], landlocked:true  },
  Azerbaijan:     { climate:'Semi-arid / Temperate', religion:'Islam (97%)', hdi:'high',   dishes:['Plov','Dolma','Qutab'],           athletes:['Heydar Aliyev (chess)','Mariana Vasilyeva'], landlocked:false },

  // ── B ──────────────────────────────────────────────────────────────────
  Bahamas:        { climate:'Tropical', religion:'Protestant (70%)', hdi:'high',   dishes:['Conch salad','Johnnycake','Cracked conch'], athletes:['Frank Rutherford (athletics)'], landlocked:false },
  Bahrain:        { climate:'Desert / Arid', religion:'Islam (74%)', hdi:'high',   dishes:['Machboos','Muhammar','Harees'],    athletes:['Rai Benjamin (athletics, naturalised US)'], landlocked:false },
  Bangladesh:     { climate:'Tropical Monsoon', religion:'Islam (88%)', hdi:'medium', dishes:['Hilsa curry','Panta bhat','Naan khatai'], athletes:['Shakib Al Hasan (cricket)'], landlocked:false },
  Barbados:       { climate:'Tropical', religion:'Protestant (75%)', hdi:'high',   dishes:['Flying fish & cou-cou','Pudding & souse','Macaroni pie'], athletes:['Rihanna (global icon)','Garfield Sobers (cricket)'], landlocked:false },
  Belarus:        { climate:'Continental / Temperate', religion:'Orthodox Christianity (48%)', hdi:'high',   dishes:['Draniki','Machanka','Khaladnik'], athletes:['Darya Domracheva (biathlon)','Alexander Medved (wrestling)'], landlocked:true  },
  Belgium:        { climate:'Oceanic / Temperate', religion:'Roman Catholic (58%)', hdi:'high',   dishes:['Moules-frites','Carbonnade flamande','Speculoos'], athletes:['Eddy Merckx (cycling)','Kevin De Bruyne (football)'], landlocked:false },
  Belize:         { climate:'Tropical', religion:'Roman Catholic (40%)', hdi:'medium', dishes:['Rice & beans','Stew chicken','Garnaches'], athletes:['Marion Jones (athletics, born Belize)'], landlocked:false },
  Benin:          { climate:'Tropical', religion:'Christianity (48%), Islam (24%)', hdi:'low',    dishes:['Akassa','Amiwo','Kuli-kuli'], athletes:['David Douillet (judo, French roots)'], landlocked:false },
  Bhutan:         { climate:'Alpine / Subtropical', religion:'Buddhism (75%)', hdi:'medium', dishes:['Ema datshi','Jasha maru','Red rice'], athletes:['Karma (archery)'], landlocked:true  },
  Bolivia:        { climate:'Tropical / Arid / Alpine', religion:'Roman Catholic (70%)', hdi:'medium', dishes:['Salteña','Anticucho','Chicha'],        athletes:['Marco Antonio Etcheverry (football)'], landlocked:true  },
  'Bosnia and Herzegovina': { climate:'Continental / Mediterranean', religion:'Islam (51%), Orthodox (31%)', hdi:'high', dishes:['Ćevapi','Burek','Begova čorba'], athletes:['Edin Džeko (football)','Mirza Teletović (basketball)'], landlocked:false },
  Botswana:       { climate:'Semi-arid / Savanna', religion:'Christianity (79%)', hdi:'medium', dishes:['Seswaa','Bogobe','Mogodu'],       athletes:['Amantle Montsho (athletics)'], landlocked:true  },
  Brazil:         { climate:'Tropical / Subtropical', religion:'Roman Catholic (50%)', hdi:'high',   dishes:['Churrasco','Moqueca','Pão de queijo'], athletes:['Pelé','Ayrton Senna'], landlocked:false },
  Brunei:         { climate:'Tropical Rainforest', religion:'Islam (79%)', hdi:'high',   dishes:['Ambuyat','Nasi katok','Soto'],     athletes:['Brunei Olympic Committee — first Olympic participation 1988'], landlocked:false },
  Bulgaria:       { climate:'Continental / Mediterranean', religion:'Orthodox Christianity (59%)', hdi:'high',   dishes:['Banitsa','Shopska salad','Kavarma'], athletes:['Stefka Kostadinova (high jump)','Kubrat Pulev (boxing)'], landlocked:false },
  'Burkina Faso': { climate:'Semi-arid / Sahel', religion:'Islam (61%), Christianity (23%)', hdi:'low',    dishes:['Tô','Riz gras',"Ragout d'igname"], athletes:['Bertrand Traoré (football)'],  landlocked:true  },
  Burundi:        { climate:'Tropical / Highland', religion:'Roman Catholic (62%)', hdi:'low',    dishes:['Ugali','Isombe','Nyama ya ngombe'], athletes:['Francine Niyonsaba (athletics)'], landlocked:true  },

  // ── C ──────────────────────────────────────────────────────────────────
  'Cabo Verde':   { climate:'Semi-arid / Tropical', religion:'Roman Catholic (77%)', hdi:'medium', dishes:['Cachupa','Caldo de peixe','Buzio'], athletes:['Nélson Évora (triple jump)'], landlocked:false },
  'Cape Verde':   { climate:'Semi-arid / Tropical', religion:'Roman Catholic (77%)', hdi:'medium', dishes:['Cachupa','Caldo de peixe','Buzio'], athletes:['Nélson Évora (triple jump)'], landlocked:false },
  Cambodia:       { climate:'Tropical Monsoon', religion:'Buddhism (97%)', hdi:'medium', dishes:['Fish amok','Bai sach chrouk','Nom banh chok'], athletes:['Sorn Seavmey (taekwondo)'], landlocked:false },
  Cameroon:       { climate:'Tropical / Savanna', religion:'Christianity (70%)', hdi:'medium', dishes:['Ndolé','Koki','Achu'],              athletes:['Samuel Eto\'o','Roger Milla'], landlocked:false },
  Canada:         { climate:'Subarctic / Temperate', religion:'Christianity (55%)', hdi:'high',   dishes:['Poutine','Butter tarts','Tourtière'], athletes:['Wayne Gretzky','Donovan Bailey'], landlocked:false },
  'Central African Republic': { climate:'Tropical Savanna', religion:'Christianity (51%), Islam (15%)', hdi:'low', dishes:['Kanda ti nyma','Saka-saka','Chikwanga'], athletes:['Michel Gbagbo (football)'], landlocked:true },
  Chad:           { climate:'Arid / Semi-arid', religion:'Islam (52%), Christianity (44%)', hdi:'low',    dishes:['Daraba','La bouillie','Brochettes'], athletes:['Hassan Djamous (marathon)'], landlocked:true  },
  Chile:          { climate:'Varied — Arid to Polar', religion:'Roman Catholic (45%)', hdi:'high',   dishes:['Cazuela','Empanadas de pino','Pastel de choclo'], athletes:['Marcelo Ríos (tennis)','Iván Zamorano (football)'], landlocked:false },
  China:          { climate:'Varied — Tropical to Subarctic', religion:'No official / Buddhism (18%)', hdi:'high', dishes:['Dim sum','Peking duck','Hot pot'], athletes:['Yao Ming','Liu Xiang'], landlocked:false },
  Colombia:       { climate:'Tropical / Temperate', religion:'Roman Catholic (79%)', hdi:'high',   dishes:['Ajiaco','Bandeja paisa','Arepa'],   athletes:['Nairo Quintana (cycling)','Falcao (football)'], landlocked:false },
  Comoros:        { climate:'Tropical Marine', religion:'Islam (98%)', hdi:'medium', dishes:['Langouste à la vanille','Mkatra foutra','Pilao'], athletes:['Ali Ahamada (football)'], landlocked:false },
  'Costa Rica':   { climate:'Tropical / Subtropical', religion:'Roman Catholic (47%)', hdi:'high',   dishes:['Gallo pinto','Casado','Sopa negra'], athletes:['Bryan Ruiz (football)','Claudia Poll (swimming)'], landlocked:false },
  Croatia:        { climate:'Mediterranean / Continental', religion:'Roman Catholic (86%)', hdi:'high',   dishes:['Štrukli','Crni rižot','Peka'],     athletes:['Goran Ivanišević (tennis)','Luka Modrić (football)'], landlocked:false },
  Cuba:           { climate:'Tropical', religion:'Roman Catholic (60%)', hdi:'high',   dishes:['Ropa vieja','Lechón asado','Tostones'], athletes:['Teófilo Stevenson (boxing)','Javier Sotomayor (high jump)'], landlocked:false },
  Cyprus:         { climate:'Mediterranean', religion:'Orthodox Christianity (78%)', hdi:'high',   dishes:['Meze','Halloumi','Souvlaki'],      athletes:['Marcos Baghdatis (tennis)'], landlocked:false },
  'Czech Republic': { climate:'Temperate / Continental', religion:'Non-religious (46%)', hdi:'high', dishes:['Svíčková','Trdelník','Knedlíky'], athletes:['Martina Navratilova (tennis)','Jaromír Jágr (ice hockey)'], landlocked:true },
  "Côte d'Ivoire": { climate:'Tropical', religion:'Islam (42%), Christianity (34%)', hdi:'medium', dishes:['Attiéké','Alloco','Foutou'], athletes:["Didier Drogba",'Yaya Touré'], landlocked:false },

  // ── D ──────────────────────────────────────────────────────────────────
  'Democratic Republic of the Congo': { climate:'Tropical Rainforest', religion:'Christianity (95%)', hdi:'low', dishes:['Saka saka','Fufu','Moambe'], athletes:['Yannick Bolasie (football)'], landlocked:false },
  Denmark:        { climate:'Oceanic / Temperate', religion:'Evangelical Lutheran (75%)', hdi:'high',   dishes:['Smørrebrød','Flæskesteg','Æbleskiver'], athletes:['Peter Schmeichel (football)','Caroline Wozniacki (tennis)'], landlocked:false },
  Djibouti:       { climate:'Desert / Arid', religion:'Islam (94%)', hdi:'medium', dishes:['Skoudehkaris','Fah-fah','Lahoh'],    athletes:['Hassan Abukar Hassan (athletics)'], landlocked:false },
  'Dominican Republic': { climate:'Tropical', religion:'Roman Catholic (57%)', hdi:'medium', dishes:['La Bandera','Mofongo','Sancocho'], athletes:['Pedro Martínez (baseball)','Juan Marichal'], landlocked:false },

  // ── E ──────────────────────────────────────────────────────────────────
  Ecuador:        { climate:'Tropical / Alpine', religion:'Roman Catholic (74%)', hdi:'high',   dishes:['Ceviche','Llapingachos','Encebollado'], athletes:['Jefferson Pérez (racewalking)','Antonio Valencia (football)'], landlocked:false },
  Egypt:          { climate:'Desert / Arid', religion:'Islam (90%)', hdi:'medium', dishes:['Ful medames','Shawarma','Om Ali'],   athletes:['Mohamed Salah (football)','Ali Hassan Bahr (weightlifting)'], landlocked:false },
  'El Salvador':  { climate:'Tropical / Subtropical', religion:'Roman Catholic (47%)', hdi:'medium', dishes:['Pupusas','Sopa de pata','Yuca frita'], athletes:['Jorge Gonzalez (wrestling)'], landlocked:false },
  England:        { climate:'Oceanic / Temperate', religion:'Non-religious (52%), Church of England (20%)', hdi:'high', dishes:['Sunday Roast','Chicken Tikka Masala','Cornish Pasty'], athletes:['Bobby Moore (football)','Roger Bannister (athletics)'], landlocked:false },
  'Equatorial Guinea': { climate:'Tropical Rainforest', religion:'Roman Catholic (93%)', hdi:'medium', dishes:['Pepesup','Sopa boba','Succotash'], athletes:['Alfredo Okenve (football)'], landlocked:false },
  Eritrea:        { climate:'Desert / Semi-arid', religion:'Christianity (63%), Islam (36%)', hdi:'low', dishes:['Injera','Zigini','Shiro'], athletes:['Zersenay Tadese (marathon)'], landlocked:false },
  Estonia:        { climate:'Temperate / Subarctic', religion:'Lutheran (10%), Non-religious (54%)', hdi:'high', dishes:['Verivorst','Kama','Mulgipuder'], athletes:['Erki Nool (decathlon)','Gerd Kanter (discus)'], landlocked:false },
  Eswatini:       { climate:'Subtropical', religion:'Zionist Christianity (40%)', hdi:'medium', dishes:['Emasi emaoto','Sishwala','Incwancwa'], athletes:['Sibusiso Matsenjwa (athletics)'], landlocked:true  },
  Ethiopia:       { climate:'Highland / Semi-arid', religion:'Christianity (63%), Islam (34%)', hdi:'low',    dishes:['Doro wat','Tibs','Tej'],           athletes:['Haile Gebrselassie','Kenenisa Bekele'], landlocked:true  },

  // ── F ──────────────────────────────────────────────────────────────────
  Fiji:           { climate:'Tropical Marine', religion:'Christianity (64%)', hdi:'medium', dishes:['Kokoda','Lovo','Rourou'],          athletes:['Leone Nakarawa (rugby)'], landlocked:false },
  Finland:        { climate:'Subarctic / Temperate', religion:'Lutheran (68%)', hdi:'high',   dishes:['Karjalanpiirakka','Lohikeitto','Kalakukko'], athletes:['Paavo Nurmi (athletics)','Matti Nykänen (ski jumping)'], landlocked:false },
  France:         { climate:'Oceanic / Mediterranean', religion:'Roman Catholic (47%)', hdi:'high',   dishes:['Croissant','Bouillabaisse','Crêpes'],  athletes:['Zinedine Zidane','Marie-José Pérec'], landlocked:false },

  // ── G ──────────────────────────────────────────────────────────────────
  Gabon:          { climate:'Tropical Rainforest', religion:'Christianity (80%)', hdi:'medium', dishes:['Nyembwe chicken','Bobolo','Bitchanga'], athletes:['Pierre-Emerick Aubameyang'], landlocked:false },
  Gambia:         { climate:'Tropical', religion:'Islam (96%)', hdi:'medium', dishes:['Benachin','Yassa','Domoda'],        athletes:['Adama Barrow (president & footballer)'], landlocked:false },
  Georgia:        { climate:'Temperate / Alpine', religion:'Georgian Orthodox (84%)', hdi:'high',   dishes:['Khinkali','Lobiani','Churchkhela'],  athletes:['Zurab Zviadauri (judo)','Levan Saginashvili (strongman)'], landlocked:false },
  Germany:        { climate:'Oceanic / Continental', religion:'Christianity (57%)', hdi:'high',   dishes:['Bratwurst','Pretzels','Black Forest cake'], athletes:['Michael Schumacher','Steffi Graf'], landlocked:false },
  Ghana:          { climate:'Tropical', religion:'Christianity (71%)', hdi:'medium', dishes:['Jollof rice','Kelewele','Fufu'],     athletes:['Tony Yeboah (football)','Azumah Nelson (boxing)'], landlocked:false },
  Greece:         { climate:'Mediterranean', religion:'Orthodox Christianity (90%)', hdi:'high',   dishes:['Spanakopita','Tzatziki','Loukoumades'], athletes:['Pyrros Dimas (weightlifting)','Stergios Marinos (athletics)'], landlocked:false },
  Greenland:      { climate:'Arctic / Subarctic', religion:'Evangelical Lutheran (95%)', hdi:'high',   dishes:['Mattak','Dried reindeer','Kiviak'], athletes:['Malik Guldberg (swimming)'], landlocked:false },
  Guatemala:      { climate:'Tropical / Highland', religion:'Roman Catholic (46%), Evangelical (42%)', hdi:'medium', dishes:['Pepián','Kak\'ik','Tamales'], athletes:['Erick Barrondo (racewalking)'], landlocked:false },
  Guinea:         { climate:'Tropical', religion:'Islam (85%)', hdi:'low',    dishes:['Riz sauce feuille',"Ragout d'arachide",'Fouti'], athletes:['Naby Keïta (football)'], landlocked:false },
  'Guinea-Bissau':{ climate:'Tropical', religion:'Islam (45%), African religions (22%)', hdi:'low', dishes:['Caldo de mancarra','Arroz de marisco','Katxupa'], athletes:['Fredéric Mendy (boxing)'], landlocked:false },
  Guyana:         { climate:'Tropical Rainforest', religion:'Christianity (57%), Hinduism (28%)', hdi:'medium', dishes:['Pepperpot','Metemgee','Bake and saltfish'], athletes:['Clive Lloyd (cricket)'], landlocked:false },

  // ── H ──────────────────────────────────────────────────────────────────
  Haiti:          { climate:'Tropical', religion:'Roman Catholic (55%)', hdi:'low',    dishes:['Griot','Diri ak djon djon','Legim'], athletes:['Dieunedort Previlon (football)'], landlocked:false },
  Honduras:       { climate:'Tropical / Subtropical', religion:'Roman Catholic (46%), Evangelical (41%)', hdi:'medium', dishes:['Baleadas','Tapado','Sopa de caracol'], athletes:['David Suazo (football)'], landlocked:false },
  'Hong Kong':    { climate:'Subtropical / Humid', religion:'Buddhism / Taoism (35%), Christianity (11%)', hdi:'high', dishes:['Char siu','Egg tarts','Wonton noodles'], athletes:['Lee Lai-shan (windsurfing)','Edgar Cheung (fencing)'], landlocked:false },
  Hungary:        { climate:'Continental / Temperate', religion:'Roman Catholic (37%)', hdi:'high',   dishes:['Gulyás','Lángos','Dobos torte'],   athletes:['Katinka Hosszú (swimming)','László Papp (boxing)'], landlocked:true  },

  // ── I ──────────────────────────────────────────────────────────────────
  Iceland:        { climate:'Subarctic / Oceanic', religion:'Lutheran (67%)', hdi:'high',   dishes:['Skyr','Plokkfiskur','Harðfiskur'],  athletes:['Magnús Ver Magnússon (strongman)','Guðmundur Guðmundsson (handball)'], landlocked:false },
  India:          { climate:'Tropical / Semi-arid / Alpine', religion:'Hinduism (80%), Islam (14%)', hdi:'medium', dishes:['Biryani','Masala dosa','Butter chicken'], athletes:['Sachin Tendulkar (cricket)','P.V. Sindhu (badminton)'], landlocked:false },
  Indonesia:      { climate:'Tropical Rainforest', religion:'Islam (87%)', hdi:'medium', dishes:['Satay','Gado-gado','Rendang'],       athletes:['Kevin/Marcus Fernaldi Gideon (badminton)','Rudy Hartono'], landlocked:false },
  Iran:           { climate:'Arid / Semi-arid / Alpine', religion:'Islam (99%)', hdi:'medium', dishes:['Ghormeh sabzi','Fesenjan','Mirza Ghasemi'], athletes:['Ali Daei (football)','Hossein Rezazadeh (weightlifting)'], landlocked:false },
  Iraq:           { climate:'Arid / Desert', religion:'Islam (99%)', hdi:'medium', dishes:['Masgouf','Tashreeb','Kleicha'],      athletes:['Younis Mahmoud (football)'], landlocked:false },
  Ireland:        { climate:'Oceanic / Temperate', religion:'Roman Catholic (78%)', hdi:'high',   dishes:['Irish stew','Colcannon','Boxty'],    athletes:['Sonia O\'Sullivan (athletics)','Katie Taylor (boxing)'], landlocked:false },
  Israel:         { climate:'Mediterranean / Desert', religion:'Judaism (75%), Islam (18%)', hdi:'high', dishes:['Falafel','Shakshuka','Sabich'], athletes:['Gal Fridman (sailing)','Yael Arad (judo)'], landlocked:false },
  Italy:          { climate:'Mediterranean / Alpine', religion:'Roman Catholic (74%)', hdi:'high',   dishes:['Pizza Margherita','Risotto','Tiramisu'], athletes:['Roberto Baggio (football)','Valentino Rossi (motorsport)'], landlocked:false },

  // ── J ──────────────────────────────────────────────────────────────────
  Jamaica:        { climate:'Tropical', religion:'Protestant (64%)', hdi:'medium', dishes:['Jerk chicken','Ackee & saltfish','Bammy'], athletes:['Usain Bolt','Merlene Ottey'], landlocked:false },
  Japan:          { climate:'Temperate / Subtropical', religion:'Shintoism & Buddhism (84%)', hdi:'high', dishes:['Ramen','Sushi','Tempura'], athletes:['Naomi Osaka (tennis)','Shohei Ohtani (baseball)'], landlocked:false },
  Jordan:         { climate:'Mediterranean / Desert', religion:'Islam (97%)', hdi:'high',   dishes:['Mansaf','Musakhan','Knafeh'],      athletes:['Ahmad Abu Ghosh (taekwondo)'], landlocked:false },

  // ── K ──────────────────────────────────────────────────────────────────
  Kazakhstan:     { climate:'Continental / Steppe', religion:'Islam (70%), Christianity (26%)', hdi:'high', dishes:['Beshbarmak','Kuyrdak','Shubat'], athletes:['Gennady Golovkin (boxing)','Olga Rypakova (triple jump)'], landlocked:true },
  Kenya:          { climate:'Tropical / Semi-arid', religion:'Christianity (85%)', hdi:'medium', dishes:['Ugali','Nyama choma','Sukuma wiki'], athletes:['Eliud Kipchoge (marathon)','Catherine Ndereba'], landlocked:false },
  Kiribati:       { climate:'Tropical Marine', religion:'Roman Catholic (57%)', hdi:'medium', dishes:['Te bua','Palusami','Fresh coconut'], athletes:['David Katoatau (weightlifting)'], landlocked:false },
  Kosovo:         { climate:'Continental', religion:'Islam (96%)', hdi:'medium', dishes:['Flija','Tarator','Burek'],         athletes:['Distria Krasniqi (judo)','Majlinda Kelmendi (judo)'], landlocked:true  },
  Kuwait:         { climate:'Desert / Arid', religion:'Islam (76%)', hdi:'high',   dishes:['Machboos','Gabout','Jiris'],       athletes:['Fehaid Al-Deehani (shooting)'], landlocked:false },
  Kyrgyzstan:     { climate:'Continental / Alpine', religion:'Islam (88%)', hdi:'medium', dishes:['Beshbarmak','Samsa','Kuymak'],     athletes:['Rahmatulla Sobirov (judo)'], landlocked:true  },

  // ── L ──────────────────────────────────────────────────────────────────
  Laos:           { climate:'Tropical Monsoon', religion:'Buddhism (65%)', hdi:'medium', dishes:['Larb','Khao niaw','Or lam'],       athletes:['Keo Phongsamouth (athletics)'], landlocked:true  },
  Latvia:         { climate:'Temperate / Oceanic', religion:'Lutheran (34%), Orthodox (19%)', hdi:'high', dishes:['Rupjmaize','Grey peas','Rye bread soup'], athletes:['Igors Vihrovs (gymnastics)','Mārtiņš Rubenis (luge)'], landlocked:false },
  Lebanon:        { climate:'Mediterranean', religion:'Islam (61%), Christianity (33%)', hdi:'high', dishes:['Tabbouleh','Kibbeh','Hummus'], athletes:['Hadi Srour (athletics)'], landlocked:false },
  Lesotho:        { climate:'Highland / Semi-arid', religion:'Christianity (80%)', hdi:'medium', dishes:['Papa','Liphutse','Moroho'],       athletes:['Retselisitsoe Mopeli (cycling)'], landlocked:true  },
  Liberia:        { climate:'Tropical', religion:'Christianity (86%)', hdi:'low',    dishes:['Jollof rice','Palm butter soup','Goat soup'], athletes:['George Weah (football)'], landlocked:false },
  Libya:          { climate:'Desert / Arid', religion:'Islam (97%)', hdi:'medium', dishes:['Bazeen','Sharba','Usban'],         athletes:['Nassim Abderrahim (athletics)'], landlocked:false },
  Liechtenstein:  { climate:'Alpine', religion:'Roman Catholic (73%)', hdi:'high',   dishes:['Käseknöpfle','Ribel','Hafalaab'],   athletes:['Marco Büchel (skiing)'], landlocked:true  },
  Lithuania:      { climate:'Temperate / Continental', religion:'Roman Catholic (77%)', hdi:'high', dishes:['Cepelinai','Šaltibarščiai','Žemaitiška duona'], athletes:['Žydrūnas Savickas (strongman)','Arvydas Sabonis (basketball)'], landlocked:false },
  Luxembourg:     { climate:'Temperate / Oceanic', religion:'Roman Catholic (70%)', hdi:'high',   dishes:['Judd mat Gaardebounen','Gromperekichelcher','Rieslingspaschtéit'], athletes:['Josy Barthel (athletics)'], landlocked:true  },

  // ── M ──────────────────────────────────────────────────────────────────
  Madagascar:     { climate:'Tropical / Semi-arid', religion:'Christianity (41%), traditional (52%)', hdi:'low', dishes:['Romazava','Ravitoto','Mofo gasy'], athletes:['Lalao Ratsimba (athletics)'], landlocked:false },
  Malawi:         { climate:'Tropical / Subtropical', religion:'Christianity (83%)', hdi:'low',    dishes:['Nsima','Chambo','Ndiwo'],          athletes:['Chikondi Gondwe (football)'], landlocked:true  },
  Malaysia:       { climate:'Tropical Rainforest', religion:'Islam (63%)', hdi:'high',   dishes:['Nasi lemak','Char kway teow','Laksa'], athletes:['Lee Chong Wei (badminton)','Nicol Ann David (squash)'], landlocked:false },
  Maldives:       { climate:'Tropical Marine', religion:'Islam (100%)', hdi:'high',   dishes:['Mas huni','Garudhiya','Bis keemiya'], athletes:['Aminath Shauna (swimming)'], landlocked:false },
  Malta:          { climate:'Mediterranean', religion:'Roman Catholic (90%)', hdi:'high',   dishes:['Fenek moqli','Pastizzi','Bragioli'],  athletes:['Neil Agius (marathon swimming)'], landlocked:false },
  'Marshall Islands': { climate:'Tropical Marine', religion:'Protestant (55%)', hdi:'medium', dishes:['Breadfruit','Pandanus','Coconut crab'], athletes:['James Yaingeluo (swimming)'], landlocked:false },
  Mauritania:     { climate:'Arid / Desert', religion:'Islam (100%)', hdi:'low',    dishes:['Thiéboudienne','Méchoui','Assida'],  athletes:['Mokhtar Bah (athletics)'], landlocked:false },
  Mauritius:      { climate:'Subtropical', religion:'Hinduism (48%), Christianity (32%)', hdi:'high', dishes:['Dholl puri','Biryani','Alouda'], athletes:['Bruno Julie (boxing)'], landlocked:false },
  Mexico:         { climate:'Tropical / Semi-arid', religion:'Roman Catholic (78%)', hdi:'high',   dishes:['Tacos al pastor','Pozole','Mole'],  athletes:['Hugo Sánchez (football)','Ana Guevara (athletics)'], landlocked:false },
  Micronesia:     { climate:'Tropical Marine', religion:'Roman Catholic (50%)', hdi:'medium', dishes:['Pounded breadfruit','Taro','Sakau'],  athletes:['Kaino Perez (athletics)'], landlocked:false },
  Moldova:        { climate:'Continental / Temperate', religion:'Orthodox Christianity (90%)', hdi:'medium', dishes:['Mămăligă','Sarmale','Zeamă'], athletes:['Nicolae Juravschi (canoe)'], landlocked:true  },
  Monaco:         { climate:'Mediterranean', religion:'Roman Catholic (86%)', hdi:'high',   dishes:['Barbagiuan','Stocafi','Fougasse'],  athletes:['Stéphane Diagana (athletics, Franco-Monégasque)'], landlocked:false },
  Mongolia:       { climate:'Continental / Steppe', religion:'Buddhism (53%), Islam (3%)', hdi:'medium', dishes:['Khorkhog','Tsuivan','Aaruul'], athletes:['Naidan Tuvshinbayar (judo)','Tsend-Ochir Naidan'], landlocked:true  },
  Montenegro:     { climate:'Mediterranean / Continental', religion:'Orthodox Christianity (72%)', hdi:'high', dishes:['Kačamak','Njeguški pršut','Priganice'], athletes:['Nikola Jokić (basketball)'], landlocked:false },
  Morocco:        { climate:'Mediterranean / Arid', religion:'Islam (99%)', hdi:'medium', dishes:['Harira','Pastilla','Mechoui'],     athletes:['Hicham El Guerrouj (athletics)','Nawal El Moutawakel'], landlocked:false },
  Mozambique:     { climate:'Tropical / Subtropical', religion:'Christianity (57%), Islam (18%)', hdi:'low', dishes:['Piri piri chicken','Matapa','Camarão grelhado'], athletes:['Maria Mutola (athletics)'], landlocked:false },
  Myanmar:        { climate:'Tropical Monsoon', religion:'Buddhism (88%)', hdi:'medium', dishes:['Mohinga','Tea leaf salad','Shan noodles'], athletes:['Thway Thit (boxing)'], landlocked:false },

  // ── N ──────────────────────────────────────────────────────────────────
  Namibia:        { climate:'Arid / Semi-arid', religion:'Christianity (80%)', hdi:'medium', dishes:['Potjiekos','Kapana','Biltong'],     athletes:['Frankie Fredericks (sprinting)'], landlocked:false },
  Nauru:          { climate:'Tropical', religion:'Protestant (60%)', hdi:'medium', dishes:['Coconut crab','Banana bread','Nauruan pancakes'], athletes:['Marcus Stephen (weightlifting)'], landlocked:false },
  Nepal:          { climate:'Alpine / Subtropical', religion:'Hinduism (81%), Buddhism (9%)', hdi:'medium', dishes:['Momo','Dal bhat','Gundruk'], athletes:['Nirmal Purja (mountaineering)','Srijana Rai (athletics)'], landlocked:true  },
  Netherlands:    { climate:'Oceanic / Temperate', religion:'Non-religious (51%)', hdi:'high',   dishes:['Stroopwafel','Stamppot','Bitterballen'], athletes:['Johan Cruyff (football)','Sifan Hassan (athletics)'], landlocked:false },
  'New Zealand':  { climate:'Oceanic / Temperate', religion:'Non-religious (49%)', hdi:'high',   dishes:['Hangi','Pavlova','Pies & chips'],   athletes:['Richie McCaw (rugby)','Lydia Ko (golf)'], landlocked:false },
  Nicaragua:      { climate:'Tropical / Subtropical', religion:'Roman Catholic (50%), Evangelical (33%)', hdi:'medium', dishes:['Gallo pinto','Nacatamal','Vigorón'], athletes:['Alexis Argüello (boxing)'], landlocked:false },
  Niger:          { climate:'Arid / Desert', religion:'Islam (99%)', hdi:'low',    dishes:['Dambou','Tuo zaafi','Kilishi'],    athletes:['Issaka Dabore (boxing)'], landlocked:true  },
  Nigeria:        { climate:'Tropical / Savanna', religion:'Islam (53%), Christianity (45%)', hdi:'medium', dishes:['Egusi soup','Suya','Jollof rice'], athletes:['Chioma Ajunwa (athletics)','Nwankwo Kanu (football)'], landlocked:false },
  'North Korea':  { climate:'Continental / Temperate', religion:'Non-religious / state atheism', hdi:'medium', dishes:['Cold noodles','Kimchi','Rice cake'], athletes:['Om Yun Chol (weightlifting)','An Hyang Mi (marathon)'], landlocked:false },
  'Northern Ireland': { climate:'Oceanic / Temperate', religion:'Protestantism (42%), Roman Catholic (41%)', hdi:'high', dishes:['Soda bread','Champ','Boxty'], athletes:['Rory McIlroy (golf)','George Best (football)'], landlocked:false },
  'North Macedonia': { climate:'Continental / Mediterranean', religion:'Orthodox Christianity (65%)', hdi:'high', dishes:['Tavče gravče','Turli tava','Ajvar'], athletes:['Stevo Teodosievski (wrestling)'], landlocked:true },
  Norway:         { climate:'Subarctic / Oceanic', religion:'Lutheran (68%)', hdi:'high',   dishes:['Fårikål','Lutefisk','Rakfisk'],    athletes:['Ole Gunnar Solskjær (football)','Marit Bjørgen (skiing)'], landlocked:false },

  // ── O ──────────────────────────────────────────────────────────────────
  Oman:           { climate:'Arid / Desert', religion:'Islam (86%)', hdi:'high',   dishes:['Shuwa','Mashuai','Harees'],        athletes:['Barakat Al Harthi (athletics)'], landlocked:false },

  // ── P ──────────────────────────────────────────────────────────────────
  Pakistan:       { climate:'Arid / Semi-arid / Alpine', religion:'Islam (97%)', hdi:'medium', dishes:['Nihari','Biryani','Haleem'],       athletes:['Imran Khan (cricket)','Jahangir Khan (squash)'], landlocked:false },
  Palestine:      { climate:'Mediterranean / Arid', religion:'Islam (85%), Christianity (8%)', hdi:'medium', dishes:['Musakhan','Maqluba','Knafeh'], athletes:['Nader Al-Masri (athletics)'], landlocked:false },
  Panama:         { climate:'Tropical', religion:'Roman Catholic (63%)', hdi:'high',   dishes:['Sancocho','Ropa vieja','Ceviche'],  athletes:['Mariano Rivera (baseball)','Roberto Durán (boxing)'], landlocked:false },
  'Papua New Guinea': { climate:'Tropical Rainforest', religion:'Christianity (96%)', hdi:'medium', dishes:['Mumu','Sago','Kau kau'], athletes:['Dika Toua (weightlifting)'], landlocked:false },
  Paraguay:       { climate:'Subtropical / Tropical', religion:'Roman Catholic (89%)', hdi:'medium', dishes:['Sopa paraguaya','Chipa','Bori bori'], athletes:['Roque Santa Cruz (football)'], landlocked:true  },
  Peru:           { climate:'Tropical / Arid / Alpine', religion:'Roman Catholic (76%)', hdi:'high',   dishes:['Lomo saltado','Ceviche (varied)','Anticucho'], athletes:['Teófilo Cubillas (football)','Óscar del Portal (athletics)'], landlocked:false },
  Philippines:    { climate:'Tropical Marine', religion:'Roman Catholic (80%)', hdi:'medium', dishes:['Lechón','Pancit','Halo-halo'],     athletes:['Manny Pacquiao (boxing)','Carlos Yulo (gymnastics)'], landlocked:false },
  Poland:         { climate:'Temperate / Continental', religion:'Roman Catholic (85%)', hdi:'high',   dishes:['Pierogi','Żurek','Bigos'],         athletes:['Robert Lewandowski (football)','Irena Szewińska (athletics)'], landlocked:false },
  Portugal:       { climate:'Mediterranean / Oceanic', religion:'Roman Catholic (85%)', hdi:'high',   dishes:['Bacalhau','Pastéis de nata','Caldo verde'], athletes:['Cristiano Ronaldo (football)','Eusébio'], landlocked:false },
  'Puerto Rico':  { climate:'Tropical / Maritime', religion:'Roman Catholic (56%), Evangelical (33%)', hdi:'high', dishes:['Lechón asado','Arroz con gandules','Tembleque'], athletes:['Roberto Clemente (baseball)','Gigi Fernández (tennis)'], landlocked:false },

  // ── Q ──────────────────────────────────────────────────────────────────
  Qatar:          { climate:'Desert / Arid', religion:'Islam (67%)', hdi:'high',   dishes:['Machboos','Thareed','Harees'],     athletes:['Mutaz Essa Barshim (high jump)'], landlocked:false },

  // ── R ──────────────────────────────────────────────────────────────────
  'Republic of the Congo': { climate:'Tropical Rainforest', religion:'Christianity (85%)', hdi:'medium', dishes:['Ndolé','Moamba de galinha','Saka-saka'], athletes:['Lacina Traoré (football)'], landlocked:false },
  Romania:        { climate:'Continental / Temperate', religion:'Orthodox Christianity (81%)', hdi:'high', dishes:['Mămăligă','Sarmale','Mici'], athletes:['Nadia Comăneci (gymnastics)','Gheorghe Hagi (football)'], landlocked:false },
  Russia:         { climate:'Continental / Subarctic', religion:'Orthodox Christianity (41%)', hdi:'high',   dishes:['Pelmeni','Borsch','Beef Stroganoff'], athletes:['Irina Rodnina (skating)','Andrei Arshavin (football)'], landlocked:false },
  Rwanda:         { climate:'Tropical Highland', religion:'Roman Catholic (49%), Protestant (39%)', hdi:'medium', dishes:['Ugali','Isombe','Inyama'], athletes:['Adrien Niyonshuti (cycling)'], landlocked:true  },

  // ── S ──────────────────────────────────────────────────────────────────
  'Saint Lucia':  { climate:'Tropical', religion:'Roman Catholic (62%)', hdi:'high',   dishes:['Green fig & saltfish','Callaloo soup','Accra'], athletes:['Mary Elizabeth Donat (athletics)'], landlocked:false },
  Samoa:          { climate:'Tropical', religion:'Christian (98%)', hdi:'medium', dishes:['Palusami','Umu','Koko alaisa'],    athletes:['Peter Fatialofa (rugby)','Aukuso Tuilagi (rugby)'], landlocked:false },
  'San Marino':   { climate:'Mediterranean / Alpine', religion:'Roman Catholic (97%)', hdi:'high', dishes:['Torta tre monti','Piadina','Fagioli con le cotiche'], athletes:['Alex Zanardi (hand-cycling, Italian-San Marinese)'], landlocked:true },
  'Saudi Arabia': { climate:'Desert / Arid', religion:'Islam (97%)', hdi:'high',   dishes:['Kabsa','Jareesh','Saleeg'],       athletes:['Sami Al-Jaber (football)'], landlocked:false },
  Scotland:       { climate:'Oceanic / Subarctic', religion:'Non-religious (52%), Church of Scotland (24%)', hdi:'high', dishes:['Cullen Skink','Cranachan','Cock-a-leekie'], athletes:['Andy Murray (tennis)','Kenny Dalglish (football)'], landlocked:false },
  Senegal:        { climate:'Semi-arid / Tropical', religion:'Islam (97%)', hdi:'medium', dishes:['Yassa','Mafé','Ceebu jën'],        athletes:['Sadio Mané (football)','Amadou Dia Bâ (hurdles)'], landlocked:false },
  Serbia:         { climate:'Continental / Temperate', religion:'Orthodox Christianity (85%)', hdi:'high', dishes:['Ćevapi','Ajvar','Sarma'], athletes:['Novak Djokovic (tennis)','Nikola Jokić (basketball)'], landlocked:false },
  Seychelles:     { climate:'Tropical Marine', religion:'Roman Catholic (76%)', hdi:'high',   dishes:['Kari koko','Ladob','Bourzwa fish'], athletes:['Brandon Gomez (swimming)'], landlocked:false },
  'Sierra Leone': { climate:'Tropical', religion:'Islam (78%), Christianity (21%)', hdi:'low', dishes:['Cassava leaf stew','Groundnut soup','Fufu'], athletes:['Emile Heskey (football, roots)'], landlocked:false },
  Singapore:      { climate:'Tropical Rainforest', religion:'Buddhism (31%), Christianity (19%)', hdi:'high', dishes:['Hainanese chicken rice','Laksa','Char kway teow'], athletes:['Joseph Schooling (swimming)','Feng Tianwei (table tennis)'], landlocked:false },
  Slovakia:       { climate:'Continental / Alpine', religion:'Roman Catholic (55%)', hdi:'high',   dishes:['Bryndzové halušky','Kapustnica','Šúľance'], athletes:['Martina Hingis (tennis, Swiss-Slovak)','Peter Sagan (cycling)'], landlocked:true },
  Slovenia:       { climate:'Alpine / Continental', religion:'Roman Catholic (58%)', hdi:'high',   dishes:['Idrijski žlikrofi','Potica','Prekmurska gibanica'], athletes:['Primož Roglič (cycling)','Tina Maze (skiing)'], landlocked:false },
  'Solomon Islands': { climate:'Tropical Rainforest', religion:'Christianity (97%)', hdi:'medium', dishes:['Ngali nut','Poi','Kumu'], athletes:['Rex Peki (athletics)'], landlocked:false },
  Somalia:        { climate:'Arid / Semi-arid', religion:'Islam (100%)', hdi:'low',    dishes:['Bariis iskukaris','Suqaar','Maraq'], athletes:['Mo Farah (athletics, British-Somali)'], landlocked:false },
  'South Africa': { climate:'Semi-arid / Mediterranean / Subtropical', religion:'Christianity (85%)', hdi:'medium', dishes:['Braai','Bunny chow','Bobotie'], athletes:['Oscar Pistorius','Caster Semenya'], landlocked:false },
  'South Korea':  { climate:'Temperate / Continental', religion:'Non-religious (60%), Christianity (29%)', hdi:'high', dishes:['Bibimbap','Tteokbokki','Korean BBQ'], athletes:['Kim Yuna (figure skating)','Park Tae-hwan (swimming)'], landlocked:false },
  'South Sudan':  { climate:'Tropical / Savanna', religion:'Christianity (60%), traditional (33%)', hdi:'low', dishes:['Asida','Ful','Kisra'], athletes:['Guor Marial (marathon)'], landlocked:true },
  Spain:          { climate:'Mediterranean / Semi-arid', religion:'Roman Catholic (58%)', hdi:'high',   dishes:['Paella','Gazpacho','Tortilla española'], athletes:['Rafael Nadal (tennis)','Fernando Alonso (motorsport)'], landlocked:false },
  'Sri Lanka':    { climate:'Tropical', religion:'Buddhism (70%), Hinduism (13%)', hdi:'medium', dishes:['Kottu roti','String hoppers','Pol sambol'], athletes:['Muttiah Muralitharan (cricket)','Susanthika Jayasinghe (athletics)'], landlocked:false },
  Sudan:          { climate:'Arid / Desert', religion:'Islam (97%)', hdi:'low',    dishes:['Ful medames','Asida','Kisra'],      athletes:['Mona Selim (athletics)'], landlocked:false },
  Suriname:       { climate:'Tropical Rainforest', religion:'Hinduism (27%), Islam (20%), Christianity (26%)', hdi:'medium', dishes:['Pom','Roti','Moksi-alesi'], athletes:['Churandy Martina (athletics)','Anthony Nesty (swimming)'], landlocked:false },
  Sweden:         { climate:'Subarctic / Temperate', religion:'Lutheran (57%)', hdi:'high',   dishes:['Köttbullar','Gravlax','Raggmunk'],  athletes:['Zlatan Ibrahimović (football)','Björn Borg (tennis)'], landlocked:false },
  Switzerland:    { climate:'Alpine / Temperate', religion:'Roman Catholic (35%), Reformed (23%)', hdi:'high', dishes:['Rösti','Raclette','Zürcher Geschnetzeltes'], athletes:['Roger Federer (tennis)','Didier Cuche (skiing)'], landlocked:true },
  Syria:          { climate:'Mediterranean / Arid', religion:'Islam (87%), Christianity (10%)', hdi:'medium', dishes:['Kibbeh','Hummus & falafel','Shawarma'], athletes:['Ghada Shouaa (heptathlon)'], landlocked:false },
  'São Tomé and Príncipe': { climate:'Tropical', religion:'Roman Catholic (55%)', hdi:'medium', dishes:['Calulu','Banana pão','Izaquente'], athletes:['Nenito Lopes (athletics)'], landlocked:false },

  // ── T ──────────────────────────────────────────────────────────────────
  Tajikistan:     { climate:'Continental / Alpine', religion:'Islam (98%)', hdi:'medium', dishes:['Osh','Qurutob','Samosa'],          athletes:['Mavzuna Chorieva (boxing)'], landlocked:true  },
  Taiwan:         { climate:'Subtropical / Tropical', religion:'Buddhism / Taoism (35%), Christianity (4%)', hdi:'high', dishes:['Scallion pancake','Oyster vermicelli','Braised pork rice'], athletes:['Chien-Ming Wang (baseball)','Tai Tzu-ying (badminton)'], landlocked:false },
  Tanzania:       { climate:'Tropical / Semi-arid', religion:'Christianity (61%), Islam (35%)', hdi:'medium', dishes:['Ugali','Nyama choma','Zanzibar pizza'], athletes:['Filbert Bayi (athletics)','Naseeb William Juma (marathon)'], landlocked:false },
  Thailand:       { climate:'Tropical Monsoon', religion:'Buddhism (94%)', hdi:'high',   dishes:['Pad thai','Tom yum','Green curry'],  athletes:['Somrak Khamsing (boxing)','Yothin Thungpun (snooker)'], landlocked:false },
  'Timor-Leste':  { climate:'Tropical', religion:'Roman Catholic (98%)', hdi:'medium', dishes:['Ikan sabuko','Batar daan','Budu'],  athletes:['Viktor Ramos (football)'], landlocked:false },
  Togo:           { climate:'Tropical', religion:'Christianity (43%), Islam (14%), traditional (36%)', hdi:'low', dishes:['Fufu','Gboma dessi','Akpan'], athletes:['Benjamin Boukpeti (canoe slalom)'], landlocked:false },
  Tonga:          { climate:'Tropical', religion:'Protestant (64%)', hdi:'medium', dishes:['Lu pulu','Ota ika','Umu'],            athletes:['Pita Taufatofua (ski/canoe)','Siua Taufa (boxing)'], landlocked:false },
  'Trinidad and Tobago': { climate:'Tropical', religion:'Roman Catholic (21%), Hindu (18%), Anglican (12%)', hdi:'high', dishes:['Doubles','Roti','Pelau'], athletes:['Brian Lara (cricket)','Ato Boldon (athletics)'], landlocked:false },
  Tunisia:        { climate:'Mediterranean / Arid', religion:'Islam (99%)', hdi:'medium', dishes:['Lablabi','Brik','Couscous royale'], athletes:['Habiba Ghribi (athletics)','Oussama Mellouli (swimming)'], landlocked:false },
  Turkey:         { climate:'Mediterranean / Continental', religion:'Islam (98%)', hdi:'high',   dishes:['Kebab','Baklava','Manti'],         athletes:['Hasan Şaş (football)','Naim Süleymanoğlu (weightlifting)'], landlocked:false },
  Turkmenistan:   { climate:'Arid / Desert', religion:'Islam (93%)', hdi:'medium', dishes:['Plov','Shorba','Dograma'],         athletes:['Serdar Berdimuhamedow (athletics)'], landlocked:true  },
  Tuvalu:         { climate:'Tropical Marine', religion:'Protestant (92%)', hdi:'medium', dishes:['Pulaka','Te wa','Coconut-based dishes'], athletes:['Kelesoma Situasini (weightlifting)'], landlocked:false },

  // ── U ──────────────────────────────────────────────────────────────────
  Uganda:         { climate:'Tropical / Highland', religion:'Christianity (85%)', hdi:'low',    dishes:['Matoke','Rolex','Groundnut stew'],  athletes:['John Akii-Bua (hurdles)','Joshua Cheptegei (athletics)'], landlocked:true  },
  Ukraine:        { climate:'Continental / Temperate', religion:'Orthodox Christianity (73%)', hdi:'high', dishes:['Borscht','Varenyky','Holubtsi'], athletes:['Vasyl Lomachenko (boxing)','Serhiy Bubka (pole vault)'], landlocked:false },
  'United Arab Emirates': { climate:'Desert / Arid', religion:'Islam (76%)', hdi:'high', dishes:['Harees','Machboos','Luqaimat'], athletes:['Ahmad Abughaush (taekwondo)'], landlocked:false },
  'United States of America': { climate:'Varied — Tropical to Arctic', religion:'Christianity (65%)', hdi:'high', dishes:['Hamburger','BBQ ribs','Apple pie'], athletes:['Muhammad Ali (boxing)','Serena Williams (tennis)'], landlocked:false },
  Uruguay:        { climate:'Temperate', religion:'Non-religious (47%), Roman Catholic (41%)', hdi:'high', dishes:['Chivito','Asado','Torta frita'], athletes:['Luis Suárez (football)','Diego Forlán (football)'], landlocked:false },
  Uzbekistan:     { climate:'Continental / Arid', religion:'Islam (88%)', hdi:'medium', dishes:['Plov','Lagman','Samsa'],           athletes:['Artur Taymazov (wrestling)','Abbos Atoev (wrestling)'], landlocked:true  },

  // ── V ──────────────────────────────────────────────────────────────────
  Vanuatu:        { climate:'Tropical Marine', religion:'Christianity (93%)', hdi:'medium', dishes:['Lap lap','Tuluk','Simboro'],       athletes:['Riilio Rii (sprinting)'], landlocked:false },
  Venezuela:      { climate:'Tropical / Alpine', religion:'Roman Catholic (72%)', hdi:'medium', dishes:['Arepas','Pabellón criollo','Hallacas'], athletes:['Alejandro Navas (athletics)','Pastor Maldonado (motorsport)'], landlocked:false },
  Vietnam:        { climate:'Tropical Monsoon', religion:'Buddhism (16%), non-religious (74%)', hdi:'medium', dishes:['Phở','Bánh mì','Gỏi cuốn'],   athletes:['Thạch Kim Tuấn (weightlifting)','Nguyễn Tiến Minh (badminton)'], landlocked:false },
  Wales:          { climate:'Oceanic / Temperate', religion:'Non-religious (58%), Christianity (33%)', hdi:'high', dishes:['Welsh Rarebit','Glamorgan Sausage','Bara Brith'], athletes:['Gareth Bale (football)','JPR Williams (rugby)'], landlocked:false },

  // ── Y ──────────────────────────────────────────────────────────────────
  Yemen:          { climate:'Arid / Desert', religion:'Islam (99%)', hdi:'low',    dishes:['Saltah','Fahsa','Bint al-sahn'],   athletes:['Hafedh Abdulrahman (athletics)'], landlocked:false },

  // ── Z ──────────────────────────────────────────────────────────────────
  Zambia:         { climate:'Tropical / Subtropical', religion:'Christianity (95%)', hdi:'medium', dishes:['Nshima','Ifisashi','Chikanda'],    athletes:['Samuel Matete (hurdles)','Kennedy Kachali (athletics)'], landlocked:true  },
  Zimbabwe:       { climate:'Subtropical / Semi-arid', religion:'Christianity (87%)', hdi:'medium', dishes:['Sadza','Muriwo unedovi','Nyama'], athletes:['Kirsty Coventry (swimming)'], landlocked:true  },
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const lang = detectLang(Astro2.request.headers.get("accept-language") ?? "en");
  const t = getT(lang);
  const tr = (r) => translateRegion(r, lang);
  let countryVibes = COUNTRY_VIBES;
  let countryDataSrc = COUNTRY_DATA;
  let countryInsights = COUNTRY_INSIGHTS;
  if (lang === "fr") {
    const fr = await import('../../chunks/countryData.fr_cY2axPH-.mjs');
    countryVibes = fr.COUNTRY_VIBES;
    countryDataSrc = fr.COUNTRY_DATA;
    countryInsights = fr.COUNTRY_INSIGHTS;
  }
  function buildCountryFromLocal(name) {
    const local = countryDataSrc[name] || {};
    return {
      name,
      officialName: name,
      slug: slugify(name),
      cca2: "",
      flag: local.flag || "\u{1F30D}",
      capital: local.capital || "\u2014",
      population: local.population || "\u2014",
      populationRaw: 0,
      language: local.language || "\u2014",
      sport: local.sport || "\u2014",
      fact: local.fact || "",
      vibe: countryVibes[name] || "Fascinating \xB7 Historic \xB7 Unique",
      area: "\u2014",
      areaRaw: 0,
      region: COUNTRY_REGION[name] || "",
      subregion: "",
      latlng: [0, 0],
      currency: "\u2014",
      timezone: "\u2014",
      callingCode: "\u2014",
      drivingSide: "\u2014",
      dish: COUNTRY_DISHES[name] || null,
      peak: COUNTRY_PEAKS[name] || null,
      cities: COUNTRY_CITIES[name] || [],
      insights: countryInsights[name] || {},
      borderCountries: [],
      neighborSlugs: []
    };
  }
  const { slug } = Astro2.params;
  const vsIdx = slug.indexOf("-vs-");
  if (vsIdx === -1) return Astro2.redirect("/");
  const slugA = slug.slice(0, vsIdx);
  const slugB = slug.slice(vsIdx + 4);
  const findCountry = (s) => {
    const name = Object.keys(countryDataSrc).find((k) => slugify(k) === s);
    if (!name) return null;
    return buildCountryFromLocal(name);
  };
  const countryA = findCountry(slugA);
  const countryB = findCountry(slugB);
  if (!countryA || !countryB) return Astro2.redirect("/");
  countryA.insights;
  countryB.insights;
  const REGION_ACCENT = {
    Europe: "#5b8fff",
    Asia: "#ff7043",
    Africa: "#ffb74d",
    Americas: "#69d89a",
    Oceania: "#26c6da",
    Antarctic: "#b0c4de"
  };
  const regionA = countryA.region || COUNTRY_REGION[countryA.name] || "";
  const regionB = countryB.region || COUNTRY_REGION[countryB.name] || "";
  const accentA = REGION_ACCENT[regionA] || "#667eea";
  const accentBRaw = REGION_ACCENT[regionB] || "#f093fb";
  const ACCENT_CONTRAST = {
    "#5b8fff": "#ff7043",
    "#ff7043": "#5b8fff",
    "#ffb74d": "#26c6da",
    "#26c6da": "#ffb74d",
    "#69d89a": "#ff7043",
    "#667eea": "#f093fb",
    "#f093fb": "#667eea"
  };
  const accentB = accentA === accentBRaw ? ACCENT_CONTRAST[accentA] ?? "#f093fb" : accentBRaw;
  const labelA = tr(countryA.subregion || regionA);
  const labelB = tr(countryB.subregion || regionB);
  const SCORE_OVERRIDES = {
    France: { food: 5, culture: 5, tourism: 5, budget: 2 },
    Italy: { food: 5, culture: 5, tourism: 5 },
    Japan: { food: 5, culture: 5, langEase: 1, tourism: 5 },
    China: { food: 5, culture: 5, budget: 4 },
    India: { food: 5, culture: 5, budget: 5, nature: 4 },
    Mexico: { food: 5, culture: 4, budget: 4 },
    Thailand: { food: 5, budget: 5, nature: 4, tourism: 4 },
    Vietnam: { food: 4, budget: 5, nature: 4 },
    Spain: { food: 4, culture: 5, tourism: 5 },
    Greece: { culture: 5, food: 4, tourism: 4 },
    Turkey: { culture: 5, food: 4, budget: 4 },
    Morocco: { culture: 4, food: 4, budget: 4, nature: 4 },
    Egypt: { culture: 5, budget: 3 },
    Peru: { culture: 5, nature: 5, food: 5, budget: 4 },
    Brazil: { nature: 5, culture: 3, budget: 3 },
    Argentina: { food: 4, nature: 4, culture: 3 },
    Colombia: { nature: 4, food: 4, budget: 4 },
    "New Zealand": { nature: 5, tourism: 4, budget: 2 },
    Australia: { nature: 5, tourism: 4, budget: 2 },
    Norway: { nature: 5, budget: 1, tourism: 4 },
    Iceland: { nature: 5, budget: 1 },
    Switzerland: { nature: 4, budget: 1, tourism: 5 },
    Germany: { culture: 5, food: 3, tourism: 5 },
    Netherlands: { culture: 4, tourism: 5, langEase: 5 },
    "United Kingdom": { culture: 5, tourism: 5, langEase: 5 },
    "United States": { nature: 4, tourism: 5, langEase: 5, food: 4 },
    Canada: { nature: 5, tourism: 4, langEase: 5 },
    "South Africa": { nature: 5, culture: 3, budget: 4 },
    Kenya: { nature: 5, budget: 3 },
    Ethiopia: { culture: 5, budget: 5, nature: 4 },
    Nigeria: { food: 4, culture: 3, budget: 4 },
    Ghana: { culture: 3, budget: 4, langEase: 5 },
    Indonesia: { nature: 5, food: 4, budget: 4 },
    Nepal: { nature: 5, budget: 5, culture: 4 },
    Iran: { culture: 5, food: 4, budget: 4 },
    Portugal: { food: 4, culture: 4, tourism: 5 },
    "South Korea": { food: 5, culture: 4, tourism: 5 },
    Singapore: { food: 5, tourism: 5, langEase: 5, budget: 2 },
    Jordan: { culture: 5, food: 4, budget: 3 },
    Lebanon: { food: 5, culture: 4, budget: 3 },
    Georgia: { food: 4, culture: 4, budget: 5, nature: 4 },
    Uzbekistan: { culture: 5, budget: 5 },
    "Saudi Arabia": { culture: 3, tourism: 3, budget: 2 }
  };
  function getTravelScores(c) {
    const r = c.region || "";
    const lg = (c.language || "").toLowerCase();
    const pk = c.peak;
    const o = SCORE_OVERRIDES[c.name] || {};
    const ts = TRAVEL_SCORES[c.name] || {};
    const tourism = o.tourism ?? ts.tourism ?? ({ Europe: 5, Americas: 4, Asia: 4, Africa: 3, Oceania: 3 }[r] ?? 3);
    const budget = o.budget ?? ts.budget ?? ({ Africa: 5, Asia: 4, Americas: 3, Europe: 2, Oceania: 3 }[r] ?? 3);
    const nature = o.nature ?? ts.nature ?? (pk ? pk.elevation >= 6e3 ? 5 : pk.elevation >= 3e3 ? 4 : 3 : 3);
    const food = o.food ?? ts.food ?? (c.dish ? 4 : 3);
    const culture = o.culture ?? ts.culture ?? ({ Europe: 4, Asia: 4, Africa: 3, Americas: 3, Oceania: 3 }[r] ?? 3);
    const langEase = o.langEase ?? ts.langEase ?? (lg.includes("english") ? 5 : lg.includes("french") || lg.includes("spanish") || lg.includes("portuguese") || lg.includes("german") || lg.includes("dutch") ? 4 : lg.includes("arabic") || lg.includes("chinese") || lg.includes("japanese") || lg.includes("korean") || lg.includes("thai") ? 2 : 3);
    return { tourism, budget, nature, food, culture, langEase };
  }
  const scoresA = getTravelScores(countryA);
  const scoresB = getTravelScores(countryB);
  const advisoryA = TRAVEL_ADVISORY[countryA.name] ?? null;
  const advisoryB = TRAVEL_ADVISORY[countryB.name] ?? null;
  const dntA = advisoryA === "do-not-travel";
  const dntB = advisoryB === "do-not-travel";
  const hasReconsider = advisoryA === "reconsider" || advisoryB === "reconsider";
  const reconsiderNames = [
    advisoryA === "reconsider" ? countryA.name : null,
    advisoryB === "reconsider" ? countryB.name : null
  ].filter(Boolean);
  const SCORE_META = [
    { key: "tourism", label: t.tourismAccess, icon: "\u2708\uFE0F" },
    { key: "budget", label: t.budgetTravel, icon: "\u{1F4B0}" },
    { key: "nature", label: t.natureOutdoors, icon: "\u{1F3D4}" },
    { key: "food", label: t.foodScene, icon: "\u{1F37D}" },
    { key: "culture", label: t.culturalDepth, icon: "\u{1F3DB}" },
    { key: "langEase", label: t.languageEase, icon: "\u{1F4AC}" }
  ];
  const SCORE_LABELS = {
    tourism: t.scoreTourism,
    budget: t.scoreBudget,
    nature: t.scoreNature,
    food: t.scoreFood,
    culture: t.scoreCulture,
    langEase: t.scoreLangEase
  };
  const topA = Object.entries(scoresA).sort(([, x], [, y]) => y - x)[0][0];
  const topB = Object.entries(scoresB).sort(([, x], [, y]) => y - x)[0][0];
  const top2A = Object.entries(scoresA).sort(([, x], [, y]) => y - x).slice(0, 2).map(([k]) => SCORE_META.find((m) => m.key === k).label);
  const top2B = Object.entries(scoresB).sort(([, x], [, y]) => y - x).slice(0, 2).map(([k]) => SCORE_META.find((m) => m.key === k).label);
  const travelRows = SCORE_META.map((m) => ({
    key: m.key,
    label: m.label,
    icon: m.icon,
    sA: scoresA[m.key] ?? 3,
    sB: scoresB[m.key] ?? 3
  }));
  const exA = COUNTRY_EXTRAS[countryA.name] || {};
  const exB = COUNTRY_EXTRAS[countryB.name] || {};
  function density(pop, area) {
    if (!pop || !area) return "\u2014";
    const d = pop / area;
    return d < 1 ? "<1 /km\xB2" : `${Math.round(d).toLocaleString("en-US")} /km\xB2`;
  }
  function buildEditorial(a, b) {
    const parts = [];
    const vA = a.vibe.split("\xB7").map((s) => s.trim());
    const vB = b.vibe.split("\xB7").map((s) => s.trim());
    if (a.region !== b.region)
      parts.push(`${a.name} ${t.andConj} ${b.name}${t.editOccupyOpposite}${tr(a.region)} ${t.andConj} ${tr(b.region)}${t.editMakingComparison}`);
    else if (a.subregion && b.subregion && a.subregion !== b.subregion)
      parts.push(`${t.editBothSitWithin}${tr(a.region)}${t.editYet}${a.name} (${tr(a.subregion)}) ${t.andConj} ${b.name} (${tr(b.subregion)})${t.editRepresentDistinct}`);
    else
      parts.push(`${a.name} ${t.andConj} ${b.name}${t.editNearNeighboursIn}${tr(a.region)}${t.editButEach}`);
    parts.push(`${a.name} \u2014 ${vA[0]}, ${(vA[1] || "").toLowerCase()}${t.editExcelsIn}${SCORE_LABELS[topA]}.`);
    parts.push(`${b.name} \u2014 ${vB[0]}, ${(vB[1] || "").toLowerCase()}${t.editStrongerPickFor}${SCORE_LABELS[topB]}.`);
    if (a.sport !== "\u2014" && b.sport !== "\u2014" && a.sport !== b.sport)
      parts.push(`${t.editSportsTell}${a.name}${t.editLivesBreathes}${a.sport}${t.editWhile}${b.name}${t.editRalliesAround}${b.sport}.`);
    if (a.dish && b.dish && a.dish !== b.dish)
      parts.push(`${t.editAtTable}${a.dish}${t.editInCountry}${a.name} ${t.andConj} ${b.dish}${t.editInCountry}${b.name}${t.editTwoPlates}`);
    return parts.join(" ");
  }
  const editorial = buildEditorial(countryA, countryB);
  const moreSet = /* @__PURE__ */ new Set();
  const moreComparisons = [];
  const addMore = (a, b) => {
    const key = [a.slug, b.slug].sort().join("::");
    if (!moreSet.has(key) && a.slug !== b.slug) {
      moreSet.add(key);
      moreComparisons.push({ label: `${a.name} vs ${b.name}`, href: `/compare/${a.slug}-vs-${b.slug}/` });
    }
  };
  for (const n of (countryA.borderCountries || []).slice(0, 3)) {
    if (n.slug !== countryB.slug) addMore({ name: countryA.name, slug: countryA.slug }, n);
  }
  for (const n of (countryB.borderCountries || []).slice(0, 3)) {
    if (n.slug !== countryA.slug) addMore({ name: countryB.name, slug: countryB.slug }, n);
  }
  const moreSlice = moreComparisons.slice(0, 4);
  const countriesList = [.../* @__PURE__ */ new Set([
    ...Object.keys(countryDataSrc),
    ...Object.keys(countryVibes)
  ])].sort().map((name) => ({ name, slug: slugify(name) }));
  const siteBase = Astro2.site?.href ?? "https://terralenses.com/";
  const pageUrl = new URL(`compare/${countryA.slug}-vs-${countryB.slug}/`, siteBase).href;
  const title = `${countryA.name} vs ${countryB.name}: Country Comparison \u2014 Facts, Culture & Travel | TerraLenses`;
  const description = `Compare ${countryA.name} and ${countryB.name} side by side: key facts, travel scores, food, culture, sport and nature. Discover the differences and decide where to go next.`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "TerraLenses", "item": siteBase },
          { "@type": "ListItem", "position": 2, "name": "Compare", "item": new URL("compare/", siteBase).href },
          { "@type": "ListItem", "position": 3, "name": `${countryA.name} vs ${countryB.name}`, "item": pageUrl }
        ]
      },
      {
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": pageUrl,
        "about": [{ "@type": "Country", "name": countryA.name }, { "@type": "Country", "name": countryB.name }]
      }
    ]
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "data-astro-cid-bdsczzry": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['   <script type="application/json" id="cmp-countries">', "<\/script> ", '<div class="pg"', ' data-astro-cid-bdsczzry> <!-- \u2500\u2500 Decorative background \u2500\u2500 --> <div class="pg-deco" aria-hidden="true" data-astro-cid-bdsczzry> <div class="pg-ring pg-ring-1" data-astro-cid-bdsczzry></div> <div class="pg-ring pg-ring-2" data-astro-cid-bdsczzry></div> <div class="pg-ring pg-ring-3" data-astro-cid-bdsczzry></div> </div> <div class="pg-wrap" data-astro-cid-bdsczzry> <!-- 1 \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-bdsczzry> <a href="/" data-astro-cid-bdsczzry>', '</a><span aria-hidden="true" data-astro-cid-bdsczzry>\u203A</span> <span data-astro-cid-bdsczzry>', '</span><span aria-hidden="true" data-astro-cid-bdsczzry>\u203A</span> <span data-astro-cid-bdsczzry>', " vs ", "</span> </nav> <!-- \u2500\u2500 Advisory banners \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> ", ' <!-- 2 \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <header class="hero" data-astro-cid-bdsczzry> <div class="hero-globe hero-globe--a" aria-hidden="true" data-astro-cid-bdsczzry></div> <div class="hero-globe hero-globe--b" aria-hidden="true" data-astro-cid-bdsczzry></div> <div class="hero-side hero-side--a" data-astro-cid-bdsczzry> <div class="hero-code" aria-hidden="true" data-astro-cid-bdsczzry>', '</div> <span class="hero-flag" data-astro-cid-bdsczzry>', '</span> <h1 class="hero-name hero-name--a" data-astro-cid-bdsczzry>', '</h1> <p class="hero-vibe" data-astro-cid-bdsczzry>', '</p> <span class="hero-tag"', " data-astro-cid-bdsczzry>", '</span> </div> <div class="hero-vs" aria-hidden="true" data-astro-cid-bdsczzry> <span class="hero-vs-text" data-astro-cid-bdsczzry>VS</span> </div> <div class="hero-side hero-side--b" data-astro-cid-bdsczzry> <div class="hero-code" aria-hidden="true" data-astro-cid-bdsczzry>', '</div> <span class="hero-flag" data-astro-cid-bdsczzry>', '</span> <h1 class="hero-name hero-name--b" data-astro-cid-bdsczzry>', '</h1> <p class="hero-vibe" data-astro-cid-bdsczzry>', '</p> <span class="hero-tag"', " data-astro-cid-bdsczzry>", '</span> </div> </header> <!-- 3 \u2500\u2500 Country switcher \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <div class="switcher" role="search" aria-label="Switch countries" data-astro-cid-bdsczzry> <div class="sw-field" data-astro-cid-bdsczzry> <label class="sw-label" for="sw-a" data-astro-cid-bdsczzry>', '</label> <div class="sw-wrap" data-astro-cid-bdsczzry> <input id="sw-a" type="text" class="sw-input" autocomplete="off" spellcheck="false" data-astro-cid-bdsczzry> <div class="sw-drop" id="sw-drop-a" role="listbox" hidden data-astro-cid-bdsczzry></div> </div> </div> <button class="sw-swap" id="sw-swap" title="Swap" aria-label="Swap countries" data-astro-cid-bdsczzry> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bdsczzry> <path d="M7 16V4m0 0L3 8m4-4l4 4" data-astro-cid-bdsczzry></path><path d="M17 8v12m0 0l4-4m-4 4l-4-4" data-astro-cid-bdsczzry></path> </svg> </button> <div class="sw-field" data-astro-cid-bdsczzry> <label class="sw-label" for="sw-b" data-astro-cid-bdsczzry>', '</label> <div class="sw-wrap" data-astro-cid-bdsczzry> <input id="sw-b" type="text" class="sw-input" autocomplete="off" spellcheck="false" data-astro-cid-bdsczzry> <div class="sw-drop" id="sw-drop-b" role="listbox" hidden data-astro-cid-bdsczzry></div> </div> </div> </div> <!-- 4 \u2500\u2500 Key facts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="facts" data-astro-cid-bdsczzry> <div class="facts-head" data-astro-cid-bdsczzry> <span class="facts-a"', " data-astro-cid-bdsczzry>", " ", '</span> <span class="facts-m" data-astro-cid-bdsczzry></span> <span class="facts-b"', " data-astro-cid-bdsczzry>", " ", "</span> </div> ", " ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- 5 \u2500\u2500 Travel Index \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="ti" data-astro-cid-bdsczzry> <!-- Header row --> <div class="ti-head" data-astro-cid-bdsczzry> <span data-astro-cid-bdsczzry></span> <span class="ti-country-label"', " data-astro-cid-bdsczzry>", " ", '</span> <span class="ti-country-label"', " data-astro-cid-bdsczzry>", " ", "</span> </div> <!-- Score rows \u2014 computed in frontmatter to avoid TS cast issues in JSX --> ", ' </div> <!-- Best for verdict cards --> <div class="ti-verdicts" data-astro-cid-bdsczzry> <div class="ti-verdict"', ' data-astro-cid-bdsczzry> <span class="ti-verdict-flag" data-astro-cid-bdsczzry>', '</span> <div data-astro-cid-bdsczzry> <p class="ti-verdict-kicker" data-astro-cid-bdsczzry>', '</p> <p class="ti-verdict-value" data-astro-cid-bdsczzry>', '</p> </div> </div> <div class="ti-verdict"', ' data-astro-cid-bdsczzry> <span class="ti-verdict-flag" data-astro-cid-bdsczzry>', '</span> <div data-astro-cid-bdsczzry> <p class="ti-verdict-kicker" data-astro-cid-bdsczzry>', '</p> <p class="ti-verdict-value" data-astro-cid-bdsczzry>', '</p> </div> </div> </div> </section> <!-- 6 \u2500\u2500 Geography & Nature \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="duo" data-astro-cid-bdsczzry> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", " ", ' <div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>', '</span><span class="dr-v" data-astro-cid-bdsczzry>', '</span></div> </div> </div> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", " ", ' <div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>', '</span><span class="dr-v" data-astro-cid-bdsczzry>', '</span></div> </div> </div> </div> </section> <!-- 7 \u2500\u2500 People & Culture \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="duo" data-astro-cid-bdsczzry> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", " ", " ", " ", ' </div> </div> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", " ", " ", " ", ' </div> </div> </div> </section> <!-- 8 \u2500\u2500 Food & Cuisine \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="duo" data-astro-cid-bdsczzry> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", ' </div> </div> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", ' </div> </div> </div> </section> <!-- 9 \u2500\u2500 Sport \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="duo" data-astro-cid-bdsczzry> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", ' </div> </div> <div class="duo-card" data-astro-cid-bdsczzry> <div class="duo-head"', " data-astro-cid-bdsczzry>", " ", '</div> <div class="dr-list" data-astro-cid-bdsczzry> ', " ", ' </div> </div> </div> </section> <!-- 10 \u2500\u2500 Which should you visit? \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> ', ' </section> <!-- 11 \u2500\u2500 Explore each country \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>', '</h2> <div class="cta-row" data-astro-cid-bdsczzry> ', " ", " </div> </section> <!-- 12 \u2500\u2500 More comparisons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> ", " <!-- 13 \u2500\u2500 Neighbouring countries \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> ", ' <!-- World map CTA --> <div class="map-cta" data-astro-cid-bdsczzry> <a href="/map" class="map-btn" data-astro-cid-bdsczzry> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bdsczzry> <circle cx="12" cy="12" r="10" data-astro-cid-bdsczzry></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-bdsczzry></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-bdsczzry></path> </svg> ', " </a> </div> </div> </div>"])), unescapeHTML(JSON.stringify(countriesList)), maybeRenderHead(), addAttribute(`--ca:${accentA};--cb:${accentB};`, "style"), t.home, t.compare, countryA.name, countryB.name, hasReconsider && renderTemplate`<div class="advisory advisory--reconsider" role="alert" data-astro-cid-bdsczzry> <span class="advisory-icon" data-astro-cid-bdsczzry>⚠️</span> <span data-astro-cid-bdsczzry>${t.advisoryReconsiderComparePre}<strong data-astro-cid-bdsczzry>${reconsiderNames.join(" and ")}</strong>${t.advisoryReconsiderComparePost}</span> </div>`, countryA.cca2, countryA.flag, countryA.name, countryA.vibe, addAttribute(`--t:${accentA};`, "style"), labelA, countryB.cca2, countryB.flag, countryB.name, countryB.vibe, addAttribute(`--t:${accentB};`, "style"), labelB, t.countryA, t.countryB, t.keyFacts, addAttribute(`color:${accentA};`, "style"), countryA.flag, countryA.name, addAttribute(`color:${accentB};`, "style"), countryB.flag, countryB.name, countryA.capital !== "\u2014" || countryB.capital !== "\u2014" ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span class="facts-a" data-astro-cid-bdsczzry>${countryA.capital}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.capitalLabel}</span> <span class="facts-b" data-astro-cid-bdsczzry>${countryB.capital}</span> </div>` : null, countryA.population !== "\u2014" || countryB.population !== "\u2014" ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span${addAttribute(`facts-a${countryA.populationRaw >= countryB.populationRaw && countryA.populationRaw > 0 ? " facts-win" : ""}`, "class")} data-astro-cid-bdsczzry>${countryA.population}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.populationLabel}</span> <span${addAttribute(`facts-b${countryB.populationRaw > countryA.populationRaw ? " facts-win" : ""}`, "class")} data-astro-cid-bdsczzry>${countryB.population}</span> </div>` : null, countryA.area !== "\u2014" || countryB.area !== "\u2014" ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span${addAttribute(`facts-a${countryA.areaRaw >= countryB.areaRaw && countryA.areaRaw > 0 ? " facts-win" : ""}`, "class")} data-astro-cid-bdsczzry>${countryA.area !== "\u2014" ? `${countryA.area} km\xB2` : "\u2014"}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.areaLabel}</span> <span${addAttribute(`facts-b${countryB.areaRaw > countryA.areaRaw ? " facts-win" : ""}`, "class")} data-astro-cid-bdsczzry>${countryB.area !== "\u2014" ? `${countryB.area} km\xB2` : "\u2014"}</span> </div>` : null, countryA.language !== "\u2014" || countryB.language !== "\u2014" ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span class="facts-a" data-astro-cid-bdsczzry>${countryA.language}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.languageLabel}</span> <span class="facts-b" data-astro-cid-bdsczzry>${countryB.language}</span> </div>` : null, countryA.currency !== "\u2014" || countryB.currency !== "\u2014" ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span class="facts-a" data-astro-cid-bdsczzry>${countryA.currency}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.currencyLabel}</span> <span class="facts-b" data-astro-cid-bdsczzry>${countryB.currency}</span> </div>` : null, countryA.sport !== "\u2014" || countryB.sport !== "\u2014" ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span class="facts-a" data-astro-cid-bdsczzry>${countryA.sport}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.nationalSportLabel}</span> <span class="facts-b" data-astro-cid-bdsczzry>${countryB.sport}</span> </div>` : null, countryA.dish || countryB.dish ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span class="facts-a" data-astro-cid-bdsczzry>${countryA.dish || "\u2014"}</span> <span class="facts-m" data-astro-cid-bdsczzry>${t.nationalDishLabel}</span> <span class="facts-b" data-astro-cid-bdsczzry>${countryB.dish || "\u2014"}</span> </div>` : null, countryA.peak || countryB.peak ? renderTemplate`<div class="facts-row" data-astro-cid-bdsczzry> <span${addAttribute(`facts-a${countryA.peak && countryB.peak && countryA.peak.elevation >= countryB.peak.elevation ? " facts-win" : ""}`, "class")} data-astro-cid-bdsczzry> ${countryA.peak ? `${countryA.peak.name} \xB7 ${countryA.peak.elevation.toLocaleString("en-US")} m` : "\u2014"} </span> <span class="facts-m" data-astro-cid-bdsczzry>${t.highestPeakLabel}</span> <span${addAttribute(`facts-b${countryA.peak && countryB.peak && countryB.peak.elevation > countryA.peak.elevation ? " facts-win" : ""}`, "class")} data-astro-cid-bdsczzry> ${countryB.peak ? `${countryB.peak.name} \xB7 ${countryB.peak.elevation.toLocaleString("en-US")} m` : "\u2014"} </span> </div>` : null, t.travelIndex, addAttribute(`color:${accentA};`, "style"), countryA.flag, countryA.name, addAttribute(`color:${accentB};`, "style"), countryB.flag, countryB.name, travelRows.map((row) => renderTemplate`<div class="ti-row" data-astro-cid-bdsczzry> <span class="ti-label" data-astro-cid-bdsczzry>${row.icon} ${row.label}</span> <div class="ti-bar-wrap" data-astro-cid-bdsczzry> <div class="ti-bar"${addAttribute(`--pct:${row.sA / 5 * 100}%;--col:${accentA};`, "style")} data-astro-cid-bdsczzry></div> <span${addAttribute(row.sA > row.sB ? "ti-score ti-score--win" : "ti-score", "class")}${addAttribute(row.sA > row.sB ? `color:${accentA};` : "", "style")} data-astro-cid-bdsczzry>${row.sA}/5</span> </div> <div class="ti-bar-wrap" data-astro-cid-bdsczzry> <div class="ti-bar"${addAttribute(`--pct:${row.sB / 5 * 100}%;--col:${accentB};`, "style")} data-astro-cid-bdsczzry></div> <span${addAttribute(row.sB > row.sA ? "ti-score ti-score--win" : "ti-score", "class")}${addAttribute(row.sB > row.sA ? `color:${accentB};` : "", "style")} data-astro-cid-bdsczzry>${row.sB}/5</span> </div> </div>`), addAttribute(`--vc:${accentA};`, "style"), countryA.flag, t.bestFor, top2A.join(" & "), addAttribute(`--vc:${accentB};`, "style"), countryB.flag, t.bestFor, top2B.join(" & "), t.geographyNature, addAttribute(`--dh:${accentA};`, "style"), countryA.flag, countryA.name, countryA.area !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.areaLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryA.area} km²</span></div>`, exA.climate && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.climateLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${exA.climate}</span></div>`, countryA.peak && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.highestPeakLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryA.peak.name} · ${countryA.peak.elevation.toLocaleString("en-US")} m</span></div>`, t.coastlineLabel, exA.landlocked ? t.landlocked : t.coastal, addAttribute(`--dh:${accentB};`, "style"), countryB.flag, countryB.name, countryB.area !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.areaLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryB.area} km²</span></div>`, exB.climate && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.climateLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${exB.climate}</span></div>`, countryB.peak && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.highestPeakLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryB.peak.name} · ${countryB.peak.elevation.toLocaleString("en-US")} m</span></div>`, t.coastlineLabel, exB.landlocked ? t.landlocked : t.coastal, t.peopleCulture, addAttribute(`--dh:${accentA};`, "style"), countryA.flag, countryA.name, countryA.population !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.populationLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryA.population}</span></div>`, countryA.populationRaw && countryA.areaRaw ? renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.densityLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${density(countryA.populationRaw, countryA.areaRaw)}</span></div>` : null, countryA.language !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${countryA.language.includes(",") ? t.languagesLabel : t.languageLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryA.language}</span></div>`, exA.religion && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.religionLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${exA.religion}</span></div>`, exA.hdi && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.hdiTierLabel}</span><span${addAttribute(`dr-v dr-hdi dr-hdi--${exA.hdi}`, "class")} data-astro-cid-bdsczzry>${exA.hdi.charAt(0).toUpperCase() + exA.hdi.slice(1)}</span></div>`, addAttribute(`--dh:${accentB};`, "style"), countryB.flag, countryB.name, countryB.population !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.populationLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryB.population}</span></div>`, countryB.populationRaw && countryB.areaRaw ? renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.densityLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${density(countryB.populationRaw, countryB.areaRaw)}</span></div>` : null, countryB.language !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${countryB.language.includes(",") ? t.languagesLabel : t.languageLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryB.language}</span></div>`, exB.religion && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.religionLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${exB.religion}</span></div>`, exB.hdi && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.hdiTierLabel}</span><span${addAttribute(`dr-v dr-hdi dr-hdi--${exB.hdi}`, "class")} data-astro-cid-bdsczzry>${exB.hdi.charAt(0).toUpperCase() + exB.hdi.slice(1)}</span></div>`, t.foodCuisine, addAttribute(`--dh:${accentA};`, "style"), countryA.flag, countryA.name, countryA.dish && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.nationalDishLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryA.dish}</span></div>`, exA.dishes?.length > 0 && renderTemplate`<div class="dr dr--wrap" data-astro-cid-bdsczzry> <span class="dr-l" data-astro-cid-bdsczzry>${t.alsoKnownFor}</span> <span class="dr-v dr-pills" data-astro-cid-bdsczzry> ${exA.dishes.map((d) => renderTemplate`<span class="pill-sm" data-astro-cid-bdsczzry>${d}</span>`)} </span> </div>`, addAttribute(`--dh:${accentB};`, "style"), countryB.flag, countryB.name, countryB.dish && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.nationalDishLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryB.dish}</span></div>`, exB.dishes?.length > 0 && renderTemplate`<div class="dr dr--wrap" data-astro-cid-bdsczzry> <span class="dr-l" data-astro-cid-bdsczzry>Also known for</span> <span class="dr-v dr-pills" data-astro-cid-bdsczzry> ${exB.dishes.map((d) => renderTemplate`<span class="pill-sm" data-astro-cid-bdsczzry>${d}</span>`)} </span> </div>`, t.sportSection, addAttribute(`--dh:${accentA};`, "style"), countryA.flag, countryA.name, countryA.sport !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.nationalSportLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryA.sport}</span></div>`, exA.athletes?.length > 0 && exA.athletes.map((a) => renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l dr-l--ath" data-astro-cid-bdsczzry>★</span><span class="dr-v" data-astro-cid-bdsczzry>${a}</span></div>`), addAttribute(`--dh:${accentB};`, "style"), countryB.flag, countryB.name, countryB.sport !== "\u2014" && renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l" data-astro-cid-bdsczzry>${t.nationalSportLabel}</span><span class="dr-v" data-astro-cid-bdsczzry>${countryB.sport}</span></div>`, exB.athletes?.length > 0 && exB.athletes.map((a) => renderTemplate`<div class="dr" data-astro-cid-bdsczzry><span class="dr-l dr-l--ath" data-astro-cid-bdsczzry>★</span><span class="dr-v" data-astro-cid-bdsczzry>${a}</span></div>`), dntA || dntB ? renderTemplate`<div class="advisory-info-block" data-astro-cid-bdsczzry> ${dntA && renderTemplate`<p class="advisory-info-msg" data-astro-cid-bdsczzry> <strong data-astro-cid-bdsczzry>⛔ ${countryA.name}:</strong>${t.advisoryDntInfoPost} </p>`} ${dntB && renderTemplate`<p class="advisory-info-msg" data-astro-cid-bdsczzry> <strong data-astro-cid-bdsczzry>⛔ ${countryB.name}:</strong>${t.advisoryDntInfoPost} </p>`} ${(!dntA || !dntB) && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-bdsczzry": true }, { "default": async ($$result3) => renderTemplate` <h2 class="sh" data-astro-cid-bdsczzry>${dntA ? countryB.name : countryA.name} — ${t.keyContext}</h2> <blockquote class="editorial" data-astro-cid-bdsczzry>${editorial}</blockquote> ` })}`} </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-bdsczzry": true }, { "default": async ($$result3) => renderTemplate` <h2 class="sh" data-astro-cid-bdsczzry>${t.whichVisit}</h2> <blockquote class="editorial" data-astro-cid-bdsczzry>${editorial}</blockquote> ` })}`, t.countryProfiles, dntA ? renderTemplate`<div class="cta-card cta-card--dnt"${addAttribute(`--cc:${accentA};`, "style")} data-astro-cid-bdsczzry> <span class="cta-flag" data-astro-cid-bdsczzry>${countryA.flag}</span> <span class="cta-name" data-astro-cid-bdsczzry>${countryA.name}</span> <span class="cta-sub cta-sub--dnt" data-astro-cid-bdsczzry>${t.informationalOnly}</span> </div>` : renderTemplate`<a${addAttribute(`/country/${countryA.slug}/`, "href")} class="cta-card"${addAttribute(`--cc:${accentA};`, "style")} data-astro-cid-bdsczzry> <span class="cta-flag" data-astro-cid-bdsczzry>${countryA.flag}</span> <span class="cta-name" data-astro-cid-bdsczzry>${countryA.name}</span> <span class="cta-sub" data-astro-cid-bdsczzry>${labelA}</span> <span class="cta-arr" data-astro-cid-bdsczzry>→</span> </a>`, dntB ? renderTemplate`<div class="cta-card cta-card--dnt"${addAttribute(`--cc:${accentB};`, "style")} data-astro-cid-bdsczzry> <span class="cta-flag" data-astro-cid-bdsczzry>${countryB.flag}</span> <span class="cta-name" data-astro-cid-bdsczzry>${countryB.name}</span> <span class="cta-sub cta-sub--dnt" data-astro-cid-bdsczzry>${t.informationalOnly}</span> </div>` : renderTemplate`<a${addAttribute(`/country/${countryB.slug}/`, "href")} class="cta-card"${addAttribute(`--cc:${accentB};`, "style")} data-astro-cid-bdsczzry> <span class="cta-flag" data-astro-cid-bdsczzry>${countryB.flag}</span> <span class="cta-name" data-astro-cid-bdsczzry>${countryB.name}</span> <span class="cta-sub" data-astro-cid-bdsczzry>${labelB}</span> <span class="cta-arr" data-astro-cid-bdsczzry>→</span> </a>`, moreSlice.length > 0 && renderTemplate`<section class="section" data-astro-cid-bdsczzry> <h2 class="sh" data-astro-cid-bdsczzry>${t.moreComparisons}</h2> <div class="pills" data-astro-cid-bdsczzry> ${moreSlice.map((m) => renderTemplate`<a${addAttribute(m.href, "href")} class="pill" data-astro-cid-bdsczzry>${m.label}</a>`)} </div> </section>`, (countryA.borderCountries.length > 0 || countryB.borderCountries.length > 0) && renderTemplate`<section class="section neighbours-section" data-astro-cid-bdsczzry> ${countryA.borderCountries.length > 0 && renderTemplate`<div data-astro-cid-bdsczzry> <h2 class="sh sh--inline" data-astro-cid-bdsczzry>${countryA.flag} ${countryA.name} ${t.borders}</h2> <div class="pills" data-astro-cid-bdsczzry> ${countryA.borderCountries.map((b) => renderTemplate`<a${addAttribute(`/country/${b.slug}/`, "href")} class="pill pill--sm" data-astro-cid-bdsczzry>${b.name}</a>`)} </div> </div>`} ${countryB.borderCountries.length > 0 && renderTemplate`<div data-astro-cid-bdsczzry> <h2 class="sh sh--inline" data-astro-cid-bdsczzry>${countryB.flag} ${countryB.name} ${t.borders}</h2> <div class="pills" data-astro-cid-bdsczzry> ${countryB.borderCountries.map((b) => renderTemplate`<a${addAttribute(`/country/${b.slug}/`, "href")} class="pill pill--sm" data-astro-cid-bdsczzry>${b.name}</a>`)} </div> </div>`} </section>`, t.backToWorldMap), "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', '<\/script> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:url"', '> <meta property="og:type" content="website"> '])), unescapeHTML(jsonLd), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(pageUrl, "content")) })}` })}   `;
}, "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/[slug].astro", void 0);

const $$file = "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/[slug].astro";
const $$url = "/compare/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
