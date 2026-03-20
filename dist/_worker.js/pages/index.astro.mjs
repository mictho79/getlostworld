globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, u as unescapeHTML, d as renderHead, a as addAttribute, e as createAstro } from '../chunks/astro/server_CzKrnJyY.mjs';
import { d as detectLang, a as COUNTRY_VIBES, C as COUNTRY_DATA, s as slugify } from '../chunks/detect_Dmjs2yL7.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = detectLang(Astro2.request.headers.get("accept-language") ?? "en");
  let vibesSrc = COUNTRY_VIBES;
  let dataSrc = COUNTRY_DATA;
  if (lang === "fr") {
    const fr = await import('../chunks/countryData.fr_cY2axPH-.mjs');
    vibesSrc = fr.COUNTRY_VIBES;
    dataSrc = fr.COUNTRY_DATA;
  }
  const globeData = {};
  for (const [name, _vibe] of Object.entries(COUNTRY_VIBES)) {
    const vibe = vibesSrc[name] ?? _vibe;
    const d = dataSrc[name] ?? COUNTRY_DATA[name];
    globeData[name] = { vibe, fact: d?.fact ?? "", slug: slugify(name) };
  }
  const countryList = Object.keys(globeData).sort().map((n) => ({
    name: n,
    slug: globeData[n].slug,
    vibe: globeData[n].vibe
  }));
  return renderTemplate(_a || (_a = __template(["<html", ' data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>World Explorer \u2014 Get lost in the world</title><meta name="description" content="Explore interactive facts, insights, and comparisons for every country on Earth. Powered by a beautiful 3D globe."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">', '</head> <body data-astro-cid-j7pv25f6> <!-- Loading --> <div id="loading" data-astro-cid-j7pv25f6> <div class="ld-ring" data-astro-cid-j7pv25f6></div> <div class="ld-text" data-astro-cid-j7pv25f6>Loading&hellip;</div> </div> <!-- Globe (fills full screen as background layer) --> <div id="globe-container" data-astro-cid-j7pv25f6></div> <!-- Left panel --> <aside id="panel" data-astro-cid-j7pv25f6> <div id="panel-header" data-astro-cid-j7pv25f6> <div class="site-badge" data-astro-cid-j7pv25f6> <div class="badge-dot" data-astro-cid-j7pv25f6></div>\nWorld Explorer\n</div> <h1 id="site-title" data-astro-cid-j7pv25f6>Get lost<br data-astro-cid-j7pv25f6>in <em data-astro-cid-j7pv25f6>the world</em></h1> <p id="tagline" data-astro-cid-j7pv25f6>Explore 195 countries \u2014 cultures, landscapes, facts, and comparisons.</p> </div> <!-- Search --> <div id="search-wrapper" data-astro-cid-j7pv25f6> <div id="search-box" data-astro-cid-j7pv25f6> <span class="search-icon" data-astro-cid-j7pv25f6> <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6> <circle cx="8.5" cy="8.5" r="5.5" data-astro-cid-j7pv25f6></circle><path d="M14 14l3.5 3.5" data-astro-cid-j7pv25f6></path> </svg> </span> <input id="search" type="text" placeholder="Search for a country\u2026" autocomplete="off" spellcheck="false" data-astro-cid-j7pv25f6> <div id="ac-list" data-astro-cid-j7pv25f6></div> </div> </div> <!-- CTA --> <div id="cta-wrap" data-astro-cid-j7pv25f6> <a href="/map" id="cta" data-astro-cid-j7pv25f6> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <circle cx="12" cy="12" r="10" data-astro-cid-j7pv25f6></circle> <line x1="2" y1="12" x2="22" y2="12" data-astro-cid-j7pv25f6></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-j7pv25f6></path> </svg>\nExplore the map\n</a> </div> <!-- Stats --> <div id="stats" data-astro-cid-j7pv25f6> <div class="stat" data-astro-cid-j7pv25f6><div class="stat-num" data-astro-cid-j7pv25f6>195</div><div class="stat-lbl" data-astro-cid-j7pv25f6>Countries</div></div> <div class="stat" data-astro-cid-j7pv25f6><div class="stat-num" data-astro-cid-j7pv25f6>7</div><div class="stat-lbl" data-astro-cid-j7pv25f6>Continents</div></div> <div class="stat" data-astro-cid-j7pv25f6><div class="stat-num" data-astro-cid-j7pv25f6>8B+</div><div class="stat-lbl" data-astro-cid-j7pv25f6>People</div></div> </div> <div class="sep" data-astro-cid-j7pv25f6></div> <div id="spacer" data-astro-cid-j7pv25f6></div> <!-- Country card --> <div id="country-card" data-astro-cid-j7pv25f6> <div id="card-header" data-astro-cid-j7pv25f6> <span id="card-flag" data-astro-cid-j7pv25f6>\u{1F30D}</span> <div id="card-info" data-astro-cid-j7pv25f6> <div id="card-name" data-astro-cid-j7pv25f6>\u2014</div> <div id="card-vibe" data-astro-cid-j7pv25f6>\u2014</div> </div> </div> <div id="card-fact" data-astro-cid-j7pv25f6></div> <a id="card-link" href="#" data-astro-cid-j7pv25f6></a> </div> </aside> <!-- Globe hint --> <div id="globe-hint" data-astro-cid-j7pv25f6>Click any country to explore</div> <!-- Data injected from server --> <script>', `<\/script> <!-- Static deps loaded synchronously before paint --> <script src="/topojson.min.js"><\/script> <script src="/countries.js"><\/script> <script>
  (function () {
    'use strict';

    var GD = window._GD || {};
    var CL = window._CL || [];

    /* \u2500\u2500 Search autocomplete \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
    var searchEl = document.getElementById('search');
    var acList   = document.getElementById('ac-list');

    function renderAC(matches) {
      if (!matches.length) { acList.innerHTML = ''; return; }
      acList.innerHTML = matches.map(function(c) {
        return '<div class="ac-item" data-slug="' + c.slug + '">' +
               '<span class="ac-name">' + c.name + '</span>' +
               '</div>';
      }).join('');
    }

    searchEl.addEventListener('input', function() {
      var q = searchEl.value.toLowerCase().trim();
      if (!q) { acList.innerHTML = ''; return; }
      renderAC(CL.filter(function(c) {
        return c.name.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 7));
    });

    acList.addEventListener('click', function(e) {
      var item = e.target.closest('.ac-item');
      if (item) window.location.href = '/country/' + item.dataset.slug;
    });

    searchEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var first = acList.querySelector('.ac-item');
        if (first) window.location.href = '/country/' + first.dataset.slug;
      }
      if (e.key === 'Escape') { acList.innerHTML = ''; }
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('#search-box')) acList.innerHTML = '';
    });

    /* \u2500\u2500 Lazy-load Three.js after first paint \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
    var container = document.getElementById('globe-container');
    var loading   = document.getElementById('loading');

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        var s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        s.onload = initGlobe;
        s.onerror = function() { loading.classList.add('fade'); };
        document.head.appendChild(s);
      });
    });

    /* \u2500\u2500 Three.js globe \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
    function initGlobe() {
      var W = container.clientWidth;
      var H = container.clientHeight;

      var scene  = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 200);
      camera.position.z = 2.6;

      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.domElement.style.cssText = 'position:absolute;inset:0;display:block;';
      container.appendChild(renderer.domElement);

      /* \u2500\u2500 Globe sphere \u2014 custom shader: ocean gradient + specular \u2500\u2500 */
      /* At globe.rotation.y = 0, lng = -90\xB0 faces the camera (+Z).   */
      /* tgtRotY formula: -(lng * \u03C0/180) - \u03C0/2                         */
      var globeMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.ShaderMaterial({
          vertexShader: [
            'varying vec3 vN;',
            'varying vec3 vV;',
            'void main(){',
            '  vec4 mv=modelViewMatrix*vec4(position,1.0);',
            '  vN=normalize(normalMatrix*normal);',
            '  vV=normalize(-mv.xyz);',
            '  gl_Position=projectionMatrix*mv;',
            '}'
          ].join('\\n'),
          fragmentShader: [
            'varying vec3 vN;',
            'varying vec3 vV;',
            'void main(){',
            /* Fresnel: 0 at centre, 1 at limb \u2014 drives edge darkening */
            '  float f=pow(1.0-max(0.0,dot(vN,vV)),2.8);',
            /* Ocean: #0a1628 at centre \u2192 #050d1e at edges */
            '  vec3 col=mix(vec3(0.039,0.086,0.157),vec3(0.020,0.051,0.118),f);',
            /* Subtle diffuse fill */
            '  vec3 L=normalize(vec3(-0.65,0.70,0.40));',
            '  col+=vec3(0.015,0.030,0.060)*max(0.0,dot(vN,L));',
            /* Soft specular highlight \u2014 upper left */
            '  vec3 H=normalize(L+vV);',
            '  col+=vec3(0.10,0.14,0.22)*pow(max(0.0,dot(vN,H)),110.0);',
            '  gl_FragColor=vec4(col,1.0);',
            '}'
          ].join('\\n'),
        })
      );
      var globe = new THREE.Object3D();
      globe.add(globeMesh);
      globe.rotation.z = 23.5 * Math.PI / 180;
      scene.add(globe);

      /* \u2500\u2500 Atmosphere \u2014 thin blue halo, barely visible \u2500\u2500 */
      globe.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.016, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x64a0ff, transparent: true, opacity: 0.12, side: THREE.BackSide })
      ));

      /* Lights for atmosphere spheres (globe itself uses the shader above) */
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      var sun = new THREE.DirectionalLight(0x88aaff, 0.9);
      sun.position.set(5, 3, 5);
      scene.add(sun);

      /* \u2500\u2500 Stars \u2500\u2500 */
      (function() {
        var pos = [];
        for (var i = 0; i < 2500; i++) {
          var th = Math.random() * Math.PI * 2;
          var ph = Math.acos(2 * Math.random() - 1);
          var r  = 45 + Math.random() * 8;
          pos.push(r * Math.sin(ph) * Math.cos(th),
                   r * Math.cos(ph),
                   r * Math.sin(ph) * Math.sin(th));
        }
        var sg = new THREE.BufferGeometry();
        sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        scene.add(new THREE.Points(sg,
          new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, transparent: true, opacity: 0.65 })
        ));
      })();

      /* \u2500\u2500 Coordinate helpers \u2500\u2500 */
      function ll3(lat, lng, r) {
        r = r || 1.002;
        var phi   = (90 - lat)  * Math.PI / 180;
        var theta = (lng + 180) * Math.PI / 180;
        return new THREE.Vector3(
          -r * Math.sin(phi) * Math.cos(theta),
           r * Math.cos(phi),
           r * Math.sin(phi) * Math.sin(theta)
        );
      }

      function v3ll(v) {
        var lat = 90 - Math.acos(Math.max(-1, Math.min(1, v.y))) * 180 / Math.PI;
        var th  = Math.atan2(v.z, -v.x);
        if (th < 0) th += 2 * Math.PI;
        return { lat: lat, lng: th * 180 / Math.PI - 180 };
      }

      /* \u2500\u2500 Lat/lng grid \u2014 every 30\xB0 \u2500\u2500 */
      (function() {
        var pos   = [];
        var steps = 64;
        for (var lat = -60; lat <= 60; lat += 30) {
          for (var i = 0; i < steps; i++) {
            var lng1 = (i / steps) * 360 - 180;
            var lng2 = ((i + 1) / steps) * 360 - 180;
            var a = ll3(lat, lng1, 1.003); var b = ll3(lat, lng2, 1.003);
            pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
        for (var lng = -180; lng < 180; lng += 30) {
          for (var i = 0; i < steps; i++) {
            var lat1 = (i / steps) * 180 - 90;
            var lat2 = ((i + 1) / steps) * 180 - 90;
            var a = ll3(lat1, lng, 1.003); var b = ll3(lat2, lng, 1.003);
            pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
        var gg = new THREE.BufferGeometry();
        gg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        globe.add(new THREE.LineSegments(gg, new THREE.LineBasicMaterial({
          color: 0xffffff, transparent: true, opacity: 0.04, depthWrite: false
        })));
      })();

      /* \u2500\u2500 Cloud layer \u2014 canvas texture, separate node drifts slower \u2500\u2500 */
      var cloudNode = new THREE.Object3D();
      var cloudLag  = 0;
      (function() {
        var cv = document.createElement('canvas');
        cv.width = 512; cv.height = 256;
        var cx = cv.getContext('2d');
        cx.clearRect(0, 0, 512, 256);
        var seed = 42;
        function rand() { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296; }
        cx.fillStyle = 'rgba(255,255,255,0.14)';
        for (var ci = 0; ci < 70; ci++) {
          var x = rand() * 512, y = rand() * 256;
          cx.beginPath();
          cx.ellipse(x, y, 18 + rand() * 55, 6 + rand() * 16, rand() * Math.PI, 0, Math.PI * 2);
          cx.fill();
        }
        var tex = new THREE.CanvasTexture(cv);
        cloudNode.add(new THREE.Mesh(
          new THREE.SphereGeometry(1.013, 32, 32),
          new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.18, depthWrite: false })
        ));
        scene.add(cloudNode);
      })();

      /* \u2500\u2500 State \u2500\u2500 */
      var bboxes    = {};
      var features  = [];
      var hlObjects = []; /* [border, innerGlow, outerGlow] */
      var autoTimer = null;
      var tgtRotY   = 0;
      var tgtRotX   = 0;
      var flying    = false;
      var raycaster = new THREE.Raycaster();
      var mouse     = new THREE.Vector2();

      /* \u2500\u2500 Point-in-polygon \u2500\u2500 */
      function ptInRing(lng, lat, ring) {
        var inside = false;
        for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
          var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
          if (Math.abs(xi - xj) > 180) continue;
          if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi))
            inside = !inside;
        }
        return inside;
      }

      function findFeature(lat, lng) {
        var best = null, bestArea = Infinity;
        for (var i = 0; i < features.length; i++) {
          var f  = features[i];
          var bb = bboxes[f.id];
          if (!bb || lng < bb[0]-1 || lng > bb[2]+1 || lat < bb[1]-1 || lat > bb[3]+1) continue;
          var g = f.geometry;
          if (!g) continue;
          var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
          for (var p = 0; p < polys.length; p++) {
            if (ptInRing(lng, lat, polys[p][0])) {
              var area = (bb[2]-bb[0]) * (bb[3]-bb[1]);
              if (area < bestArea) { best = f; bestArea = area; }
              break;
            }
          }
        }
        return best;
      }

      /* \u2500\u2500 Line geometry helpers \u2500\u2500 */
      function ringToPos(ring, r) {
        var pos = [];
        for (var j = 0; j < ring.length - 1; j++) {
          var a = ll3(ring[j][1],     ring[j][0],     r);
          var b = ll3(ring[j+1][1],   ring[j+1][0],   r);
          pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
        return pos;
      }

      function ringToLines(rings, r) {
        var pos = [];
        for (var i = 0; i < rings.length; i++) pos = pos.concat(ringToPos(rings[i], r));
        return pos;
      }

      function featureAllRings(f) {
        var g = f.geometry;
        if (!g) return [];
        var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
        var out = [];
        for (var i = 0; i < polys.length; i++)
          for (var r = 0; r < polys[i].length; r++) out.push(polys[i][r]);
        return out;
      }

      /* \u2500\u2500 Grid-sampled highlight \u2014 correct for concave + antimeridian polygons \u2500\u2500 */
      function setHighlight(f) {
        for (var k = 0; k < hlObjects.length; k++) globe.remove(hlObjects[k]);
        hlObjects = [];
        if (!f) return;
        var g = f.geometry;
        if (!g) return;
        var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];

        /* Unwrap ring: adjust each lng so no consecutive jump exceeds \xB1180\xB0 */
        function unwrap(ring) {
          var out = [[ring[0][0], ring[0][1]]];
          for (var i = 1; i < ring.length; i++) {
            var prev = out[i - 1][0], cur = ring[i][0];
            var d = cur - prev;
            if (d >  180) cur -= 360;
            else if (d < -180) cur += 360;
            out.push([cur, ring[i][1]]);
          }
          return out;
        }

        /* Point-in-ring on unwrapped coordinates (no antimeridian skip needed) */
        function pip(lo, la, ring) {
          var inside = false;
          for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
            var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
            if (((yi > la) !== (yj > la)) &&
                (lo < (xj - xi) * (la - yi) / (yj - yi) + xi))
              inside = !inside;
          }
          return inside;
        }

        /* Normalise any longitude value to [-180, 180] */
        function norm(l) { return ((l % 360) + 540) % 360 - 180; }

        var STEP = 0.5; /* degrees \u2014 finer than 110m TopoJSON resolution */
        var fillVerts = [], fillIdx = [], vIdx = 0;

        for (var pi = 0; pi < polys.length; pi++) {
          var poly   = polys[pi];
          var outer  = unwrap(poly[0]);

          /* Bbox of unwrapped outer ring */
          var x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
          for (var j = 0; j < outer.length; j++) {
            if (outer[j][0] < x0) x0 = outer[j][0];
            if (outer[j][0] > x1) x1 = outer[j][0];
            if (outer[j][1] < y0) y0 = outer[j][1];
            if (outer[j][1] > y1) y1 = outer[j][1];
          }
          y0 = Math.max(y0, -89); y1 = Math.min(y1, 89);

          /* Unwrap holes */
          var holes = [];
          for (var h = 1; h < poly.length; h++) holes.push(unwrap(poly[h]));

          /* Scan grid \u2014 every cell whose centre falls inside the polygon */
          for (var la = y0; la < y1; la += STEP) {
            var cLa = la + STEP * 0.5;
            for (var lo = x0; lo < x1; lo += STEP) {
              var cLo = lo + STEP * 0.5;
              if (!pip(cLo, cLa, outer)) continue;
              var inHole = false;
              for (var h = 0; h < holes.length; h++) {
                if (pip(cLo, cLa, holes[h])) { inHole = true; break; }
              }
              if (inHole) continue;

              /* Map quad corners to sphere at r = 1.001 */
              var va = ll3(la,        norm(lo),        1.001);
              var vb = ll3(la,        norm(lo + STEP), 1.001);
              var vc = ll3(la + STEP, norm(lo + STEP), 1.001);
              var vd = ll3(la + STEP, norm(lo),        1.001);
              fillVerts.push(va.x, va.y, va.z, vb.x, vb.y, vb.z,
                             vc.x, vc.y, vc.z, vd.x, vd.y, vd.z);
              fillIdx.push(vIdx, vIdx+1, vIdx+2, vIdx, vIdx+2, vIdx+3);
              vIdx += 4;
            }
          }
        }

        if (fillVerts.length > 0) {
          var fg = new THREE.BufferGeometry();
          fg.setAttribute('position', new THREE.Float32BufferAttribute(fillVerts, 3));
          fg.setIndex(fillIdx);
          var fillMesh = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({
            color: 0xf0a500, transparent: true, opacity: 0.35,
            side: THREE.DoubleSide, depthWrite: false
          }));
          globe.add(fillMesh);
          hlObjects.push(fillMesh);
        }

        /* Line border layers */
        var rings  = featureAllRings(f);
        var layers = [
          [1.003, 0xf0a500, 0.95],
          [1.010, 0xf59e0b, 0.28],
          [1.022, 0xfbbf24, 0.10],
        ];
        for (var l = 0; l < layers.length; l++) {
          var rr = layers[l][0], col = layers[l][1], op = layers[l][2];
          var pos = [];
          for (var ri = 0; ri < rings.length; ri++) pos = pos.concat(ringToPos(rings[ri], rr));
          var geom = new THREE.BufferGeometry();
          geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
          var ls = new THREE.LineSegments(geom, new THREE.LineBasicMaterial({
            color: col, transparent: true, opacity: op,
            blending: THREE.AdditiveBlending, depthWrite: false
          }));
          globe.add(ls);
          hlObjects.push(ls);
        }
      }

      /* \u2500\u2500 Centroid of largest ring \u2500\u2500 */
      function centroid(f) {
        var g     = f.geometry;
        var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
        var best  = polys[0][0];
        for (var i = 0; i < polys.length; i++)
          if (polys[i][0].length > best.length) best = polys[i][0];
        var lo = 0, la = 0;
        for (var j = 0; j < best.length; j++) { lo += best[j][0]; la += best[j][1]; }
        return { lat: la / best.length, lng: lo / best.length };
      }

      /* \u2500\u2500 Card update \u2500\u2500 */
      function showCard(f, fly) {
        setHighlight(f);
        var p = f.properties;
        document.getElementById('card-flag').textContent = p.flag;
        document.getElementById('card-name').textContent = p.name;
        document.getElementById('card-vibe').textContent = p.vibe;
        document.getElementById('card-fact').textContent = p.fact;
        var lnk = document.getElementById('card-link');
        lnk.href        = '/country/' + p.slug;
        lnk.textContent = 'Discover ' + p.name + ' ';
        document.getElementById('country-card').classList.add('visible');

        if (fly) {
          var c  = centroid(f);
          /* Globe rotation needed to bring c.lng to face the camera.
             At rotation.y = 0, lng = -90\xB0 faces camera (+Z axis).
             Formula: tgtY = -(lng * \u03C0/180) - \u03C0/2                    */
          var tY = -(c.lng * Math.PI / 180) - Math.PI * 0.5;
          /* Shortest path from current rotation */
          var dY = tY - globe.rotation.y;
          while (dY >  Math.PI) dY -= 2 * Math.PI;
          while (dY < -Math.PI) dY += 2 * Math.PI;
          tgtRotY = globe.rotation.y + dY;
          tgtRotX = c.lat * Math.PI / 180;
          flying  = true;
        }
      }

      /* \u2500\u2500 Auto-fly \u2500\u2500 */
      var vibeFeatures = [];

      function flyRandom() {
        if (!vibeFeatures.length) return;
        showCard(vibeFeatures[Math.floor(Math.random() * vibeFeatures.length)], true);
        scheduleAutoFly(6000);
      }

      function scheduleAutoFly(delay) {
        clearTimeout(autoTimer);
        autoTimer = setTimeout(flyRandom, delay);
      }

      /* \u2500\u2500 Interaction \u2500\u2500 */
      renderer.domElement.addEventListener('click', function(e) {
        var rect = renderer.domElement.getBoundingClientRect();
        mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var hits = raycaster.intersectObject(globeMesh, false);
        if (!hits.length) return;
        var local = globe.worldToLocal(hits[0].point.clone());
        var ll    = v3ll(local);
        var f     = findFeature(ll.lat, ll.lng);
        if (f && f.properties.slug) window.location.href = '/country/' + f.properties.slug;
      });

      renderer.domElement.addEventListener('mousemove', function(e) {
        var rect = renderer.domElement.getBoundingClientRect();
        mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        renderer.domElement.style.cursor =
          raycaster.intersectObject(globeMesh, false).length ? 'pointer' : 'default';
      });

      window.addEventListener('resize', function() {
        W = container.clientWidth; H = container.clientHeight;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
      });

      /* \u2500\u2500 Render loop \u2500\u2500 */
      function animate() {
        requestAnimationFrame(animate);

        if (flying) {
          var dY = tgtRotY - globe.rotation.y;
          var dX = tgtRotX - globe.rotation.x;
          globe.rotation.y += dY * 0.055;
          globe.rotation.x += dX * 0.055;
          if (Math.abs(dY) < 0.0008 && Math.abs(dX) < 0.0008) {
            globe.rotation.y = tgtRotY;
            globe.rotation.x = tgtRotX;
            flying = false;
          }
        } else {
          globe.rotation.y += 0.0012;
          tgtRotY = globe.rotation.y;
        }

        /* Cloud node tracks globe rotation, drifts slightly in Y */
        cloudNode.rotation.x = globe.rotation.x;
        cloudNode.rotation.z = globe.rotation.z;
        cloudNode.rotation.y = globe.rotation.y - cloudLag;
        if (!flying) cloudLag += 0.00008;

        /* Pulse the inner + outer glow layers */
        if (hlObjects.length >= 3) {
          var p = 0.5 + 0.5 * Math.sin(Date.now() * 0.003);
          var off = hlObjects.length === 4 ? 1 : 0;
          hlObjects[off + 1].material.opacity = 0.12 + 0.22 * p;
          hlObjects[off + 2].material.opacity = 0.03 + 0.10 * p;
        }

        renderer.render(scene, camera);
      }
      animate();

      /* \u2500\u2500 Fetch TopoJSON, build borders + feature data \u2500\u2500 */
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(function(r) { return r.json(); })
        .then(function(world) {
          var idMap = window.COUNTRY_ID_MAP || {};

          /* All-borders \u2014 single LineSegments, white at low opacity */
          var mesh   = topojson.mesh(world, world.objects.countries);
          var allPos = ringToLines(mesh.coordinates, 1.002);
          var bg     = new THREE.BufferGeometry();
          bg.setAttribute('position', new THREE.Float32BufferAttribute(allPos, 3));
          globe.add(new THREE.LineSegments(bg,
            new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })
          ));

          /* Per-feature: metadata + bbox for click detection */
          var geojson = topojson.feature(world, world.objects.countries);
          features = geojson.features.map(function(f) {
            var info = idMap[+f.id];
            if (!info) return null;
            var gd = GD[info.name];
            var g  = f.geometry;
            if (g) {
              var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
              var x0=180,x1=-180,y0=90,y1=-90;
              for (var i = 0; i < polys.length; i++)
                for (var j = 0; j < polys[i][0].length; j++) {
                  var pt = polys[i][0][j];
                  if(pt[0]<x0)x0=pt[0]; if(pt[0]>x1)x1=pt[0];
                  if(pt[1]<y0)y0=pt[1]; if(pt[1]>y1)y1=pt[1];
                }
              bboxes[f.id] = [x0, y0, x1, y1];
            }
            return Object.assign({}, f, {
              properties: {
                name: info.name, flag: info.flag || '',
                slug: gd ? gd.slug : '', vibe: gd ? gd.vibe : '', fact: gd ? gd.fact : ''
              }
            });
          }).filter(function(f) { return f && f.properties.name; });

          vibeFeatures = features.filter(function(f) { return f.properties.vibe; });

          loading.classList.add('fade');
          setTimeout(function() { if (loading.parentNode) loading.parentNode.removeChild(loading); }, 750);
          scheduleAutoFly(1200);
        })
        .catch(function(err) {
          console.error('Globe data failed:', err);
          loading.classList.add('fade');
        });
    } /* end initGlobe */

  })();
  <\/script> </body> </html>`], ["<html", ' data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>World Explorer \u2014 Get lost in the world</title><meta name="description" content="Explore interactive facts, insights, and comparisons for every country on Earth. Powered by a beautiful 3D globe."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">', '</head> <body data-astro-cid-j7pv25f6> <!-- Loading --> <div id="loading" data-astro-cid-j7pv25f6> <div class="ld-ring" data-astro-cid-j7pv25f6></div> <div class="ld-text" data-astro-cid-j7pv25f6>Loading&hellip;</div> </div> <!-- Globe (fills full screen as background layer) --> <div id="globe-container" data-astro-cid-j7pv25f6></div> <!-- Left panel --> <aside id="panel" data-astro-cid-j7pv25f6> <div id="panel-header" data-astro-cid-j7pv25f6> <div class="site-badge" data-astro-cid-j7pv25f6> <div class="badge-dot" data-astro-cid-j7pv25f6></div>\nWorld Explorer\n</div> <h1 id="site-title" data-astro-cid-j7pv25f6>Get lost<br data-astro-cid-j7pv25f6>in <em data-astro-cid-j7pv25f6>the world</em></h1> <p id="tagline" data-astro-cid-j7pv25f6>Explore 195 countries \u2014 cultures, landscapes, facts, and comparisons.</p> </div> <!-- Search --> <div id="search-wrapper" data-astro-cid-j7pv25f6> <div id="search-box" data-astro-cid-j7pv25f6> <span class="search-icon" data-astro-cid-j7pv25f6> <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6> <circle cx="8.5" cy="8.5" r="5.5" data-astro-cid-j7pv25f6></circle><path d="M14 14l3.5 3.5" data-astro-cid-j7pv25f6></path> </svg> </span> <input id="search" type="text" placeholder="Search for a country\u2026" autocomplete="off" spellcheck="false" data-astro-cid-j7pv25f6> <div id="ac-list" data-astro-cid-j7pv25f6></div> </div> </div> <!-- CTA --> <div id="cta-wrap" data-astro-cid-j7pv25f6> <a href="/map" id="cta" data-astro-cid-j7pv25f6> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <circle cx="12" cy="12" r="10" data-astro-cid-j7pv25f6></circle> <line x1="2" y1="12" x2="22" y2="12" data-astro-cid-j7pv25f6></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-j7pv25f6></path> </svg>\nExplore the map\n</a> </div> <!-- Stats --> <div id="stats" data-astro-cid-j7pv25f6> <div class="stat" data-astro-cid-j7pv25f6><div class="stat-num" data-astro-cid-j7pv25f6>195</div><div class="stat-lbl" data-astro-cid-j7pv25f6>Countries</div></div> <div class="stat" data-astro-cid-j7pv25f6><div class="stat-num" data-astro-cid-j7pv25f6>7</div><div class="stat-lbl" data-astro-cid-j7pv25f6>Continents</div></div> <div class="stat" data-astro-cid-j7pv25f6><div class="stat-num" data-astro-cid-j7pv25f6>8B+</div><div class="stat-lbl" data-astro-cid-j7pv25f6>People</div></div> </div> <div class="sep" data-astro-cid-j7pv25f6></div> <div id="spacer" data-astro-cid-j7pv25f6></div> <!-- Country card --> <div id="country-card" data-astro-cid-j7pv25f6> <div id="card-header" data-astro-cid-j7pv25f6> <span id="card-flag" data-astro-cid-j7pv25f6>\u{1F30D}</span> <div id="card-info" data-astro-cid-j7pv25f6> <div id="card-name" data-astro-cid-j7pv25f6>\u2014</div> <div id="card-vibe" data-astro-cid-j7pv25f6>\u2014</div> </div> </div> <div id="card-fact" data-astro-cid-j7pv25f6></div> <a id="card-link" href="#" data-astro-cid-j7pv25f6></a> </div> </aside> <!-- Globe hint --> <div id="globe-hint" data-astro-cid-j7pv25f6>Click any country to explore</div> <!-- Data injected from server --> <script>', `<\/script> <!-- Static deps loaded synchronously before paint --> <script src="/topojson.min.js"><\/script> <script src="/countries.js"><\/script> <script>
  (function () {
    'use strict';

    var GD = window._GD || {};
    var CL = window._CL || [];

    /* \u2500\u2500 Search autocomplete \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
    var searchEl = document.getElementById('search');
    var acList   = document.getElementById('ac-list');

    function renderAC(matches) {
      if (!matches.length) { acList.innerHTML = ''; return; }
      acList.innerHTML = matches.map(function(c) {
        return '<div class="ac-item" data-slug="' + c.slug + '">' +
               '<span class="ac-name">' + c.name + '</span>' +
               '</div>';
      }).join('');
    }

    searchEl.addEventListener('input', function() {
      var q = searchEl.value.toLowerCase().trim();
      if (!q) { acList.innerHTML = ''; return; }
      renderAC(CL.filter(function(c) {
        return c.name.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 7));
    });

    acList.addEventListener('click', function(e) {
      var item = e.target.closest('.ac-item');
      if (item) window.location.href = '/country/' + item.dataset.slug;
    });

    searchEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var first = acList.querySelector('.ac-item');
        if (first) window.location.href = '/country/' + first.dataset.slug;
      }
      if (e.key === 'Escape') { acList.innerHTML = ''; }
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('#search-box')) acList.innerHTML = '';
    });

    /* \u2500\u2500 Lazy-load Three.js after first paint \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
    var container = document.getElementById('globe-container');
    var loading   = document.getElementById('loading');

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        var s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        s.onload = initGlobe;
        s.onerror = function() { loading.classList.add('fade'); };
        document.head.appendChild(s);
      });
    });

    /* \u2500\u2500 Three.js globe \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
    function initGlobe() {
      var W = container.clientWidth;
      var H = container.clientHeight;

      var scene  = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 200);
      camera.position.z = 2.6;

      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.domElement.style.cssText = 'position:absolute;inset:0;display:block;';
      container.appendChild(renderer.domElement);

      /* \u2500\u2500 Globe sphere \u2014 custom shader: ocean gradient + specular \u2500\u2500 */
      /* At globe.rotation.y = 0, lng = -90\xB0 faces the camera (+Z).   */
      /* tgtRotY formula: -(lng * \u03C0/180) - \u03C0/2                         */
      var globeMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.ShaderMaterial({
          vertexShader: [
            'varying vec3 vN;',
            'varying vec3 vV;',
            'void main(){',
            '  vec4 mv=modelViewMatrix*vec4(position,1.0);',
            '  vN=normalize(normalMatrix*normal);',
            '  vV=normalize(-mv.xyz);',
            '  gl_Position=projectionMatrix*mv;',
            '}'
          ].join('\\\\n'),
          fragmentShader: [
            'varying vec3 vN;',
            'varying vec3 vV;',
            'void main(){',
            /* Fresnel: 0 at centre, 1 at limb \u2014 drives edge darkening */
            '  float f=pow(1.0-max(0.0,dot(vN,vV)),2.8);',
            /* Ocean: #0a1628 at centre \u2192 #050d1e at edges */
            '  vec3 col=mix(vec3(0.039,0.086,0.157),vec3(0.020,0.051,0.118),f);',
            /* Subtle diffuse fill */
            '  vec3 L=normalize(vec3(-0.65,0.70,0.40));',
            '  col+=vec3(0.015,0.030,0.060)*max(0.0,dot(vN,L));',
            /* Soft specular highlight \u2014 upper left */
            '  vec3 H=normalize(L+vV);',
            '  col+=vec3(0.10,0.14,0.22)*pow(max(0.0,dot(vN,H)),110.0);',
            '  gl_FragColor=vec4(col,1.0);',
            '}'
          ].join('\\\\n'),
        })
      );
      var globe = new THREE.Object3D();
      globe.add(globeMesh);
      globe.rotation.z = 23.5 * Math.PI / 180;
      scene.add(globe);

      /* \u2500\u2500 Atmosphere \u2014 thin blue halo, barely visible \u2500\u2500 */
      globe.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.016, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x64a0ff, transparent: true, opacity: 0.12, side: THREE.BackSide })
      ));

      /* Lights for atmosphere spheres (globe itself uses the shader above) */
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      var sun = new THREE.DirectionalLight(0x88aaff, 0.9);
      sun.position.set(5, 3, 5);
      scene.add(sun);

      /* \u2500\u2500 Stars \u2500\u2500 */
      (function() {
        var pos = [];
        for (var i = 0; i < 2500; i++) {
          var th = Math.random() * Math.PI * 2;
          var ph = Math.acos(2 * Math.random() - 1);
          var r  = 45 + Math.random() * 8;
          pos.push(r * Math.sin(ph) * Math.cos(th),
                   r * Math.cos(ph),
                   r * Math.sin(ph) * Math.sin(th));
        }
        var sg = new THREE.BufferGeometry();
        sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        scene.add(new THREE.Points(sg,
          new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, transparent: true, opacity: 0.65 })
        ));
      })();

      /* \u2500\u2500 Coordinate helpers \u2500\u2500 */
      function ll3(lat, lng, r) {
        r = r || 1.002;
        var phi   = (90 - lat)  * Math.PI / 180;
        var theta = (lng + 180) * Math.PI / 180;
        return new THREE.Vector3(
          -r * Math.sin(phi) * Math.cos(theta),
           r * Math.cos(phi),
           r * Math.sin(phi) * Math.sin(theta)
        );
      }

      function v3ll(v) {
        var lat = 90 - Math.acos(Math.max(-1, Math.min(1, v.y))) * 180 / Math.PI;
        var th  = Math.atan2(v.z, -v.x);
        if (th < 0) th += 2 * Math.PI;
        return { lat: lat, lng: th * 180 / Math.PI - 180 };
      }

      /* \u2500\u2500 Lat/lng grid \u2014 every 30\xB0 \u2500\u2500 */
      (function() {
        var pos   = [];
        var steps = 64;
        for (var lat = -60; lat <= 60; lat += 30) {
          for (var i = 0; i < steps; i++) {
            var lng1 = (i / steps) * 360 - 180;
            var lng2 = ((i + 1) / steps) * 360 - 180;
            var a = ll3(lat, lng1, 1.003); var b = ll3(lat, lng2, 1.003);
            pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
        for (var lng = -180; lng < 180; lng += 30) {
          for (var i = 0; i < steps; i++) {
            var lat1 = (i / steps) * 180 - 90;
            var lat2 = ((i + 1) / steps) * 180 - 90;
            var a = ll3(lat1, lng, 1.003); var b = ll3(lat2, lng, 1.003);
            pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
        var gg = new THREE.BufferGeometry();
        gg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        globe.add(new THREE.LineSegments(gg, new THREE.LineBasicMaterial({
          color: 0xffffff, transparent: true, opacity: 0.04, depthWrite: false
        })));
      })();

      /* \u2500\u2500 Cloud layer \u2014 canvas texture, separate node drifts slower \u2500\u2500 */
      var cloudNode = new THREE.Object3D();
      var cloudLag  = 0;
      (function() {
        var cv = document.createElement('canvas');
        cv.width = 512; cv.height = 256;
        var cx = cv.getContext('2d');
        cx.clearRect(0, 0, 512, 256);
        var seed = 42;
        function rand() { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296; }
        cx.fillStyle = 'rgba(255,255,255,0.14)';
        for (var ci = 0; ci < 70; ci++) {
          var x = rand() * 512, y = rand() * 256;
          cx.beginPath();
          cx.ellipse(x, y, 18 + rand() * 55, 6 + rand() * 16, rand() * Math.PI, 0, Math.PI * 2);
          cx.fill();
        }
        var tex = new THREE.CanvasTexture(cv);
        cloudNode.add(new THREE.Mesh(
          new THREE.SphereGeometry(1.013, 32, 32),
          new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.18, depthWrite: false })
        ));
        scene.add(cloudNode);
      })();

      /* \u2500\u2500 State \u2500\u2500 */
      var bboxes    = {};
      var features  = [];
      var hlObjects = []; /* [border, innerGlow, outerGlow] */
      var autoTimer = null;
      var tgtRotY   = 0;
      var tgtRotX   = 0;
      var flying    = false;
      var raycaster = new THREE.Raycaster();
      var mouse     = new THREE.Vector2();

      /* \u2500\u2500 Point-in-polygon \u2500\u2500 */
      function ptInRing(lng, lat, ring) {
        var inside = false;
        for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
          var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
          if (Math.abs(xi - xj) > 180) continue;
          if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi))
            inside = !inside;
        }
        return inside;
      }

      function findFeature(lat, lng) {
        var best = null, bestArea = Infinity;
        for (var i = 0; i < features.length; i++) {
          var f  = features[i];
          var bb = bboxes[f.id];
          if (!bb || lng < bb[0]-1 || lng > bb[2]+1 || lat < bb[1]-1 || lat > bb[3]+1) continue;
          var g = f.geometry;
          if (!g) continue;
          var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
          for (var p = 0; p < polys.length; p++) {
            if (ptInRing(lng, lat, polys[p][0])) {
              var area = (bb[2]-bb[0]) * (bb[3]-bb[1]);
              if (area < bestArea) { best = f; bestArea = area; }
              break;
            }
          }
        }
        return best;
      }

      /* \u2500\u2500 Line geometry helpers \u2500\u2500 */
      function ringToPos(ring, r) {
        var pos = [];
        for (var j = 0; j < ring.length - 1; j++) {
          var a = ll3(ring[j][1],     ring[j][0],     r);
          var b = ll3(ring[j+1][1],   ring[j+1][0],   r);
          pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
        return pos;
      }

      function ringToLines(rings, r) {
        var pos = [];
        for (var i = 0; i < rings.length; i++) pos = pos.concat(ringToPos(rings[i], r));
        return pos;
      }

      function featureAllRings(f) {
        var g = f.geometry;
        if (!g) return [];
        var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
        var out = [];
        for (var i = 0; i < polys.length; i++)
          for (var r = 0; r < polys[i].length; r++) out.push(polys[i][r]);
        return out;
      }

      /* \u2500\u2500 Grid-sampled highlight \u2014 correct for concave + antimeridian polygons \u2500\u2500 */
      function setHighlight(f) {
        for (var k = 0; k < hlObjects.length; k++) globe.remove(hlObjects[k]);
        hlObjects = [];
        if (!f) return;
        var g = f.geometry;
        if (!g) return;
        var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];

        /* Unwrap ring: adjust each lng so no consecutive jump exceeds \xB1180\xB0 */
        function unwrap(ring) {
          var out = [[ring[0][0], ring[0][1]]];
          for (var i = 1; i < ring.length; i++) {
            var prev = out[i - 1][0], cur = ring[i][0];
            var d = cur - prev;
            if (d >  180) cur -= 360;
            else if (d < -180) cur += 360;
            out.push([cur, ring[i][1]]);
          }
          return out;
        }

        /* Point-in-ring on unwrapped coordinates (no antimeridian skip needed) */
        function pip(lo, la, ring) {
          var inside = false;
          for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
            var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
            if (((yi > la) !== (yj > la)) &&
                (lo < (xj - xi) * (la - yi) / (yj - yi) + xi))
              inside = !inside;
          }
          return inside;
        }

        /* Normalise any longitude value to [-180, 180] */
        function norm(l) { return ((l % 360) + 540) % 360 - 180; }

        var STEP = 0.5; /* degrees \u2014 finer than 110m TopoJSON resolution */
        var fillVerts = [], fillIdx = [], vIdx = 0;

        for (var pi = 0; pi < polys.length; pi++) {
          var poly   = polys[pi];
          var outer  = unwrap(poly[0]);

          /* Bbox of unwrapped outer ring */
          var x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
          for (var j = 0; j < outer.length; j++) {
            if (outer[j][0] < x0) x0 = outer[j][0];
            if (outer[j][0] > x1) x1 = outer[j][0];
            if (outer[j][1] < y0) y0 = outer[j][1];
            if (outer[j][1] > y1) y1 = outer[j][1];
          }
          y0 = Math.max(y0, -89); y1 = Math.min(y1, 89);

          /* Unwrap holes */
          var holes = [];
          for (var h = 1; h < poly.length; h++) holes.push(unwrap(poly[h]));

          /* Scan grid \u2014 every cell whose centre falls inside the polygon */
          for (var la = y0; la < y1; la += STEP) {
            var cLa = la + STEP * 0.5;
            for (var lo = x0; lo < x1; lo += STEP) {
              var cLo = lo + STEP * 0.5;
              if (!pip(cLo, cLa, outer)) continue;
              var inHole = false;
              for (var h = 0; h < holes.length; h++) {
                if (pip(cLo, cLa, holes[h])) { inHole = true; break; }
              }
              if (inHole) continue;

              /* Map quad corners to sphere at r = 1.001 */
              var va = ll3(la,        norm(lo),        1.001);
              var vb = ll3(la,        norm(lo + STEP), 1.001);
              var vc = ll3(la + STEP, norm(lo + STEP), 1.001);
              var vd = ll3(la + STEP, norm(lo),        1.001);
              fillVerts.push(va.x, va.y, va.z, vb.x, vb.y, vb.z,
                             vc.x, vc.y, vc.z, vd.x, vd.y, vd.z);
              fillIdx.push(vIdx, vIdx+1, vIdx+2, vIdx, vIdx+2, vIdx+3);
              vIdx += 4;
            }
          }
        }

        if (fillVerts.length > 0) {
          var fg = new THREE.BufferGeometry();
          fg.setAttribute('position', new THREE.Float32BufferAttribute(fillVerts, 3));
          fg.setIndex(fillIdx);
          var fillMesh = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({
            color: 0xf0a500, transparent: true, opacity: 0.35,
            side: THREE.DoubleSide, depthWrite: false
          }));
          globe.add(fillMesh);
          hlObjects.push(fillMesh);
        }

        /* Line border layers */
        var rings  = featureAllRings(f);
        var layers = [
          [1.003, 0xf0a500, 0.95],
          [1.010, 0xf59e0b, 0.28],
          [1.022, 0xfbbf24, 0.10],
        ];
        for (var l = 0; l < layers.length; l++) {
          var rr = layers[l][0], col = layers[l][1], op = layers[l][2];
          var pos = [];
          for (var ri = 0; ri < rings.length; ri++) pos = pos.concat(ringToPos(rings[ri], rr));
          var geom = new THREE.BufferGeometry();
          geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
          var ls = new THREE.LineSegments(geom, new THREE.LineBasicMaterial({
            color: col, transparent: true, opacity: op,
            blending: THREE.AdditiveBlending, depthWrite: false
          }));
          globe.add(ls);
          hlObjects.push(ls);
        }
      }

      /* \u2500\u2500 Centroid of largest ring \u2500\u2500 */
      function centroid(f) {
        var g     = f.geometry;
        var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
        var best  = polys[0][0];
        for (var i = 0; i < polys.length; i++)
          if (polys[i][0].length > best.length) best = polys[i][0];
        var lo = 0, la = 0;
        for (var j = 0; j < best.length; j++) { lo += best[j][0]; la += best[j][1]; }
        return { lat: la / best.length, lng: lo / best.length };
      }

      /* \u2500\u2500 Card update \u2500\u2500 */
      function showCard(f, fly) {
        setHighlight(f);
        var p = f.properties;
        document.getElementById('card-flag').textContent = p.flag;
        document.getElementById('card-name').textContent = p.name;
        document.getElementById('card-vibe').textContent = p.vibe;
        document.getElementById('card-fact').textContent = p.fact;
        var lnk = document.getElementById('card-link');
        lnk.href        = '/country/' + p.slug;
        lnk.textContent = 'Discover ' + p.name + ' ';
        document.getElementById('country-card').classList.add('visible');

        if (fly) {
          var c  = centroid(f);
          /* Globe rotation needed to bring c.lng to face the camera.
             At rotation.y = 0, lng = -90\xB0 faces camera (+Z axis).
             Formula: tgtY = -(lng * \u03C0/180) - \u03C0/2                    */
          var tY = -(c.lng * Math.PI / 180) - Math.PI * 0.5;
          /* Shortest path from current rotation */
          var dY = tY - globe.rotation.y;
          while (dY >  Math.PI) dY -= 2 * Math.PI;
          while (dY < -Math.PI) dY += 2 * Math.PI;
          tgtRotY = globe.rotation.y + dY;
          tgtRotX = c.lat * Math.PI / 180;
          flying  = true;
        }
      }

      /* \u2500\u2500 Auto-fly \u2500\u2500 */
      var vibeFeatures = [];

      function flyRandom() {
        if (!vibeFeatures.length) return;
        showCard(vibeFeatures[Math.floor(Math.random() * vibeFeatures.length)], true);
        scheduleAutoFly(6000);
      }

      function scheduleAutoFly(delay) {
        clearTimeout(autoTimer);
        autoTimer = setTimeout(flyRandom, delay);
      }

      /* \u2500\u2500 Interaction \u2500\u2500 */
      renderer.domElement.addEventListener('click', function(e) {
        var rect = renderer.domElement.getBoundingClientRect();
        mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var hits = raycaster.intersectObject(globeMesh, false);
        if (!hits.length) return;
        var local = globe.worldToLocal(hits[0].point.clone());
        var ll    = v3ll(local);
        var f     = findFeature(ll.lat, ll.lng);
        if (f && f.properties.slug) window.location.href = '/country/' + f.properties.slug;
      });

      renderer.domElement.addEventListener('mousemove', function(e) {
        var rect = renderer.domElement.getBoundingClientRect();
        mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        renderer.domElement.style.cursor =
          raycaster.intersectObject(globeMesh, false).length ? 'pointer' : 'default';
      });

      window.addEventListener('resize', function() {
        W = container.clientWidth; H = container.clientHeight;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
      });

      /* \u2500\u2500 Render loop \u2500\u2500 */
      function animate() {
        requestAnimationFrame(animate);

        if (flying) {
          var dY = tgtRotY - globe.rotation.y;
          var dX = tgtRotX - globe.rotation.x;
          globe.rotation.y += dY * 0.055;
          globe.rotation.x += dX * 0.055;
          if (Math.abs(dY) < 0.0008 && Math.abs(dX) < 0.0008) {
            globe.rotation.y = tgtRotY;
            globe.rotation.x = tgtRotX;
            flying = false;
          }
        } else {
          globe.rotation.y += 0.0012;
          tgtRotY = globe.rotation.y;
        }

        /* Cloud node tracks globe rotation, drifts slightly in Y */
        cloudNode.rotation.x = globe.rotation.x;
        cloudNode.rotation.z = globe.rotation.z;
        cloudNode.rotation.y = globe.rotation.y - cloudLag;
        if (!flying) cloudLag += 0.00008;

        /* Pulse the inner + outer glow layers */
        if (hlObjects.length >= 3) {
          var p = 0.5 + 0.5 * Math.sin(Date.now() * 0.003);
          var off = hlObjects.length === 4 ? 1 : 0;
          hlObjects[off + 1].material.opacity = 0.12 + 0.22 * p;
          hlObjects[off + 2].material.opacity = 0.03 + 0.10 * p;
        }

        renderer.render(scene, camera);
      }
      animate();

      /* \u2500\u2500 Fetch TopoJSON, build borders + feature data \u2500\u2500 */
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(function(r) { return r.json(); })
        .then(function(world) {
          var idMap = window.COUNTRY_ID_MAP || {};

          /* All-borders \u2014 single LineSegments, white at low opacity */
          var mesh   = topojson.mesh(world, world.objects.countries);
          var allPos = ringToLines(mesh.coordinates, 1.002);
          var bg     = new THREE.BufferGeometry();
          bg.setAttribute('position', new THREE.Float32BufferAttribute(allPos, 3));
          globe.add(new THREE.LineSegments(bg,
            new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })
          ));

          /* Per-feature: metadata + bbox for click detection */
          var geojson = topojson.feature(world, world.objects.countries);
          features = geojson.features.map(function(f) {
            var info = idMap[+f.id];
            if (!info) return null;
            var gd = GD[info.name];
            var g  = f.geometry;
            if (g) {
              var polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
              var x0=180,x1=-180,y0=90,y1=-90;
              for (var i = 0; i < polys.length; i++)
                for (var j = 0; j < polys[i][0].length; j++) {
                  var pt = polys[i][0][j];
                  if(pt[0]<x0)x0=pt[0]; if(pt[0]>x1)x1=pt[0];
                  if(pt[1]<y0)y0=pt[1]; if(pt[1]>y1)y1=pt[1];
                }
              bboxes[f.id] = [x0, y0, x1, y1];
            }
            return Object.assign({}, f, {
              properties: {
                name: info.name, flag: info.flag || '',
                slug: gd ? gd.slug : '', vibe: gd ? gd.vibe : '', fact: gd ? gd.fact : ''
              }
            });
          }).filter(function(f) { return f && f.properties.name; });

          vibeFeatures = features.filter(function(f) { return f.properties.vibe; });

          loading.classList.add('fade');
          setTimeout(function() { if (loading.parentNode) loading.parentNode.removeChild(loading); }, 750);
          scheduleAutoFly(1200);
        })
        .catch(function(err) {
          console.error('Globe data failed:', err);
          loading.classList.add('fade');
        });
    } /* end initGlobe */

  })();
  <\/script> </body> </html>`])), addAttribute(lang, "lang"), renderHead(), unescapeHTML(`window._GD=${JSON.stringify(globeData)};window._CL=${JSON.stringify(countryList)};`));
}, "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/index.astro", void 0);

const $$file = "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
