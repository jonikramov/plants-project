console.log("Hello World");

const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelector('.burger-close');
const overlay = document.querySelector('.overlay');

burgerIcon.addEventListener("click", () =>{
    burgerMenu.classList.add('burger-menu-active');
    overlay.classList.add('overlay-active');
})

burgerMenuClose.addEventListener("click", () => {
    burgerMenu.classList.remove('burger-menu-active');
    overlay.classList.remove('overlay-active');
})

overlay.addEventListener('click', (event) => {
    burgerMenu.classList.remove('burger-menu-active');
    overlay.classList.remove('overlay-active');
} )




























