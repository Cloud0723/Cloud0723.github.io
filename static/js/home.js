(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preferredTheme;
  try { preferredTheme = localStorage.getItem('chenliang-theme'); } catch (_) { /* Storage may be disabled. */ }
  if (preferredTheme === 'dark' || preferredTheme === 'light') root.dataset.theme = preferredTheme;

  function updateThemeButton() {
    const isDark = root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
    themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
    themeButton.setAttribute('aria-pressed', String(isDark));
  }
  themeButton.hidden = false;
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    const isDark = root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    try { localStorage.setItem('chenliang-theme', root.dataset.theme); } catch (_) { /* Keep the current session usable. */ }
    updateThemeButton();
  });
  if (systemTheme.addEventListener) systemTheme.addEventListener('change', updateThemeButton);

  const filters = document.querySelector('.publication-filters');
  const papers = [...document.querySelectorAll('.publication')];
  const buttons = [...filters.querySelectorAll('button')];
  const status = document.getElementById('publication-status');
  function filterPapers(filter, announce = true) {
    let count = 0;
    papers.forEach(paper => {
      paper.hidden = filter === 'selected' && paper.dataset.selected !== 'true';
      if (!paper.hidden) count += 1;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    if (announce) status.textContent = `Showing ${count} ${filter === 'selected' ? 'selected publications' : 'publications and preprints'}.`;
  }
  filters.hidden = false;
  filterPapers('selected', false);
  buttons.forEach(button => button.addEventListener('click', () => filterPapers(button.dataset.filter)));
})();
