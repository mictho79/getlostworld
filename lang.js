// ─── LANGUAGE SWITCHER ─────────────────────────────────────────────────────
function initLangSwitcher() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    if (btn.dataset.lang === currentLang) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('map-lang', currentLang);
      btns.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
      // Clear cache so next hover re-fetches in chosen language
      dataCache.clear();
    });
  });
}
