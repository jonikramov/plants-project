window.onload = function(){
    console.log("Hello World");

    addButtonsClickHandler();
}

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


const serviceItems = document.querySelector('.service-items')


const addButtonsClickHandler = () => {
    const serviceButtons = document.querySelector('.service-buttons').addEventListener('click', (e) =>  {
    console.log(e);
    if (e.target.classList.contains('button-primary')) {
        let clickedButton = e.target;
        removeSelectedButtons();
        selectClickedButton(clickedButton);
    }
    })
};


const removeSelectedButtons = () => {
    let buttons = document.querySelectorAll('.service-buttons .button-primary');
    console.log(buttons)
    buttons.forEach(button => {
        button.classList.remove('selected-button')
        button.classList.add('removed-button')
    })
}

const selectClickedButton = (clickedButton) => {
    clickedButton.classList.add('selected-button')
    clickedButton.classList.remove('removed-button')
}









// const gardenButton = document.querySelector('.garden-button');
// const plantingButton = document.querySelector('.planting-button');
// const lawnCareButton = document.querySelector('.lawn-button');


// const gardenCare = document.querySelectorAll('.garden-care');
// const planting = document.querySelectorAll('.planting');
// const lawnCare = document.querySelectorAll('.lawn-care');


// function addBlur(section) {
//     for (let i=0; i < section.length; i++) {
//         section[i].classList.add('blur');
//     }
// }

// function removeBlur() {
//     for (let i=0; i < section.length; i++) {
//         section[i].classList.remove('blur');
//     }
// }



// gardenButton.addEventListener('click', () => {
//     addBlur(planting);
//     addBlur(lawnCare);
//     removeBlur(gardenCare);
// } )

// plantingButton.addEventListener('click', () => {
//     addBlur(gardenCare);
//     addBlur(lawnCare);
//     removeBlur(planting);
// } )

// lawnCareButton.addEventListener('click', () => {
//     addBlur(planting);
//     addBlur(gardenCare);
//     removeBlur(lawnCare);
// } )




















