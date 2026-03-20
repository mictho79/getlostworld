// ─── SIDEBAR ───────────────────────────────────────────────────────────────
function showSidebarLoading(name, flag) {
  document.getElementById('sb-flag').textContent = flag;
  document.getElementById('sb-name').textContent = name;
  document.getElementById('sb-vibe').textContent = COUNTRY_VIBES[name] || 'Fascinating · Historic · Unique';
  document.getElementById('sb-capital').textContent  = '—';
  document.getElementById('sb-pop').textContent      = '—';
  document.getElementById('sb-lang').textContent     = '—';
  document.getElementById('sb-sport').textContent    = '—';
  document.getElementById('sb-factval').textContent  = '';
  document.getElementById('sb-explore-name').textContent = name;

  sbWelcome.style.display = 'none';
  sbCountry.style.display = 'flex';
  sbCountry.classList.remove('sb-animate');
  void sbCountry.offsetWidth;
  sbCountry.classList.add('sb-animate');
}

function updateSidebarData(name, data) {
  // Only update if this country is still hovered
  if (document.getElementById('sb-name').textContent !== name) return;

  document.getElementById('sb-capital').textContent = data.capital    || '—';
  document.getElementById('sb-pop').textContent     = data.population || '—';
  document.getElementById('sb-lang').textContent    = data.language   || '—';
  document.getElementById('sb-sport').textContent   = data.sport || data.national_sport || '—';
  document.getElementById('sb-factval').textContent = data.fact || data.fun_fact || '';
}

function resetSidebar() {
  if (window.FOCUS_COUNTRY) return; // country page: keep sidebar locked
  sbWelcome.style.display = '';
  sbCountry.style.display = 'none';
}

// ─── CURSOR HINT ───────────────────────────────────────────────────────────
function updateCursorHint(visible) {
  if (visible) {
    const R = lensDiameter / 2;
    cursorHint.style.left = mouseX + 'px';
    cursorHint.style.top  = (mouseY + R + 14) + 'px';
    cursorHint.classList.add('visible');
  } else {
    cursorHint.classList.remove('visible');
  }
}

// ─── CINEMATIC NAVIGATION ──────────────────────────────────────────────────
function cinematicNavigate(name, layer) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');

  // Fly map to the country's bounds
  try {
    const bounds = layer.getBounds();
    mainMap.flyToBounds(bounds, { duration: 0.8, padding: [80, 80], maxZoom: 6 });
  } catch (_) { /* small countries may have no valid bounds */ }

  // Fade in the dark overlay after the fly animation
  setTimeout(() => {
    transOverlay.classList.add('visible');
    setTimeout(() => {
      window.location.href = `/country/${encodeURIComponent(slug)}`;
    }, 420);
  }, 760);
}

// ─── DATA FETCH / MOCK ─────────────────────────────────────────────────────
async function fetchCountryData(name) {
  // Return cached data immediately if available
  if (dataCache.has(name)) return dataCache.get(name);

  const localData = COUNTRY_DATA[name];

  if (CONFIG.MOCK_MODE) {
    const data = getMockData(name);
    dataCache.set(name, data);
    return data;
  }

  // Show local data right away while fetching
  if (localData) dataCache.set(name, localData);

  try {
    const url = `${CONFIG.countryApiEndpoint}?name=${encodeURIComponent(name)}&lang=${currentLang.toLowerCase()}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const apiData = await res.json();
      if (apiData && typeof apiData === 'object') {
        const merged = { ...localData, ...apiData };
        dataCache.set(name, merged);
        return merged;
      }
    }
  } catch { /* fall through to local */ }

  if (localData) return localData;

  const fallback = { capital:'—', population:'—', language:'—', sport:'—', fact:'' };
  dataCache.set(name, fallback);
  return fallback;
}

// ─── COUNTRY INTERACTION ───────────────────────────────────────────────────
function defaultStyle() {
  return { fillColor:'#ffffff', fillOpacity:0.001, color:'rgba(80,80,120,0.3)', weight:0.8, opacity:1 };
}
function highlightStyle() {
  return { fillColor:'rgba(100,100,200,0.12)', fillOpacity:1, color:'rgba(160,160,255,0.6)', weight:1.5, opacity:1 };
}
function getCountryName(feature) {
  return ID_TO_NAME[String(feature.id)] || feature.properties?.name || null;
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: async (e) => {
      if (window.FOCUS_COUNTRY) return; // country page: keep sidebar & styles locked
      if (e.originalEvent.clientX < 320) return;
      if (hoveredLayer) hoveredLayer.setStyle(defaultStyle());
      hoveredLayer = e.target;
      e.target.setStyle(highlightStyle());
      e.target.bringToFront();
      mouseX = e.originalEvent.clientX;
      mouseY = e.originalEvent.clientY;
      isOnCountry = true;

      const name = getCountryName(feature);
      if (!name) return;

      const localData = COUNTRY_DATA[name];
      // Show header immediately
      showSidebarLoading(name, localData?.flag || '🌍');
      updateCursorHint(true);

      // Sample elevation at hover point (non-blocking)
      try {
        const ll = mainMap.containerPointToLatLng(L.point(mouseX, mouseY));
        updateSidebarElev(ll.lat, ll.lng);
      } catch { /* ignore */ }

      // Load full data (from cache, mock, or API)
      const data = await fetchCountryData(name);
      updateSidebarData(name, data);
    },
    mousemove: (e) => {
      mouseX = e.originalEvent.clientX;
      mouseY = e.originalEvent.clientY;
      if (lensEnabled) updateLens();
      if (isOnCountry) updateCursorHint(true);
      // Debounced elevation update on cursor move
      clearTimeout(layer._elevTimer);
      layer._elevTimer = setTimeout(() => {
        try {
          const ll = mainMap.containerPointToLatLng(L.point(mouseX, mouseY));
          updateSidebarElev(ll.lat, ll.lng);
        } catch { /* ignore */ }
      }, 250);
    },
    mouseout: (e) => {
      if (window.FOCUS_COUNTRY) return; // country page: preserve styles
      if (hoveredLayer === e.target) {
        e.target.setStyle(defaultStyle());
        hoveredLayer = null;
      }
      isOnCountry = false;
      updateCursorHint(false);
      setTimeout(() => {
        if (!isOnCountry) resetSidebar();
      }, 80);
    },
    click: (e) => {
      const name = getCountryName(feature);
      if (name) cinematicNavigate(name, layer);
    }
  });
}
