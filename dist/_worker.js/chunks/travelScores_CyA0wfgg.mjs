globalThis.process ??= {}; globalThis.process.env ??= {};
// ─── Travel Advisory — per-country warning levels ────────────────────────────
// 'do-not-travel' : active conflict / extreme danger — no travel recommended
// 'reconsider'    : significant risk — serious caution required
// 'exercise-caution' : elevated risk — be aware, plan carefully
const TRAVEL_ADVISORY = {
  // ── Do not travel ────────────────────────────────────────────────────────
  'Afghanistan':              'do-not-travel',
  'Syria':                    'do-not-travel',
  'Yemen':                    'do-not-travel',
  'North Korea':              'do-not-travel',
  'South Sudan':              'do-not-travel',
  'Somalia':                  'do-not-travel',
  'Sudan':                    'do-not-travel',
  'Libya':                    'do-not-travel',
  'Haiti':                    'do-not-travel',
  'Central African Republic': 'do-not-travel',
  'Mali':                     'do-not-travel',
  'Burkina Faso':             'do-not-travel',

  // ── Reconsider travel ────────────────────────────────────────────────────
  'Russia':                   'reconsider',
  'Ukraine':                  'reconsider',
  'Iran':                     'reconsider',
  'Iraq':                     'reconsider',
  'Myanmar':                  'reconsider',
  'Venezuela':                'reconsider',
  'Palestine':                'reconsider',
  'Niger':                    'reconsider',
  'Eritrea':                  'reconsider',
  'Belarus':                  'reconsider',
  'Ethiopia':                 'reconsider',
  'Pakistan':                 'reconsider',

  // ── Exercise caution ─────────────────────────────────────────────────────
  'Egypt':                    'exercise-caution',
  'Lebanon':                  'exercise-caution',
  'Nigeria':                  'exercise-caution',
  'Cameroon':                 'exercise-caution',
  'Kenya':                    'exercise-caution',
  'Mozambique':               'exercise-caution',
  'Uganda':                   'exercise-caution',
  'Colombia':                 'exercise-caution',
  'Honduras':                 'exercise-caution',
  'Guatemala':                'exercise-caution',
  'El Salvador':              'exercise-caution',
  'Philippines':              'exercise-caution',
  'Indonesia':                'exercise-caution',
  'Bangladesh':               'exercise-caution',
  'Tajikistan':               'exercise-caution',
  'Kazakhstan':               'exercise-caution',
  'Saudi Arabia':             'exercise-caution',
  'Turkey':                   'exercise-caution',
  'Tunisia':                  'exercise-caution',
  'Mexico':                   'exercise-caution',
  'Peru':                     'exercise-caution',
  'Senegal':                  'exercise-caution',
  'Tanzania':                 'exercise-caution',
  'South Africa':             'exercise-caution',
  'Azerbaijan':               'exercise-caution',
};

// ─── Travel Scores — curated 1–5 per dimension for every country ────────────
// tourism : infrastructure, visa ease, safety, popularity
// budget  : daily cost (1=expensive, 5=very cheap)
// nature  : landscapes, biodiversity, national parks
// food    : cuisine reputation and variety
// culture : history, heritage, arts
// langEase: ease for English-speaking travellers

const TRAVEL_SCORES = {
  // ── A ────────────────────────────────────────────────────────────────────
  "Afghanistan":              { tourism:1, budget:5, nature:3, food:2, culture:3, langEase:1 },
  "Albania":                  { tourism:3, budget:4, nature:4, food:3, culture:3, langEase:3 },
  "Algeria":                  { tourism:2, budget:3, nature:4, food:3, culture:4, langEase:2 },
  "Andorra":                  { tourism:4, budget:1, nature:3, food:3, culture:2, langEase:3 },
  "Angola":                   { tourism:2, budget:2, nature:3, food:2, culture:2, langEase:2 },
  "Antigua and Barbuda":      { tourism:4, budget:2, nature:3, food:3, culture:2, langEase:5 },
  "Argentina":                { tourism:4, budget:4, nature:4, food:4, culture:3, langEase:2 },
  "Armenia":                  { tourism:3, budget:4, nature:3, food:4, culture:4, langEase:2 },
  "Australia":                { tourism:5, budget:2, nature:5, food:4, culture:3, langEase:5 },
  "Austria":                  { tourism:5, budget:2, nature:4, food:4, culture:5, langEase:4 },
  "Azerbaijan":               { tourism:3, budget:4, nature:3, food:4, culture:4, langEase:2 },

  // ── B ────────────────────────────────────────────────────────────────────
  "Bahamas":                  { tourism:4, budget:1, nature:4, food:3, culture:2, langEase:5 },
  "Bahrain":                  { tourism:3, budget:2, nature:2, food:3, culture:3, langEase:4 },
  "Bangladesh":               { tourism:2, budget:5, nature:3, food:4, culture:3, langEase:3 },
  "Barbados":                 { tourism:4, budget:1, nature:3, food:3, culture:3, langEase:5 },
  "Belarus":                  { tourism:2, budget:3, nature:3, food:3, culture:3, langEase:2 },
  "Belgium":                  { tourism:5, budget:2, nature:2, food:4, culture:5, langEase:4 },
  "Belize":                   { tourism:3, budget:3, nature:4, food:3, culture:3, langEase:5 },
  "Benin":                    { tourism:2, budget:4, nature:3, food:3, culture:3, langEase:2 },
  "Bhutan":                   { tourism:3, budget:3, nature:5, food:3, culture:5, langEase:4 },
  "Bolivia":                  { tourism:3, budget:5, nature:4, food:3, culture:5, langEase:2 },
  "Bosnia and Herzegovina":   { tourism:3, budget:4, nature:4, food:4, culture:4, langEase:2 },
  "Botswana":                 { tourism:3, budget:3, nature:5, food:2, culture:2, langEase:5 },
  "Brazil":                   { tourism:4, budget:3, nature:5, food:4, culture:3, langEase:2 },
  "Brunei":                   { tourism:2, budget:2, nature:3, food:4, culture:2, langEase:4 },
  "Bulgaria":                 { tourism:3, budget:4, nature:4, food:4, culture:4, langEase:3 },
  "Burkina Faso":             { tourism:1, budget:5, nature:3, food:3, culture:3, langEase:2 },
  "Burundi":                  { tourism:1, budget:5, nature:3, food:2, culture:2, langEase:2 },

  // ── C ────────────────────────────────────────────────────────────────────
  "Cabo Verde":               { tourism:4, budget:3, nature:3, food:3, culture:3, langEase:3 },
  "Cambodia":                 { tourism:4, budget:5, nature:3, food:4, culture:5, langEase:3 },
  "Cameroon":                 { tourism:2, budget:4, nature:4, food:4, culture:3, langEase:3 },
  "Canada":                   { tourism:5, budget:2, nature:5, food:4, culture:4, langEase:5 },
  "Cape Verde":               { tourism:4, budget:3, nature:3, food:3, culture:3, langEase:3 },
  "Central African Republic": { tourism:1, budget:5, nature:3, food:2, culture:2, langEase:1 },
  "Chad":                     { tourism:1, budget:4, nature:3, food:2, culture:2, langEase:2 },
  "Chile":                    { tourism:4, budget:3, nature:5, food:3, culture:3, langEase:2 },
  "China":                    { tourism:4, budget:4, nature:5, food:5, culture:5, langEase:1 },
  "Colombia":                 { tourism:4, budget:4, nature:4, food:4, culture:3, langEase:2 },
  "Comoros":                  { tourism:2, budget:4, nature:3, food:3, culture:2, langEase:2 },
  "Costa Rica":               { tourism:4, budget:3, nature:5, food:3, culture:3, langEase:3 },
  "Croatia":                  { tourism:5, budget:3, nature:4, food:4, culture:4, langEase:4 },
  "Cuba":                     { tourism:3, budget:3, nature:3, food:3, culture:4, langEase:2 },
  "Cyprus":                   { tourism:4, budget:3, nature:3, food:4, culture:4, langEase:5 },
  "Czech Republic":           { tourism:5, budget:3, nature:3, food:4, culture:5, langEase:3 },
  "Côte d'Ivoire":            { tourism:2, budget:3, nature:3, food:4, culture:3, langEase:2 },

  // ── D ────────────────────────────────────────────────────────────────────
  "Democratic Republic of the Congo": { tourism:1, budget:4, nature:4, food:2, culture:3, langEase:2 },
  "Denmark":                  { tourism:4, budget:1, nature:3, food:4, culture:4, langEase:5 },
  "Djibouti":                 { tourism:2, budget:2, nature:3, food:3, culture:2, langEase:3 },
  "Dominican Republic":       { tourism:4, budget:3, nature:4, food:3, culture:3, langEase:2 },

  // ── E ────────────────────────────────────────────────────────────────────
  "Ecuador":                  { tourism:4, budget:4, nature:5, food:3, culture:4, langEase:2 },
  "Egypt":                    { tourism:4, budget:4, nature:3, food:3, culture:5, langEase:3 },
  "El Salvador":              { tourism:2, budget:4, nature:3, food:3, culture:3, langEase:3 },
  "Equatorial Guinea":        { tourism:1, budget:2, nature:3, food:2, culture:2, langEase:3 },
  "Eritrea":                  { tourism:1, budget:4, nature:2, food:3, culture:3, langEase:2 },
  "Estonia":                  { tourism:4, budget:3, nature:3, food:3, culture:4, langEase:4 },
  "Eswatini":                 { tourism:2, budget:4, nature:3, food:2, culture:3, langEase:5 },
  "Ethiopia":                 { tourism:3, budget:5, nature:4, food:4, culture:5, langEase:2 },

  // ── F ────────────────────────────────────────────────────────────────────
  "Fiji":                     { tourism:4, budget:3, nature:4, food:3, culture:3, langEase:5 },
  "Finland":                  { tourism:4, budget:1, nature:4, food:3, culture:4, langEase:4 },
  "France":                   { tourism:5, budget:2, nature:4, food:5, culture:5, langEase:3 },

  // ── G ────────────────────────────────────────────────────────────────────
  "Gabon":                    { tourism:2, budget:2, nature:4, food:3, culture:2, langEase:2 },
  "Gambia":                   { tourism:3, budget:4, nature:3, food:3, culture:3, langEase:5 },
  "Georgia":                  { tourism:4, budget:5, nature:4, food:4, culture:4, langEase:3 },
  "Germany":                  { tourism:5, budget:2, nature:3, food:3, culture:5, langEase:4 },
  "Ghana":                    { tourism:3, budget:4, nature:3, food:4, culture:3, langEase:5 },
  "Greece":                   { tourism:5, budget:3, nature:4, food:4, culture:5, langEase:4 },
  "Greenland":                { tourism:3, budget:1, nature:5, food:2, culture:3, langEase:3 },
  "Guatemala":                { tourism:3, budget:4, nature:4, food:3, culture:5, langEase:3 },
  "Guinea":                   { tourism:1, budget:4, nature:3, food:3, culture:2, langEase:2 },
  "Guinea-Bissau":            { tourism:1, budget:5, nature:3, food:2, culture:2, langEase:2 },
  "Guyana":                   { tourism:2, budget:4, nature:4, food:3, culture:2, langEase:5 },

  // ── H ────────────────────────────────────────────────────────────────────
  "Haiti":                    { tourism:1, budget:4, nature:3, food:3, culture:4, langEase:2 },
  "Honduras":                 { tourism:2, budget:4, nature:4, food:3, culture:3, langEase:2 },
  "Hong Kong":                { tourism:5, budget:2, nature:3, food:5, culture:4, langEase:5 },
  "Hungary":                  { tourism:5, budget:3, nature:3, food:4, culture:5, langEase:3 },

  // ── I ────────────────────────────────────────────────────────────────────
  "Iceland":                  { tourism:5, budget:1, nature:5, food:3, culture:3, langEase:5 },
  "India":                    { tourism:4, budget:5, nature:4, food:5, culture:5, langEase:4 },
  "Indonesia":                { tourism:4, budget:4, nature:5, food:4, culture:4, langEase:3 },
  "Iran":                     { tourism:2, budget:4, nature:4, food:4, culture:5, langEase:2 },
  "Iraq":                     { tourism:1, budget:4, nature:2, food:4, culture:5, langEase:2 },
  "Ireland":                  { tourism:4, budget:1, nature:4, food:3, culture:4, langEase:5 },
  "Israel":                   { tourism:3, budget:1, nature:3, food:4, culture:5, langEase:4 },
  "Italy":                    { tourism:5, budget:2, nature:4, food:5, culture:5, langEase:3 },

  // ── J ────────────────────────────────────────────────────────────────────
  "Jamaica":                  { tourism:4, budget:3, nature:3, food:4, culture:4, langEase:5 },
  "Japan":                    { tourism:5, budget:2, nature:4, food:5, culture:5, langEase:1 },
  "Jordan":                   { tourism:4, budget:3, nature:4, food:4, culture:5, langEase:4 },

  // ── K ────────────────────────────────────────────────────────────────────
  "Kazakhstan":               { tourism:2, budget:4, nature:4, food:3, culture:3, langEase:2 },
  "Kenya":                    { tourism:4, budget:3, nature:5, food:3, culture:3, langEase:4 },
  "Kiribati":                 { tourism:1, budget:3, nature:3, food:2, culture:2, langEase:4 },
  "Kosovo":                   { tourism:2, budget:4, nature:3, food:3, culture:3, langEase:4 },
  "Kuwait":                   { tourism:2, budget:2, nature:2, food:4, culture:3, langEase:4 },
  "Kyrgyzstan":               { tourism:2, budget:5, nature:5, food:3, culture:3, langEase:2 },

  // ── L ────────────────────────────────────────────────────────────────────
  "Laos":                     { tourism:3, budget:5, nature:4, food:4, culture:4, langEase:2 },
  "Latvia":                   { tourism:3, budget:3, nature:3, food:3, culture:4, langEase:4 },
  "Lebanon":                  { tourism:2, budget:3, nature:3, food:5, culture:4, langEase:3 },
  "Lesotho":                  { tourism:2, budget:4, nature:3, food:2, culture:2, langEase:5 },
  "Liberia":                  { tourism:1, budget:4, nature:3, food:3, culture:2, langEase:5 },
  "Libya":                    { tourism:1, budget:3, nature:3, food:3, culture:4, langEase:2 },
  "Liechtenstein":            { tourism:3, budget:1, nature:3, food:3, culture:3, langEase:3 },
  "Lithuania":                { tourism:3, budget:3, nature:3, food:3, culture:4, langEase:4 },
  "Luxembourg":               { tourism:4, budget:1, nature:2, food:3, culture:4, langEase:4 },

  // ── M ────────────────────────────────────────────────────────────────────
  "Madagascar":               { tourism:3, budget:4, nature:5, food:3, culture:3, langEase:2 },
  "Malawi":                   { tourism:2, budget:5, nature:3, food:2, culture:2, langEase:5 },
  "Malaysia":                 { tourism:4, budget:4, nature:4, food:5, culture:4, langEase:4 },
  "Maldives":                 { tourism:5, budget:1, nature:5, food:3, culture:2, langEase:4 },
  "Malta":                    { tourism:4, budget:3, nature:2, food:3, culture:4, langEase:5 },
  "Marshall Islands":         { tourism:1, budget:3, nature:3, food:2, culture:2, langEase:5 },
  "Mauritania":               { tourism:1, budget:4, nature:3, food:2, culture:3, langEase:2 },
  "Mauritius":                { tourism:4, budget:2, nature:4, food:4, culture:3, langEase:5 },
  "Mexico":                   { tourism:5, budget:4, nature:4, food:5, culture:4, langEase:2 },
  "Micronesia":               { tourism:1, budget:3, nature:3, food:2, culture:2, langEase:5 },
  "Moldova":                  { tourism:2, budget:4, nature:2, food:3, culture:3, langEase:2 },
  "Monaco":                   { tourism:4, budget:1, nature:2, food:4, culture:4, langEase:4 },
  "Mongolia":                 { tourism:2, budget:4, nature:5, food:2, culture:3, langEase:2 },
  "Montenegro":               { tourism:4, budget:4, nature:5, food:3, culture:3, langEase:3 },
  "Morocco":                  { tourism:4, budget:4, nature:4, food:4, culture:4, langEase:3 },
  "Mozambique":               { tourism:2, budget:4, nature:4, food:3, culture:2, langEase:3 },
  "Myanmar":                  { tourism:2, budget:4, nature:4, food:4, culture:5, langEase:2 },

  // ── N ────────────────────────────────────────────────────────────────────
  "Namibia":                  { tourism:3, budget:3, nature:5, food:2, culture:3, langEase:5 },
  "Nauru":                    { tourism:1, budget:3, nature:2, food:2, culture:1, langEase:5 },
  "Nepal":                    { tourism:4, budget:5, nature:5, food:3, culture:4, langEase:3 },
  "Netherlands":              { tourism:5, budget:2, nature:2, food:3, culture:4, langEase:5 },
  "New Zealand":              { tourism:5, budget:2, nature:5, food:3, culture:3, langEase:5 },
  "Nicaragua":                { tourism:2, budget:5, nature:3, food:3, culture:3, langEase:2 },
  "Niger":                    { tourism:1, budget:5, nature:3, food:2, culture:3, langEase:2 },
  "Nigeria":                  { tourism:2, budget:4, nature:3, food:4, culture:3, langEase:4 },
  "North Korea":              { tourism:1, budget:4, nature:3, food:2, culture:3, langEase:1 },
  "North Macedonia":          { tourism:3, budget:4, nature:3, food:3, culture:4, langEase:3 },
  "Norway":                   { tourism:5, budget:1, nature:5, food:3, culture:4, langEase:5 },

  // ── O ────────────────────────────────────────────────────────────────────
  "Oman":                     { tourism:3, budget:3, nature:4, food:3, culture:4, langEase:4 },

  // ── P ────────────────────────────────────────────────────────────────────
  "Pakistan":                 { tourism:2, budget:4, nature:4, food:4, culture:4, langEase:3 },
  "Palestine":                { tourism:1, budget:3, nature:2, food:4, culture:5, langEase:3 },
  "Panama":                   { tourism:3, budget:3, nature:4, food:3, culture:3, langEase:3 },
  "Papua New Guinea":         { tourism:2, budget:3, nature:5, food:2, culture:4, langEase:4 },
  "Paraguay":                 { tourism:2, budget:4, nature:3, food:3, culture:2, langEase:2 },
  "Peru":                     { tourism:4, budget:4, nature:5, food:5, culture:5, langEase:2 },
  "Philippines":              { tourism:4, budget:4, nature:4, food:4, culture:3, langEase:5 },
  "Poland":                   { tourism:4, budget:3, nature:3, food:4, culture:4, langEase:3 },
  "Portugal":                 { tourism:5, budget:3, nature:3, food:4, culture:4, langEase:4 },
  "Puerto Rico":              { tourism:4, budget:3, nature:4, food:4, culture:4, langEase:4 },

  // ── Q ────────────────────────────────────────────────────────────────────
  "Qatar":                    { tourism:3, budget:2, nature:2, food:4, culture:3, langEase:4 },

  // ── R ────────────────────────────────────────────────────────────────────
  "Republic of the Congo":    { tourism:1, budget:3, nature:4, food:2, culture:2, langEase:2 },
  "Romania":                  { tourism:3, budget:3, nature:4, food:3, culture:4, langEase:3 },
  "Russia":                   { tourism:2, budget:3, nature:5, food:3, culture:5, langEase:2 },
  "Rwanda":                   { tourism:3, budget:3, nature:4, food:3, culture:3, langEase:4 },

  // ── S ────────────────────────────────────────────────────────────────────
  "Saint Lucia":              { tourism:4, budget:2, nature:4, food:3, culture:3, langEase:5 },
  "Samoa":                    { tourism:2, budget:3, nature:3, food:3, culture:3, langEase:4 },
  "San Marino":               { tourism:3, budget:2, nature:2, food:3, culture:4, langEase:3 },
  "Saudi Arabia":             { tourism:3, budget:2, nature:3, food:3, culture:3, langEase:3 },
  "Senegal":                  { tourism:3, budget:4, nature:3, food:4, culture:3, langEase:2 },
  "Serbia":                   { tourism:3, budget:4, nature:3, food:4, culture:4, langEase:3 },
  "Seychelles":               { tourism:4, budget:1, nature:5, food:3, culture:2, langEase:5 },
  "Sierra Leone":             { tourism:1, budget:4, nature:3, food:3, culture:2, langEase:5 },
  "Singapore":                { tourism:5, budget:2, nature:2, food:5, culture:4, langEase:5 },
  "Slovakia":                 { tourism:3, budget:3, nature:4, food:3, culture:4, langEase:3 },
  "Slovenia":                 { tourism:4, budget:3, nature:5, food:3, culture:4, langEase:4 },
  "Solomon Islands":          { tourism:1, budget:3, nature:4, food:2, culture:3, langEase:4 },
  "Somalia":                  { tourism:1, budget:4, nature:2, food:3, culture:3, langEase:2 },
  "South Africa":             { tourism:4, budget:4, nature:5, food:3, culture:3, langEase:5 },
  "South Korea":              { tourism:5, budget:3, nature:3, food:5, culture:4, langEase:2 },
  "South Sudan":              { tourism:1, budget:4, nature:3, food:2, culture:2, langEase:3 },
  "Spain":                    { tourism:5, budget:3, nature:4, food:4, culture:5, langEase:3 },
  "Sri Lanka":                { tourism:4, budget:4, nature:4, food:4, culture:4, langEase:4 },
  "Sudan":                    { tourism:1, budget:4, nature:3, food:3, culture:4, langEase:2 },
  "Suriname":                 { tourism:2, budget:4, nature:4, food:3, culture:2, langEase:3 },
  "Sweden":                   { tourism:4, budget:1, nature:4, food:3, culture:4, langEase:5 },
  "Switzerland":              { tourism:5, budget:1, nature:5, food:4, culture:4, langEase:4 },
  "Syria":                    { tourism:1, budget:3, nature:3, food:4, culture:5, langEase:2 },
  "São Tomé and Príncipe":    { tourism:2, budget:3, nature:3, food:3, culture:2, langEase:2 },

  // ── T ────────────────────────────────────────────────────────────────────
  "Tajikistan":               { tourism:2, budget:5, nature:5, food:3, culture:3, langEase:2 },
  "Taiwan":                   { tourism:4, budget:3, nature:4, food:5, culture:4, langEase:3 },
  "Tanzania":                 { tourism:4, budget:3, nature:5, food:3, culture:3, langEase:4 },
  "Thailand":                 { tourism:5, budget:5, nature:4, food:5, culture:4, langEase:3 },
  "Timor-Leste":              { tourism:1, budget:4, nature:3, food:3, culture:3, langEase:3 },
  "Togo":                     { tourism:2, budget:4, nature:3, food:3, culture:3, langEase:2 },
  "Tonga":                    { tourism:2, budget:3, nature:3, food:3, culture:3, langEase:4 },
  "Trinidad and Tobago":      { tourism:3, budget:3, nature:3, food:4, culture:4, langEase:5 },
  "Tunisia":                  { tourism:4, budget:4, nature:3, food:4, culture:4, langEase:3 },
  "Turkey":                   { tourism:5, budget:4, nature:4, food:4, culture:5, langEase:3 },
  "Turkmenistan":             { tourism:1, budget:3, nature:3, food:3, culture:3, langEase:2 },
  "Tuvalu":                   { tourism:1, budget:3, nature:2, food:2, culture:2, langEase:4 },

  // ── U ────────────────────────────────────────────────────────────────────
  "Uganda":                   { tourism:3, budget:4, nature:5, food:3, culture:3, langEase:5 },
  "Ukraine":                  { tourism:2, budget:4, nature:3, food:4, culture:4, langEase:2 },
  "United Arab Emirates":     { tourism:5, budget:2, nature:3, food:4, culture:3, langEase:5 },
  "United Kingdom":           { tourism:5, budget:2, nature:3, food:3, culture:5, langEase:5 },
  "United States of America": { tourism:5, budget:3, nature:5, food:4, culture:4, langEase:5 },
  "Uruguay":                  { tourism:3, budget:3, nature:3, food:3, culture:3, langEase:2 },
  "Uzbekistan":               { tourism:3, budget:5, nature:3, food:4, culture:5, langEase:2 },

  // ── V ────────────────────────────────────────────────────────────────────
  "Vanuatu":                  { tourism:2, budget:3, nature:4, food:3, culture:3, langEase:4 },
  "Venezuela":                { tourism:2, budget:3, nature:4, food:3, culture:3, langEase:2 },
  "Vietnam":                  { tourism:5, budget:5, nature:4, food:4, culture:4, langEase:2 },

  // ── Y ────────────────────────────────────────────────────────────────────
  "Yemen":                    { tourism:1, budget:4, nature:3, food:3, culture:4, langEase:2 },

  // ── Z ────────────────────────────────────────────────────────────────────
  "Zambia":                   { tourism:3, budget:4, nature:5, food:2, culture:2, langEase:5 },
  "Zimbabwe":                 { tourism:3, budget:4, nature:4, food:2, culture:3, langEase:5 },
};

export { TRAVEL_ADVISORY as T, TRAVEL_SCORES as a };
