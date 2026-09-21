const tabButtons = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('.tab-panel');
tabButtons.forEach(button => button.addEventListener('click', () => {
  tabButtons.forEach(item => item.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));
  button.classList.add('active');
  document.getElementById(button.dataset.tab).classList.add('active');
}));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
});

const toast = document.querySelector('.toast');
document.querySelector('[data-form]')?.addEventListener('submit', event => {
  event.preventDefault();
  toast.classList.add('show');
  event.currentTarget.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});
