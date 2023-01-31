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



// const addButtonsClickHandler = () => {
//     const serviceButtons = document.querySelector('.service-buttons').addEventListener('click', (e) =>  {
//     // console.log(e);
//     if (e.target.classList.contains('service-button')) {
//         let clickedButton = e.target;
//         console.log(clickedButton);
//         removeSelectedButtons();
//         selectClickedButton(clickedButton);
//     }
//     })
// };



// const removeSelectedButtons = () => {
//     let buttons = document.querySelectorAll('.service-buttons .button-primary');
//     buttons.forEach(button => {
//         button.classList.remove('selected-button')
//         button.classList.add('removed-button')
//     })
// }

// const selectClickedButton = (clickedButton) => {
//     clickedButton.classList.add('selected-button')
//     clickedButton.classList.remove('removed-button')
// }




// const removeBlurEffect = () => {
//     const serviceItems = document.querySelectorAll('.service-items .service-item')
//     serviceItems.forEach(serviceItem => {
//         serviceItem.classList.remove('add-blur')
//         serviceItem.classList.add('remove-blur')
//     })
// };

// const addBlurEffect = () => {
//     const serviceItems = document.querySelectorAll('.service-items .service-item')
//     for (i=0; i<serviceItems.length; i++) {
//         if (!serviceItems[i].classList.contains('garden-care')) {
//             serviceItems[i].classList.add('add-blur')
//             console.log(serviceItems[i])
//         } else {
//             serviceItems[i].classList.remove('add-remove')
//             console.log(serviceItems[i])
//         }
//     }

// }



// const serviceItems = document.querySelectorAll('.service-items .service-item')
// console.log(serviceItems)


// const serviceItems = document.querySelectorAll('.service-items .service-item')





// console.log(serviceButtons)

// const addButtonsClickHandler = () => {
//     const serviceButtons = document.querySelector('.service-buttons').addEventListener('click', (e) =>  {
//     console.log(e);
//     if (e.target.classList.contains('garden-button')) {
//         let clickedButton = e.target;
//         // removeSelectedButtons();
//         // selectClickedButton(clickedButton);


//     }
//     })
// };









/* SERVICE SECTION */

const gardenButton = document.querySelector('.garden-button');
const lawnButton = document.querySelector('.lawn-button');
const plantingButton = document.querySelector('.planting-button');


gardenButton.addEventListener("click", () =>{

    const serviceButtons = document.querySelectorAll('.service-buttons .button-primary')

    for (i=0; i < serviceButtons.length; i++) {
        if (serviceButtons[i].classList.contains('selected-button')) {
            serviceButtons[i].classList.remove('selected-button')
        }
    }

    serviceButtons[0].classList.add('selected-button');

    const serviceItens = document.querySelectorAll('.service-items .service-item')
    for (i=0; i < serviceItens.length; i++) {
        if (serviceItens[i].classList.contains('add-blur')) {
            serviceItens[i].classList.remove('add-blur')
        }
    }
    serviceItens[1].classList.add('add-blur');
    serviceItens[2].classList.add('add-blur');
    serviceItens[3].classList.add('add-blur');
    serviceItens[5].classList.add('add-blur');
})

lawnButton.addEventListener("click", () =>{
    const serviceItens = document.querySelectorAll('.service-items .service-item')

    const serviceButtons = document.querySelectorAll('.service-buttons .button-primary')

    for (i=0; i < serviceButtons.length; i++) {
        if (serviceButtons[i].classList.contains('selected-button')) {
            serviceButtons[i].classList.remove('selected-button')
        }
    }

    serviceButtons[1].classList.add('selected-button');



    for (i=0; i < serviceItens.length; i++) {
        if (serviceItens[i].classList.contains('add-blur')) {
            serviceItens[i].classList.remove('add-blur')
        }
    }

    serviceItens[0].classList.add('add-blur');
    serviceItens[1].classList.add('add-blur');
    serviceItens[3].classList.add('add-blur');
    serviceItens[4].classList.add('add-blur');
    serviceItens[5].classList.add('add-blur');
})

plantingButton.addEventListener("click", () =>{
    const serviceItens = document.querySelectorAll('.service-items .service-item')

    const serviceButtons = document.querySelectorAll('.service-buttons .button-primary')

    for (i=0; i < serviceButtons.length; i++) {
        if (serviceButtons[i].classList.contains('selected-button')) {
            serviceButtons[i].classList.remove('selected-button')
        }
    }

    serviceButtons[2].classList.add('selected-button');


    for (i=0; i < serviceItens.length; i++) {
        if (serviceItens[i].classList.contains('add-blur')) {
            serviceItens[i].classList.remove('add-blur')
        }
    }
    serviceItens[0].classList.add('add-blur');
    serviceItens[2].classList.add('add-blur');
    serviceItens[4].classList.add('add-blur');
})








