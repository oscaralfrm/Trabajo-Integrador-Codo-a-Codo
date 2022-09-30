const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll('nav_item').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))

const botonCafe = document.querySelector('.boton');

botonCafe.addEventListener("click", () => {
  window.open("https://goo.gl/maps/r45nhii8E3GZHZkj6");
})
