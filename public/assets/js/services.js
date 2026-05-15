document.querySelectorAll('.card--service').forEach((card) => {
  const badge = card.querySelector('.card__badge');
  if (!badge) return;

  card.addEventListener('mouseenter', () => {
    badge.setAttribute('title', 'Requires JAIST account');
  });

  card.addEventListener('focusin', () => {
    badge.setAttribute('title', 'Requires JAIST account');
  });
});
