// ─── Country extras — structured data for compare & detail pages ─────────────
// climate   : dominant climate description
// religion  : primary religion + rough % where known
// hdi       : 'high' | 'medium' | 'low'  (UN HDI tiers)
// dishes    : 2–3 other iconic dishes (besides national dish)
// athletes  : 1–2 notable athletes or sporting achievements
// landlocked: true = no sea coast

export const COUNTRY_REGION = {
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

export const COUNTRY_EXTRAS = {
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
  Bahrain:        { climate:'Desert / Arid', religion:'Islam (74%)', hdi:'high',   dishes:['Machboos','Muhammar','Harees'],    athletes:['Salwa Eid Naser (athletics, 2019 World 400m Champion)'], landlocked:false },
  Bangladesh:     { climate:'Tropical Monsoon', religion:'Islam (88%)', hdi:'medium', dishes:['Hilsa curry','Panta bhat','Naan khatai'], athletes:['Shakib Al Hasan (cricket)'], landlocked:false },
  Barbados:       { climate:'Tropical', religion:'Protestant (75%)', hdi:'high',   dishes:['Flying fish & cou-cou','Pudding & souse','Macaroni pie'], athletes:['Garfield Sobers (cricket)','Obadele Thompson (athletics, Olympic bronze)'], landlocked:false },
  Belarus:        { climate:'Continental / Temperate', religion:'Orthodox Christianity (48%)', hdi:'high',   dishes:['Draniki','Machanka','Khaladnik'], athletes:['Darya Domracheva (biathlon)','Alexander Medved (wrestling)'], landlocked:true  },
  Belgium:        { climate:'Oceanic / Temperate', religion:'Roman Catholic (58%)', hdi:'high',   dishes:['Moules-frites','Carbonnade flamande','Speculoos'], athletes:['Eddy Merckx (cycling)','Kevin De Bruyne (football)'], landlocked:false },
  Belize:         { climate:'Tropical', religion:'Roman Catholic (40%)', hdi:'medium', dishes:['Rice & beans','Stew chicken','Garnaches'], athletes:['Deon McCaulay (football)'], landlocked:false },
  Benin:          { climate:'Tropical', religion:'Christianity (48%), Islam (24%)', hdi:'low',    dishes:['Akassa','Amiwo','Kuli-kuli'], athletes:['Stéphane Sessègnon (football, Premier League)'], landlocked:false },
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
  Gambia:         { climate:'Tropical', religion:'Islam (96%)', hdi:'medium', dishes:['Benachin','Yassa','Domoda'],        athletes:['Gina Bass (athletics, 2016 & 2020 Olympian)'], landlocked:false },
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
  'Republic of the Congo': { climate:'Tropical Rainforest', religion:'Christianity (85%)', hdi:'medium', dishes:['Ndolé','Moamba de galinha','Saka-saka'], athletes:['Christopher Maboulou (football)'], landlocked:false },
  Romania:        { climate:'Continental / Temperate', religion:'Orthodox Christianity (81%)', hdi:'high', dishes:['Mămăligă','Sarmale','Mici'], athletes:['Nadia Comăneci (gymnastics)','Gheorghe Hagi (football)'], landlocked:false },
  Russia:         { climate:'Continental / Subarctic', religion:'Orthodox Christianity (41%)', hdi:'high',   dishes:['Pelmeni','Borsch','Beef Stroganoff'], athletes:['Irina Rodnina (skating)','Andrei Arshavin (football)'], landlocked:false },
  Rwanda:         { climate:'Tropical Highland', religion:'Roman Catholic (49%), Protestant (39%)', hdi:'medium', dishes:['Ugali','Isombe','Inyama'], athletes:['Adrien Niyonshuti (cycling)'], landlocked:true  },

  // ── S ──────────────────────────────────────────────────────────────────
  'Saint Lucia':  { climate:'Tropical', religion:'Roman Catholic (62%)', hdi:'high',   dishes:['Green fig & saltfish','Callaloo soup','Accra'], athletes:['Mary Elizabeth Donat (athletics)'], landlocked:false },
  Samoa:          { climate:'Tropical', religion:'Christian (98%)', hdi:'medium', dishes:['Palusami','Umu','Koko alaisa'],    athletes:['Peter Fatialofa (rugby)','Aukuso Tuilagi (rugby)'], landlocked:false },
  'San Marino':   { climate:'Mediterranean / Alpine', religion:'Roman Catholic (97%)', hdi:'high', dishes:['Torta tre monti','Piadina','Fagioli con le cotiche'], athletes:['Alessandra Perilli (shooting, Olympic bronze Tokyo 2020)'], landlocked:true },
  'Saudi Arabia': { climate:'Desert / Arid', religion:'Islam (97%)', hdi:'high',   dishes:['Kabsa','Jareesh','Saleeg'],       athletes:['Sami Al-Jaber (football)'], landlocked:false },
  Scotland:       { climate:'Oceanic / Subarctic', religion:'Non-religious (52%), Church of Scotland (24%)', hdi:'high', dishes:['Cullen Skink','Cranachan','Cock-a-leekie'], athletes:['Andy Murray (tennis)','Kenny Dalglish (football)'], landlocked:false },
  Senegal:        { climate:'Semi-arid / Tropical', religion:'Islam (97%)', hdi:'medium', dishes:['Yassa','Mafé','Ceebu jën'],        athletes:['Sadio Mané (football)','Amadou Dia Bâ (hurdles)'], landlocked:false },
  Serbia:         { climate:'Continental / Temperate', religion:'Orthodox Christianity (85%)', hdi:'high', dishes:['Ćevapi','Ajvar','Sarma'], athletes:['Novak Djokovic (tennis)','Nikola Jokić (basketball)'], landlocked:false },
  Seychelles:     { climate:'Tropical Marine', religion:'Roman Catholic (76%)', hdi:'high',   dishes:['Kari koko','Ladob','Bourzwa fish'], athletes:['Brandon Gomez (swimming)'], landlocked:false },
  'Sierra Leone': { climate:'Tropical', religion:'Islam (78%), Christianity (21%)', hdi:'low', dishes:['Cassava leaf stew','Groundnut soup','Fufu'], athletes:['Mohamed Kallon (football)'], landlocked:false },
  Singapore:      { climate:'Tropical Rainforest', religion:'Buddhism (31%), Christianity (19%)', hdi:'high', dishes:['Hainanese chicken rice','Laksa','Char kway teow'], athletes:['Joseph Schooling (swimming)','Feng Tianwei (table tennis)'], landlocked:false },
  Slovakia:       { climate:'Continental / Alpine', religion:'Roman Catholic (55%)', hdi:'high',   dishes:['Bryndzové halušky','Kapustnica','Šúľance'], athletes:['Peter Sagan (cycling)','Marian Hossa (ice hockey)'], landlocked:true },
  Slovenia:       { climate:'Alpine / Continental', religion:'Roman Catholic (58%)', hdi:'high',   dishes:['Idrijski žlikrofi','Potica','Prekmurska gibanica'], athletes:['Primož Roglič (cycling)','Tina Maze (skiing)'], landlocked:false },
  'Solomon Islands': { climate:'Tropical Rainforest', religion:'Christianity (97%)', hdi:'medium', dishes:['Ngali nut','Poi','Kumu'], athletes:['Rex Peki (athletics)'], landlocked:false },
  Somalia:        { climate:'Arid / Semi-arid', religion:'Islam (100%)', hdi:'low',    dishes:['Bariis iskukaris','Suqaar','Maraq'], athletes:['Abdi Bile (athletics, 1987 World 1500m Champion)'], landlocked:false },
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
