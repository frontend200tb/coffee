const button = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

button.addEventListener('click', () => { 
  event.preventDefault();
  menu.classList.toggle('is-open');
});
