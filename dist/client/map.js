// ─── STATE ─────────────────────────────────────────────────────────────────
let lensEnabled  = true;
let lensDiameter = CONFIG.lens.defaultDiameter;
let mouseX = -9999, mouseY = -9999;
let hoveredLayer = null;
let isOnCountry  = false;
let mainMap, satLayer, geoLayer, satPane;
let currentLang  = localStorage.getItem('map-lang') || 'EN';
let focusGeometry = null;
let _satClipRafId = null;
const dataCache  = new Map();

// DOM refs
const lensToggleBtn = document.getElementById('lens-toggle');
const lensSlider    = document.getElementById('lens-slider');
const lensSizeLabel = document.getElementById('lens-size-label');
const sliderPanel   = document.getElementById('lens-slider-panel');
const cursorHint    = document.getElementById('cursor-hint');
const sbWelcome     = document.getElementById('sb-welcome');
const sbCountry     = document.getElementById('sb-country');
const transOverlay  = document.getElementById('transition-overlay');

// ─── ELEVATION SAMPLING (sidebar display only) ──────────────────────────────
const TERRARIUM_BASE = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium';
const ELEV_ZOOM      = 6;
const elevCache      = new Map();

function _clampLat(lat) { return Math.max(-85.05, Math.min(85.05, lat)); }

function _latLngToTile(lat, lng, z) {
  const n = 1 << z;
  const x = Math.floor((lng + 180) / 360 * n);
  const φ = _clampLat(lat) * Math.PI / 180;
  const y = Math.floor((1 - Math.log(Math.tan(φ) + 1 / Math.cos(φ)) / Math.PI) / 2 * n);
  return { x: ((x % n) + n) % n, y: Math.max(0, Math.min(n - 1, y)) };
}

function _latLngToPixel(lat, lng, z) {
  const { x: tx, y: ty } = _latLngToTile(lat, lng, z);
  const n  = 1 << z;
  const px = (((lng + 180) / 360 * n) - tx) * 256;
  const φ  = _clampLat(lat) * Math.PI / 180;
  const py = (((1 - Math.log(Math.tan(φ) + 1 / Math.cos(φ)) / Math.PI) / 2 * n) - ty) * 256;
  return { tx, ty, px: Math.min(255, Math.max(0, Math.floor(px))), py: Math.min(255, Math.max(0, Math.floor(py))) };
}

function _loadElevTile(z, x, y) {
  const key = `${z}/${x}/${y}`;
  if (elevCache.has(key)) return elevCache.get(key);
  const p = new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const cv = document.createElement('canvas');
      cv.width = cv.height = 256;
      cv.getContext('2d').drawImage(img, 0, 0);
      resolve(cv.getContext('2d').getImageData(0, 0, 256, 256));
    };
    img.onerror = () => resolve(null);
    img.src = `${TERRARIUM_BASE}/${z}/${x}/${y}.png`;
  });
  elevCache.set(key, p);
  return p;
}

async function sampleElevation(lat, lng) {
  const { tx, ty, px, py } = _latLngToPixel(lat, lng, ELEV_ZOOM);
  const data = await _loadElevTile(ELEV_ZOOM, tx, ty);
  if (!data) return null;
  const i = (py * 256 + px) * 4;
  return (data.data[i] * 256 + data.data[i + 1] + data.data[i + 2] / 256) - 32768;
}

async function updateSidebarElev(lat, lng) {
  const el = document.getElementById('sb-elev-val');
  if (!el) return;
  el.textContent = '…';
  try {
    const m = await sampleElevation(lat, lng);
    if (m === null) { el.textContent = '—'; return; }
    el.textContent = m < 0
      ? `${Math.round(Math.abs(m))} m below sea`
      : `${Math.round(m).toLocaleString()} m`;
  } catch { el.textContent = '—'; }
}

// ─── LENS SVG DESIGN ────────────────────────────────────────────────────────
// Builds the tactical-scope decoration into #lens-group (centered at origin).
// Called once on init and on size change. Mouse move only updates transform.
function buildLensDecoration() {
  const group = document.getElementById('lens-group');
  if (!group) return;
  const R = lensDiameter / 2;
  let h = '';

  // 1 · Outer ring — 4 arcs with 12° gaps at cardinal points
  const gapR = 6 * Math.PI / 180;
  for (let q = 0; q < 4; q++) {
    const a1 = q * Math.PI / 2 + gapR - Math.PI / 2;
    const a2 = (q + 1) * Math.PI / 2 - gapR - Math.PI / 2;
    const x1 = (R * Math.cos(a1)).toFixed(2), y1 = (R * Math.sin(a1)).toFixed(2);
    const x2 = (R * Math.cos(a2)).toFixed(2), y2 = (R * Math.sin(a2)).toFixed(2);
    h += `<path d="M${x1},${y1} A${R},${R} 0 0,1 ${x2},${y2}"
      fill="none" stroke="rgba(255,200,80,0.55)" stroke-width="1.5"/>`;
  }

  // 2 · Tick marks every 10° — major every 30°
  for (let i = 0; i < 36; i++) {
    const a  = (i / 36) * Math.PI * 2 - Math.PI / 2;
    const big = i % 3 === 0;
    const r0 = R - (big ? 10 : 5);
    const x1 = (r0 * Math.cos(a)).toFixed(2), y1 = (r0 * Math.sin(a)).toFixed(2);
    const x2 = (R  * Math.cos(a)).toFixed(2), y2 = (R  * Math.sin(a)).toFixed(2);
    h += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      stroke="rgba(255,200,80,${big ? 0.5 : 0.22})" stroke-width="${big ? 1.2 : 0.7}"/>`;
  }

  // 3 · Inner dashed ring at 72%
  const Ri = (R * 0.72).toFixed(2);
  h += `<circle r="${Ri}" fill="none"
    stroke="rgba(255,200,80,0.13)" stroke-width="0.8" stroke-dasharray="3,5"/>`;

  // 4 · Corner L-brackets at 45° diagonals
  const bR = R * 0.84, bL = R * 0.13;
  for (let q = 0; q < 4; q++) {
    const a  = q * Math.PI / 2 + Math.PI / 4 - Math.PI / 2;
    const cx = (bR * Math.cos(a)).toFixed(2), cy = (bR * Math.sin(a)).toFixed(2);
    const nx = Math.cos(a), ny = Math.sin(a), tx = -ny, ty = nx;
    h += `<line x1="${(+cx - tx*bL*0.55).toFixed(2)}" y1="${(+cy - ty*bL*0.55).toFixed(2)}"
               x2="${(+cx + tx*bL*0.55).toFixed(2)}" y2="${(+cy + ty*bL*0.55).toFixed(2)}"
      stroke="rgba(255,200,80,0.42)" stroke-width="1.3"/>`;
    h += `<line x1="${cx}" y1="${cy}"
               x2="${(+cx - nx*bL*0.65).toFixed(2)}" y2="${(+cy - ny*bL*0.65).toFixed(2)}"
      stroke="rgba(255,200,80,0.42)" stroke-width="1.3"/>`;
  }

  // 5 · Crosshair with center gap
  const ci = (R * 0.13).toFixed(2), co = (R * 0.40).toFixed(2);
  h += `<line x1="${-co}" y1="0" x2="${-ci}" y2="0" stroke="rgba(255,220,100,0.28)" stroke-width="1"/>`;
  h += `<line x1="${ci}"  y1="0" x2="${co}"  y2="0" stroke="rgba(255,220,100,0.28)" stroke-width="1"/>`;
  h += `<line x1="0" y1="${-co}" x2="0" y2="${-ci}" stroke="rgba(255,220,100,0.28)" stroke-width="1"/>`;
  h += `<line x1="0" y1="${ci}"  x2="0" y2="${co}"  stroke="rgba(255,220,100,0.28)" stroke-width="1"/>`;

  // 6 · Center reticle dot
  h += `<circle r="2.5" fill="none" stroke="rgba(255,220,100,0.55)" stroke-width="1"/>`;

  // 7 · Rotating sweep (CSS animation via .lens-sweep class)
  const sR = (R * 0.93).toFixed(2);
  h += `<g class="lens-sweep">
    <line x1="0" y1="0" x2="${sR}" y2="0" stroke="url(#sweep-grad)" stroke-width="1.5"/>
  </g>`;

  group.innerHTML = h;
}

function _moveLens(cx, cy) {
  const g = document.getElementById('lens-group');
  if (g) g.setAttribute('transform', `translate(${cx},${cy})`);
}

function _showLensSVG(cx, cy) {
  _moveLens(cx, cy);
  const svg = document.getElementById('lens-svg');
  if (svg) svg.style.opacity = '1';
}

function _hideLensSVG() {
  const svg = document.getElementById('lens-svg');
  if (svg) svg.style.opacity = '0';
}

// ─── LENS HELPERS ──────────────────────────────────────────────────────────
function setLensSize(d) {
  lensDiameter = d;
  lensSizeLabel.textContent = d;
  lensSlider.value = d;
  buildLensDecoration();
}

function getMapPaneOffset() {
  const t = mainMap.getPanes().mapPane.style.transform;
  if (!t || t === 'none' || t === '') return { x: 0, y: 0 };
  const m = new DOMMatrix(t);
  return { x: m.m41, y: m.m42 };
}

function updateLens() {
  if (!lensEnabled || !satPane) return;
  const R  = lensDiameter / 2;
  const { x: tx, y: ty } = getMapPaneOffset();
  const cx = Math.round(mouseX - tx), cy = Math.round(mouseY - ty);
  satPane.style.clipPath = `circle(${R}px at ${cx}px ${cy}px)`;
  _showLensSVG(mouseX, mouseY);
}

function hideSatellite() {
  if (!satPane) return;
  satPane.style.clipPath = 'circle(0px at 0px 0px)';
  _hideLensSVG();
}

function showLens() {
  lensEnabled = true;
  sliderPanel.classList.remove('hidden');
  lensToggleBtn.classList.add('active');
  updateLens();
}

function hideLens() {
  lensEnabled = false;
  sliderPanel.classList.add('hidden');
  lensToggleBtn.classList.remove('active');
  hideSatellite();
}

// ─── MAP INIT ──────────────────────────────────────────────────────────────
function initMaps() {
  // Calculate the zoom level that makes the world fill the container width exactly
  const mapWidth = document.getElementById('map').clientWidth || window.innerWidth - 320;
  const worldZoom = Math.log2(mapWidth / 256);

  mainMap = L.map('map', {
    center:              [20, 0],
    zoom:                worldZoom,
    minZoom:             worldZoom,
    maxZoom:             CONFIG.map.maxZoom,
    maxBounds:           CONFIG.map.maxBounds,
    maxBoundsViscosity:  CONFIG.map.maxBoundsViscosity,
    worldCopyJump:       false,
    zoomControl:         true,
    attributionControl:  false
  });

  L.control.zoom({ position: 'bottomright' }).addTo(mainMap);

  // Base flat layer
  L.tileLayer(CONFIG.tiles.flat.url, {
    attribution:  CONFIG.tiles.flat.attribution,
    subdomains:   CONFIG.tiles.flat.subdomains,
    maxZoom:      CONFIG.tiles.flat.maxZoom,
    detectRetina: true,
    crossOrigin:  true,
    noWrap:       true,
  }).addTo(mainMap);

  // Satellite layer in a dedicated pane — polygon clip-path applied to this pane
  mainMap.createPane('satellite');
  satPane = mainMap.getPane('satellite');
  satPane.style.zIndex        = '250';
  satPane.style.pointerEvents = 'none';
  hideSatellite(); // start hidden

  satLayer = L.tileLayer(CONFIG.tiles.satellite.url, {
    attribution: CONFIG.tiles.satellite.attribution,
    maxZoom:     CONFIG.tiles.satellite.maxZoom,
    keepBuffer:  4,
    pane:        'satellite'
  }).addTo(mainMap);

  // Reapply circle clip when map pans (pane offset changes)
  mainMap.on('move', () => { if (lensEnabled) updateLens(); });

  L.control.attribution({ position: 'bottomright' }).addTo(mainMap);

  mainMap.on('mousemove', (e) => {
    mouseX = e.originalEvent.clientX;
    mouseY = e.originalEvent.clientY;
    if (lensEnabled) updateLens();
    if (isOnCountry) updateCursorHint(true);
  });

  mainMap.on('mouseout', () => {
    hideSatellite();
    isOnCountry = false;
    updateCursorHint(false);
  });

  const ro = new ResizeObserver(() => {
    mainMap.invalidateSize({ animate: false });
  });
  ro.observe(document.getElementById('map'));
}

// ─── ANTIMERIDIAN FIX ──────────────────────────────────────────────────────
// Russia and a few other countries cross the 180° antimeridian. TopoJSON stores
// their polygons as continuous rings that jump 360° in longitude, which Leaflet
// renders as a horizontal line spanning the entire map. This normalises each
// ring so coordinates are always within 180° of the previous point, making the
// polygon continuous without any teleportation across the map.
function fixAntimeridianRing(ring) {
  if (!ring.length) return ring;
  const out = [[ring[0][0], ring[0][1]]];
  for (let i = 1; i < ring.length; i++) {
    let lon = ring[i][0];
    const prev = out[i - 1][0];
    while (lon - prev >  180) lon -= 360;
    while (prev - lon >  180) lon += 360;
    out.push([lon, ring[i][1]]);
  }
  return out;
}
function fixAntimeridianGeom(geom) {
  if (!geom) return geom;
  if (geom.type === 'Polygon')
    return { ...geom, coordinates: geom.coordinates.map(fixAntimeridianRing) };
  if (geom.type === 'MultiPolygon')
    return { ...geom, coordinates: geom.coordinates.map(p => p.map(fixAntimeridianRing)) };
  return geom;
}

// ─── TOPOJSON ──────────────────────────────────────────────────────────────
async function loadCountries() {
  const res     = await fetch(CONFIG.topoJsonUrl);
  const topo    = await res.json();
  const raw     = topojson.feature(topo, topo.objects.countries);
  const geojson = {
    ...raw,
    features: raw.features.map(f => ({ ...f, geometry: fixAntimeridianGeom(f.geometry) }))
  };
  geoLayer = L.geoJSON(geojson, { style: defaultStyle, onEachFeature }).addTo(mainMap);

  // Ensure overlayPane is above satellite pane and its SVG receives pointer events
  const overlayPane = mainMap.getPane('overlayPane');
  overlayPane.style.zIndex = '400';
  const overlaySvg = overlayPane.querySelector('svg');
  if (overlaySvg) overlaySvg.style.pointerEvents = 'auto';
}

// ─── COUNTRY SATELLITE CLIP ─────────────────────────────────────────────────
// Projects GeoJSON geometry to satPane-local coordinates using latLngToLayerPoint.
// Since paneCoord = containerCoord - mapPaneOffset = layerPoint, this is stable
// during pan and only needs updating on zoom.
function _geomToClipPath(geometry) {
  function projectPoint([lng, lat]) {
    const p = mainMap.latLngToLayerPoint([lat, lng]);
    return `${p.x.toFixed(0)},${p.y.toFixed(0)}`;
  }
  function ringToPath(ring) {
    if (ring.length < 3) return '';
    return 'M' + ring.map(projectPoint).join('L') + 'Z';
  }
  if (geometry.type === 'Polygon') {
    return ringToPath(geometry.coordinates[0]);
  } else if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.map(p => ringToPath(p[0])).filter(Boolean).join(' ');
  }
  return '';
}

function updateCountrySatClip() {
  if (!focusGeometry || !satPane) return;
  const d = _geomToClipPath(focusGeometry);
  if (d) satPane.style.clipPath = `path('${d}')`;
}

function scheduleCountrySatClip() {
  if (_satClipRafId) return;
  _satClipRafId = requestAnimationFrame(() => {
    _satClipRafId = null;
    updateCountrySatClip();
  });
}

function enableCountrySatMode(layer) {
  focusGeometry = layer.feature.geometry;
  updateCountrySatClip();
  mainMap.on('zoom zoomend viewreset', scheduleCountrySatClip);
}

// ─── COUNTRY PAGE AUTO-FOCUS + POI MARKERS ─────────────────────────────────
function focusCountry(name) {
  if (!geoLayer || !name) return;
  let targetLayer = null;

  geoLayer.eachLayer(layer => {
    if (getCountryName(layer.feature) === name) targetLayer = layer;
  });

  if (!targetLayer) return;

  // Distinct highlight for focused country
  targetLayer.setStyle({
    fillColor:   'rgba(100,160,255,0.08)',
    fillOpacity: 1,
    color:       'rgba(120,170,255,0.85)',
    weight:      1.5,
    opacity:     1,
  });
  hoveredLayer = targetLayer;

  // Fit and lock bounds — animate: false to avoid race conditions with moveend
  let bounds;
  try { bounds = targetLayer.getBounds(); } catch (_) { return; }
  mainMap.fitBounds(bounds, { padding: [80, 80], maxZoom: 7, animate: false });

  // Lock zoom to current level — no setMaxBounds (causes visual artifacts on wide countries)
  mainMap.setMinZoom(mainMap.getZoom());

  // Add POI markers
  const cd = window.FOCUS_COUNTRY_DATA || {};
  if (cd.capitalLatlng) addPoiMarker(cd.capitalLatlng, '🏛', COUNTRY_DATA[name]?.capital || 'Capital', 'poi-capital');
  if (cd.peak)          addPoiMarker(cd.peak.latlng,   '⛰',  cd.peak.name + ' · ' + cd.peak.elevation.toLocaleString() + ' m', 'poi-peak');
  if (cd.cities)        cd.cities.forEach(c => addPoiMarker(c.latlng, '🏙', c.name, 'poi-city'));
}

function addPoiMarker(latlng, emoji, label, cls) {
  const icon = L.divIcon({
    className: '',
    html: `<div class="poi-marker ${cls}">
      <div class="poi-emoji">${emoji}</div>
      <div class="poi-label">${label}</div>
    </div>`,
    iconSize:   [0, 0],
    iconAnchor: [0, 0],
  });
  L.marker(latlng, { icon, interactive: false }).addTo(mainMap);
}

// ─── CONTROLS WIRING ──────────────────────────────────────────────────────
function initControls() {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (lensEnabled) updateLens();
    if (isOnCountry) updateCursorHint(true);
  });

  lensToggleBtn.addEventListener('click', () => {
    if (lensEnabled) hideLens(); else showLens();
  });

  lensSlider.addEventListener('input', () => {
    setLensSize(Number(lensSlider.value));
    if (lensEnabled) updateLens();
    if (isOnCountry) updateCursorHint(true); // reposition hint for new radius
  });

  setLensSize(lensDiameter);
  initLangSwitcher();
}

// ─── BOOT ──────────────────────────────────────────────────────────────────
async function boot() {
  buildLensDecoration();
  initMaps();
  initControls();

  try {
    await loadCountries();
  } catch (err) {
    console.error('Failed to load country boundaries:', err);
  }

  // Page pays : auto-focus, désactiver la loupe
  if (window.FOCUS_COUNTRY) {
    lensEnabled = false;
    _hideLensSVG();
    const lensControls = document.getElementById('lens-controls');
    if (lensControls) lensControls.style.display = 'none';
    focusCountry(window.FOCUS_COUNTRY);
  }

  setTimeout(() => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), 700);
    }
  }, window.FOCUS_COUNTRY ? 1200 : 1900);
}
