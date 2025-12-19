document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('js-menu');
  const nav = document.getElementById('js-nav');

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
});
