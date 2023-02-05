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



/* PRICE SECTION */
const accordion = document.querySelector('.prices-lists')
const accBtns = document.querySelectorAll('.prices-list')
const accTop = document.querySelectorAll('.prices-list-top');

for (let i = 0; i < accTop.length; i++) {
    accTop[i].addEventListener('click', (event) => {

        for (let x = 0; x < accTop.length; x++) {
            if (accBtns[x] !== accBtns[i]) {
                accTop[x].classList.remove('is-open')
                accBtns[x].classList.remove('is-open');
                accordion.classList.remove('is-open');

            } else {
                accordion.classList.remove('is-open');
            }
        }
        accTop[i].classList.toggle('is-open');
        accBtns[i].classList.toggle('is-open');
        accordion.classList.add('is-open');

        // console.log(accBtns);



    })

}

// for (i = 0; accBtns.length; i++) {
//     if (accBtns[i].classList.contains('is-open')) {
//         accordion.classList.remove('is-open');
//     }
// }

const x = document.querySelectorAll('.prices-list .is-open').length;
console.log(x)

// console.log(accBtns)
























