const nav = document.querySelector('[data-nav]');
const toggle = nav?.querySelector('.topbar__toggle');

if (nav && toggle) {
  const links = nav.querySelectorAll('.topbar__nav a');

  const setOpen = (isOpen) => {
    document.body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  };

  toggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('nav-open'));
  });

  links.forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
}

const path = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`;
document.querySelectorAll('.topbar__nav a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === path) link.setAttribute('aria-current', 'page');
});
