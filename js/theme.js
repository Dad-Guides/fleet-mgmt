/* js/theme.js — theme + mode picker wired to data-theme / data-mode on <html> */

const THEMES = ['slate', 'zinc', 'forest', 'ocean', 'ember'];
const MODES  = ['system', 'light', 'dark'];

const LS_THEME = 'bfs-theme';
const LS_MODE  = 'bfs-mode';

export function initTheme() {
  applyStored();
  wirePanelToggle();
  wireSwatches();
  wireModeButtons();
}

function applyStored() {
  const theme = localStorage.getItem(LS_THEME) || 'slate';
  const mode  = localStorage.getItem(LS_MODE)  || 'system';
  applyTheme(theme);
  applyMode(mode);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(LS_THEME, theme);
  document.querySelectorAll('.theme-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === theme);
  });
}

function applyMode(mode) {
  const html = document.documentElement;
  if (mode === 'system') {
    delete html.dataset.mode;
  } else {
    html.dataset.mode = mode;
  }
  localStorage.setItem(LS_MODE, mode);
  document.querySelectorAll('.mode-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.mode === mode);
  });
  /* Sync manifest theme-color */
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(document.documentElement)
      .getPropertyValue('--brand-800').trim();
    if (bg) meta.content = bg;
  }
}

function wirePanelToggle() {
  const panel = document.getElementById('theme-panel');
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const hidden = panel.hasAttribute('hidden');
      panel.toggleAttribute('hidden', !hidden);
    });
  });
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target)) panel.setAttribute('hidden', '');
  });
}

function wireSwatches() {
  document.querySelectorAll('.theme-swatch').forEach(el => {
    el.addEventListener('click', () => applyTheme(el.dataset.theme));
  });
}

function wireModeButtons() {
  document.querySelectorAll('.mode-btn').forEach(el => {
    el.addEventListener('click', () => applyMode(el.dataset.mode));
  });
}
