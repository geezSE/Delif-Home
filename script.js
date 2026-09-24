const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.getElementById('contact-form');
const status = document.querySelector('.form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'message sent — we will get back to you soon.';
    form.reset();
  });
}
