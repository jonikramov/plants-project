console.log("Hello World");

/* BURGER SECTION */

const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelector('.burger-close');
const overlay = document.querySelector('.overlay');
const burgerMenuItems = document.querySelector('.burger-nav-list')


burgerIcon.addEventListener("click", () =>{
    burgerMenu.classList.add('burger-menu-active');
    overlay.classList.add('overlay-active');
})

burgerMenuClose.addEventListener("click", () => {
    burgerMenu.classList.remove('burger-menu-active');
    overlay.classList.remove('overlay-active');
})

overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu-active');
    overlay.classList.remove('overlay-active');
} )

burgerMenuItems.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu-active');
    overlay.classList.remove('overlay-active');
} )



/* SERVICE SECTION */

const serviceButtons = document.querySelector('.service-buttons')
const serviceItems = document.querySelectorAll('.service-item')

serviceButtons.addEventListener('click', e => {

    if (e.target.classList.contains('service-buttons button-primary')) {
        e.target.classList.add('selected-button')
    }

    let countButton = document.getElementsByClassName('button-primary selected-button').length


    if (countButton === 2 && !e.target.classList.contains('selected-button')) {
        return
    }

    if (e.target.classList.contains('service-buttons')) {
        return
    }

    if (e.target.classList.contains('selected-button')) {
        e.target.classList.remove('selected-button')
    } else {
        e.target.classList.add('selected-button')
    }

    serviceItems.forEach(serviceItem => serviceItem.classList.add('add-blur'))

    for (buttonActive of document.getElementsByClassName('button-primary selected-button')) {
        serviceItems.forEach(serviceItem => {
            if (serviceItem.getAttribute('data-type') === buttonActive.id) {
                serviceItem.classList.remove('add-blur')
            }
        })
    }

    checkAmount()
})

function checkAmount() {
    let countButton = document.getElementsByClassName('button-primary selected-button').length;
    serviceItems.forEach(serviceItem => {
        if (countButton === 0) {
            serviceItem.classList.remove('add-blur')
        }
    })
}












