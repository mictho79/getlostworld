globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as renderTemplate, u as unescapeHTML, b as renderHead, e as createAstro } from '../chunks/astro/server_C2HQGDfO.mjs';
import { d as detectLang, C as COUNTRY_DATA, g as getT } from '../chunks/detect_CIgPMk7_.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Map;
  const lang = detectLang(Astro2.request.headers.get("accept-language") ?? "en");
  const t = getT(lang);
  let countryDataSrc = COUNTRY_DATA;
  if (lang === "fr") {
    const fr = await import('../chunks/countryData.fr_cY2axPH-.mjs');
    countryDataSrc = { ...COUNTRY_DATA, ...fr.COUNTRY_DATA };
  }
  const sidebarFacts = {};
  for (const [name, data] of Object.entries(countryDataSrc)) {
    if (data.fact) sidebarFacts[name] = data.fact;
  }
  const SIDEBAR_ALIASES = {
    "United States": "United States of America",
    "DR Congo": "Democratic Republic of the Congo",
    "Ivory Coast": "C\xF4te d'Ivoire",
    "Republic of Congo": "Republic of the Congo",
    "Cape Verde": "Cabo Verde"
  };
  for (const [cjsName, libName] of Object.entries(SIDEBAR_ALIASES)) {
    if (sidebarFacts[libName]) sidebarFacts[cjsName] = sidebarFacts[libName];
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-y6dp7ad7> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>TerraLenses</title><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">', '</head> <body data-astro-cid-y6dp7ad7> <aside id="sidebar" data-astro-cid-y6dp7ad7> <div id="sb-welcome" data-astro-cid-y6dp7ad7> <div class="sb-globe" data-astro-cid-y6dp7ad7>\u{1F30D}</div> <div class="sb-welcome-title" data-astro-cid-y6dp7ad7>TerraLenses</div> <div class="sb-welcome-sub" data-astro-cid-y6dp7ad7>Hover a country to discover it</div> </div> <div id="sb-country" data-astro-cid-y6dp7ad7> <div id="sb-accent" data-astro-cid-y6dp7ad7></div> <div id="sb-banner" data-astro-cid-y6dp7ad7> <span id="sb-flag" data-astro-cid-y6dp7ad7></span> <div class="sb-name-block" data-astro-cid-y6dp7ad7> <div id="sb-name" data-astro-cid-y6dp7ad7></div> <div id="sb-region" data-astro-cid-y6dp7ad7></div> </div> </div> <div class="sb-divider" data-astro-cid-y6dp7ad7></div> <div class="sb-section-label" data-astro-cid-y6dp7ad7>', '</div> <div class="sb-primary-grid" data-astro-cid-y6dp7ad7> <div class="sb-primary-stat" data-astro-cid-y6dp7ad7> <span class="sb-primary-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-primary-val" id="sb-capital" data-astro-cid-y6dp7ad7>\u2014</span> </div> <div class="sb-primary-stat" data-astro-cid-y6dp7ad7> <span class="sb-primary-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-primary-val" id="sb-pop" data-astro-cid-y6dp7ad7>\u2014</span> </div> <div class="sb-primary-stat" data-astro-cid-y6dp7ad7> <span class="sb-primary-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-primary-val" id="sb-currency" data-astro-cid-y6dp7ad7>\u2014</span> </div> <div class="sb-primary-stat" data-astro-cid-y6dp7ad7> <span class="sb-primary-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-primary-val" id="sb-lang" data-astro-cid-y6dp7ad7>\u2014</span> </div> </div> <div class="sb-section-label" style="padding-top:20px;" data-astro-cid-y6dp7ad7>', '</div> <div class="sb-secondary-list" data-astro-cid-y6dp7ad7> <div class="sb-secondary-row" data-astro-cid-y6dp7ad7> <span class="sb-secondary-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-secondary-val" id="sb-area" data-astro-cid-y6dp7ad7>\u2014</span> </div> <div class="sb-secondary-row" data-astro-cid-y6dp7ad7> <span class="sb-secondary-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-secondary-val" id="sb-religion" data-astro-cid-y6dp7ad7>\u2014</span> </div> </div> <div class="sb-fact" data-astro-cid-y6dp7ad7> <span class="sb-fact-label" data-astro-cid-y6dp7ad7>', '</span> <span class="sb-fact-text" id="sb-fact" data-astro-cid-y6dp7ad7>\u2014</span> </div> </div> </aside> <div id="map" data-astro-cid-y6dp7ad7></div> <script>', `<\/script> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script> <script src="/topojson.min.js"><\/script> <script src="/countries.js"><\/script> <script>
    const mapEl = document.getElementById('map');
    const mapW  = mapEl.clientWidth;
    const worldZoom = Math.log2(mapW * 0.86 / 256);

    const map = L.map('map', {
      center: [40, -25],
      zoom: worldZoom,
      minZoom: worldZoom,
      maxZoom: 18,
      maxBounds: [[-85.06, -180], [85.06, 180]],
      maxBoundsViscosity: 1.0,
      worldCopyJump: false,
      zoomControl: true,
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

    // \u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    const ACCENT = {
      Europe:   'linear-gradient(90deg,#3b82f6,#6366f1)',
      Asia:     'linear-gradient(90deg,#f59e0b,#ef4444)',
      Africa:   'linear-gradient(90deg,#10b981,#f59e0b)',
      Americas: 'linear-gradient(90deg,#8b5cf6,#3b82f6)',
      Oceania:  'linear-gradient(90deg,#06b6d4,#10b981)',
    };

    function showCountry(info, data) {
      document.getElementById('sb-welcome').classList.add('hidden');
      document.getElementById('sb-country').classList.add('visible');
      document.getElementById('sb-accent').style.background = ACCENT[info.region] || ACCENT.Europe;
      document.getElementById('sb-flag').textContent     = info.flag     || '';
      document.getElementById('sb-name').textContent     = info.name     || '';
      document.getElementById('sb-region').textContent   = info.region   || '';
      document.getElementById('sb-capital').textContent  = data.capital  || '\u2014';
      document.getElementById('sb-pop').textContent      = data.pop      || '\u2014';
      document.getElementById('sb-currency').textContent = data.currency || '\u2014';
      document.getElementById('sb-lang').textContent     = data.lang     || '\u2014';
      document.getElementById('sb-area').textContent     = data.area     || '\u2014';
      document.getElementById('sb-religion').textContent = data.religion || '\u2014';
      document.getElementById('sb-fact').textContent     = (window.SIDEBAR_FACTS && window.SIDEBAR_FACTS[info.name]) || data.fact || '\u2014';
    }

    function showWelcome() {
      document.getElementById('sb-welcome').classList.remove('hidden');
      document.getElementById('sb-country').classList.remove('visible');
    }

    // \u2500\u2500 Country polygons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    let geojsonLayer;
    const featureLayers = {};
    let hoveredId = null;

    const STYLE_DEFAULT = { weight: 0.5, color: 'rgba(80,100,180,0.3)',  fillColor: 'rgba(0,0,0,0)', fillOpacity: 1 };
    const STYLE_HOVER   = { weight: 1.5, color: 'rgba(80,130,255,0.9)', fillColor: 'rgba(80,130,255,0.12)', fillOpacity: 1 };

    // UK constituent nations info (used instead of COUNTRY_ID_MAP for UK features)
    const UK_NATIONS_INFO = {
      'england':          { name:'England',          slug:'england',          flag:'\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}', region:'Europe' },
      'scotland':         { name:'Scotland',          slug:'scotland',         flag:'\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}', region:'Europe' },
      'wales':            { name:'Wales',             slug:'wales',            flag:'\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}', region:'Europe' },
      'northern-ireland': { name:'Northern Ireland',  slug:'northern-ireland', flag:'\u{1F3F4}\u{E0067}\u{E0062}\u{E006E}\u{E0069}\u{E0072}\u{E007F}', region:'Europe' },
    };

    // Fix antimeridian: SPLIT polygons that cross \xB1180\xB0 into two valid polygons
    // (instead of extending past 180\xB0 which renders off-screen)
    function fixAntimeridian(feature) {
      const geom = feature.geometry;
      if (!geom) return;

      // Make ring coordinates continuous, then shift so midpoint is in [-180, 180]
      function makeCont(ring) {
        const r = [ring[0].slice()];
        for (let i = 1; i < ring.length; i++) {
          let x = ring[i][0];
          const px = r[i-1][0];
          while (x - px >  180) x -= 360;
          while (px - x >  180) x += 360;
          r.push([x, ring[i][1]]);
        }
        // Shift so the ring's midpoint lands in [-180, 180]
        // (fixes rings that start near -180\xB0 and drift to e.g. -332\xB0)
        let minX = r[0][0], maxX = r[0][0];
        for (const p of r) { if (p[0] < minX) minX = p[0]; if (p[0] > maxX) maxX = p[0]; }
        const mid = (minX + maxX) / 2;
        let shift = 0;
        while (mid + shift >  180) shift -= 360;
        while (mid + shift < -180) shift += 360;
        if (shift !== 0) for (const p of r) p[0] += shift;
        return r;
      }

      function lerp(a, b, x) {
        const t = (x - a[0]) / (b[0] - a[0]);
        return [x, a[1] + t * (b[1] - a[1])];
      }

      // Split a ring that crosses 180\xB0 into two rings both within [-180, 180]
      function splitRing(ring) {
        const c = makeCont(ring);
        const n = c.length - 1; // exclude duplicate closing pt
        let minX = c[0][0], maxX = c[0][0];
        for (const p of c) { if (p[0] < minX) minX = p[0]; if (p[0] > maxX) maxX = p[0]; }
        const thresh = maxX > 180 ? 180 : minX < -180 ? -180 : null;
        if (thresh === null) return [c]; // no antimeridian crossing

        // Find the two crossing points
        const cross = [];
        for (let i = 0; i < n; i++) {
          const a = c[i], b = c[(i+1) % n];
          if ((a[0] - thresh) * (b[0] - thresh) < 0)
            cross.push({ i, pt: lerp(a, b, thresh), entering: b[0] > thresh });
        }
        if (cross.length !== 2) {
          // Fallback: just make continuous (may extend off-screen)
          return [c];
        }
        if (!cross[0].entering) cross.reverse();
        const [eC, xC] = cross; // entering / exiting the >180\xB0 zone

        // Ring A: main part, with a straight cut at the antimeridian
        const rA = [];
        for (let i = 0; i <= eC.i; i++) rA.push(c[i].slice());
        rA.push(eC.pt.slice());   // close to antimeridian going in
        rA.push(xC.pt.slice());   // re-open from antimeridian going out
        for (let i = xC.i + 1; i < n; i++) rA.push(c[i].slice());
        rA.push(rA[0].slice());   // close ring

        // Ring B: the stub past the antimeridian, shifted back into [-180, 180]
        const shift = thresh === 180 ? -360 : 360;
        const rB = [[eC.pt[0] + shift, eC.pt[1]]];
        for (let i = eC.i + 1; i <= xC.i; i++) rB.push([c[i][0] + shift, c[i][1]]);
        rB.push([xC.pt[0] + shift, xC.pt[1]]);
        rB.push(rB[0].slice());   // close ring

        return [rA, rB];
      }

      const polys = geom.type === 'MultiPolygon' ? geom.coordinates : [geom.coordinates];
      const newPolys = [];
      for (const poly of polys) {
        const rings = splitRing(poly[0]);
        for (const r of rings) newPolys.push([r]);
      }
      feature.geometry = { type: 'MultiPolygon', coordinates: newPolys };

    }

    // Point-in-polygon (ray casting) \u2014 skips antimeridian edges (jumps > 180\xB0)
    function ptInRing(lng, lat, ring) {
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
        if (Math.abs(xi - xj) > 180) continue; // skip antimeridian-crossing edges
        if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi))
          inside = !inside;
      }
      return inside;
    }

    // Pre-computed bboxes for fast rejection
    const featureBboxes = {};

    function ptInFeature(lng, lat, feature) {
      const bb = featureBboxes[feature.id];
      if (!bb) return false;
      // Test lng and lng+360 to handle antimeridian-normalized polygons
      for (const testLng of [lng, lng + 360]) {
        if (testLng < bb[0] || testLng > bb[2] || lat < bb[1] || lat > bb[3]) continue;
        const g = feature.geometry;
        const polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
        for (const poly of polys) {
          if (ptInRing(testLng, lat, poly[0])) return true;
        }
      }
      return false;
    }

    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json')
      .then(r => r.json())
      .then(world => {
        const geojson = topojson.feature(world, world.objects.countries);

        // Remove UK (826) from world-atlas \u2014 replaced by the constituent nations layer below
        geojson.features = geojson.features.filter(f => String(f.id) !== '826');

        // Fix antimeridian first so Russia's ring is split into proper eastern/western halves
        // instead of spanning x=[-180,180] which makes its bbox cover the entire globe.
        geojson.features.forEach(fixAntimeridian);

        // Drop sub-polygons that are eastern-hemisphere countries with fragments
        // at very negative longitudes (e.g. Russia's tiny bits near Alaska).
        geojson.features.forEach(f => {
          if (!f.geometry || f.geometry.type !== 'MultiPolygon') return;
          const polys = f.geometry.coordinates;
          if (polys.length < 2) return;
          const ctr = p => { let s=0; for (const [x] of p[0]) s+=x; return s/p[0].length; };
          const centers = polys.map(ctr);
          const mainIdx = polys.map((p,i)=>[i,p[0].length]).sort((a,b)=>b[1]-a[1])[0][0];
          if (centers[mainIdx] > 0)
            f.geometry.coordinates = polys.filter((_,i) => centers[i] > -50);
        });

        // Build hitRings and featureBboxes from the now-fixed coordinates
        const hitRings = new Map();
        for (const f of geojson.features) {
          const g = f.geometry;
          if (!g) continue;
          const polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
          const newRings = polys.map(poly => poly[0].map(pt => [pt[0], pt[1]]));
          if (hitRings.has(f.id)) hitRings.get(f.id).push(...newRings);
          else hitRings.set(f.id, newRings);
          let [x0,y0,x1,y1] = featureBboxes[f.id] || [Infinity,Infinity,-Infinity,-Infinity];
          for (const poly of polys)
            for (const [x,y] of poly[0]) {
              if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y;
            }
          featureBboxes[f.id] = [x0,y0,x1,y1];
        }

        geojsonLayer = L.geoJSON(geojson, {
          style: STYLE_DEFAULT,
          onEachFeature: (feature, layer) => {
            // A feature ID may have multiple layers (e.g. Russia split at antimeridian)
            if (!featureLayers[feature.id]) featureLayers[feature.id] = [];
            featureLayers[feature.id].push(layer);
          }
        }).addTo(map);

        // \u2500\u2500 Custom overlay for countries absent from world-atlas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
        // Kosovo (383) is not in world-atlas; add its approximate polygon.
        const CUSTOM_FEATURES = [
          { id: '383', coordinates: [[[20.03,42.93],[20.28,42.98],[20.40,43.01],[20.50,43.08],[20.78,43.24],[20.82,43.27],[21.15,43.10],[21.55,43.03],[21.79,42.90],[21.79,42.30],[21.56,42.33],[21.30,42.15],[21.02,42.07],[20.63,42.00],[20.55,42.21],[20.34,42.43],[20.08,42.66],[20.03,42.93]]] },
        ];
        for (const cf of CUSTOM_FEATURES) {
          const ring = cf.coordinates[0];
          let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;
          for (const [x,y] of ring) { if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y; }
          featureBboxes[cf.id] = [x0,y0,x1,y1];
          hitRings.set(cf.id, [ring.map(pt=>[pt[0],pt[1]])]);
          const layer = L.geoJSON({ type:'Feature', id:cf.id, geometry:{ type:'Polygon', coordinates:cf.coordinates } }, { style: STYLE_DEFAULT });
          if (!featureLayers[cf.id]) featureLayers[cf.id] = [];
          layer.eachLayer(l => featureLayers[cf.id].push(l));
          layer.addTo(map);
          // Inject into geojson.features so the mousemove hit-test loop picks it up
          geojson.features.push({ id: cf.id, geometry: { type: 'Polygon', coordinates: cf.coordinates } });
        }

        // \u2500\u2500 UK constituent nations layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
        fetch('/uk-nations.geojson')
          .then(r => r.json())
          .then(ukData => {
            for (const f of ukData.features) {
              const id = f.properties.slug;
              f.id = id;

              // Register for hit-testing
              geojson.features.push(f);

              const geom = f.geometry;
              const polys = geom.type === 'MultiPolygon' ? geom.coordinates : [geom.coordinates];
              const rings = [];
              let x0=Infinity, x1=-Infinity, y0=Infinity, y1=-Infinity;
              for (const poly of polys) {
                rings.push(poly[0].map(pt => [pt[0], pt[1]]));
                for (const [x, y] of poly[0]) {
                  if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y;
                }
              }
              hitRings.set(id, rings);
              featureBboxes[id] = [x0, y0, x1, y1];

              // Add Leaflet layer (rendered on top of world layer)
              const layer = L.geoJSON(f, { style: STYLE_DEFAULT });
              featureLayers[id] = [];
              layer.eachLayer(l => featureLayers[id].push(l));
              layer.addTo(map);
            }
          });

        // \u2500\u2500 Custom hover via mousemove \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
        map.on('mousemove', (e) => {
          const { lat, lng } = e.latlng;
          let foundId = null;
          let foundArea = Infinity;
          const checkedIds = new Set();
          for (const f of geojson.features) {
            if (checkedIds.has(f.id)) continue;
            checkedIds.add(f.id);
            const bb = featureBboxes[f.id];
            if (!bb || lng < bb[0]-1 || lng > bb[2]+1 || lat < bb[1]-1 || lat > bb[3]+1) continue;
            const rings = hitRings.get(f.id);
            if (!rings) continue;
            for (const ring of rings) {
              if (ptInRing(lng, lat, ring)) {
                const area = (bb[2] - bb[0]) * (bb[3] - bb[1]);
                if (area < foundArea) { foundId = f.id; foundArea = area; }
                break;
              }
            }
          }

          if (foundId === hoveredId) return;
          if (hoveredId && featureLayers[hoveredId]) featureLayers[hoveredId].forEach(l => l.setStyle(STYLE_DEFAULT));
          hoveredId = foundId;
          if (foundId) {
            const info = COUNTRY_ID_MAP[+foundId] || UK_NATIONS_INFO[foundId];
            if (info && featureLayers[foundId]) {
              featureLayers[foundId].forEach(l => { l.setStyle(STYLE_HOVER); l.bringToFront(); });
              showCountry(info, COUNTRY_DATA[info.name] || {});
              mapEl.style.cursor = 'pointer';
            }
          } else {
            showWelcome();
            mapEl.style.cursor = '';
          }
        });

        map.on('mouseout', () => {
          if (hoveredId && featureLayers[hoveredId]) featureLayers[hoveredId].forEach(l => l.setStyle(STYLE_DEFAULT));
          hoveredId = null; showWelcome(); mapEl.style.cursor = '';
        });

        map.on('click', () => {
          if (!hoveredId) return;
          const info = COUNTRY_ID_MAP[+hoveredId] || UK_NATIONS_INFO[hoveredId];
          if (info) window.location.href = '/country/' + info.slug;
        });
      });
  <\/script> </body> </html>`])), renderHead(), t.keyFacts, t.capitalLabel, t.populationLabel, t.currencyLabel, t.languageLabel, t.moreInfo, t.areaLabel, t.religionLabel, t.didYouKnow, unescapeHTML(`window.SIDEBAR_FACTS = ${JSON.stringify(sidebarFacts)};`));
}, "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/map.astro", void 0);

const $$file = "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/map.astro";
const $$url = "/map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Map,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
