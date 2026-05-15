const storageKey = 'chonglab-theme';
const toggle = document.querySelector('[data-theme-toggle]');

const modes = ['system', 'light', 'dark'];

const getMode = () => {
  const saved = localStorage.getItem(storageKey);
  return modes.includes(saved) ? saved : 'system';
};

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyTheme = () => {
  const mode = getMode();
  const theme = mode === 'system' ? getSystemTheme() : mode;
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themeMode = mode;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0d1117' : '#f4f0ea');
  if (toggle) {
    toggle.textContent = `Theme: ${mode === 'system' ? 'Auto' : mode[0].toUpperCase() + mode.slice(1)}`;
  }
};

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = getMode();
    const next = modes[(modes.indexOf(current) + 1) % modes.length];
    localStorage.setItem(storageKey, next);
    applyTheme();
  });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (getMode() === 'system') applyTheme();
});

applyTheme();
