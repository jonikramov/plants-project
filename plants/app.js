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

// const dropDown = document.querySelector('.prices-list__dropdown')
// const priceList = document.querySelector('.prices-list')
// const priceContent = document.querySelector('.prices-list-bottom')
// const dropDownIcon = document.querySelector('.dropdown-icon')
// const pricesLists = document.querySelectorAll('.prices-list')
// // console.log(pricesLists)



// dropDown.addEventListener('click', () => {
//     dropDown.classList.toggle('dropdown-click')
//     priceList.classList.toggle('prices-list-open')
//     priceContent.classList.toggle('display-none')
//     dropDownIcon.classList.toggle('dropdown-icon-open')
//     pricesLists.classList.toggle('prices-lists-open')
// })

// const dropDown = document.getElementsByClassName('prices-list__dropdown')
// const priceList = document.querySelector('.prices-list')
// const priceContent = document.querySelector('.prices-list-bottom')
// const dropDownIcon = document.querySelector('.dropdown-icon')
// const pricesLists = document.getElementsByClassName('.prices-list')

// console.log(dropDown)

// for (i=0; i < dropDown.length; i++) {
//     dropDown[i].addEventListener('click', () => {
//         // this.classList.toggle('dropdown-icon-open')
//         alert(i)
//     })
// }


// const pricesLists = document.querySelectorAll('.prices-lists .prices-list')
// console.log(pricesLists)

// pricesLists.addEventListener('click', (e) => {


//     if (e.target.classList.contains('prices-lists prices-list')) {
//         // e.target.classList.add('')
//     }
// })


// const pricesLists = document.getElementsByClassName('prices-list')

// console.log(pricesLists.length)


// const dropDownIcon = document.getElementsByClassName('dropdown-icon')

// for (i=0; i<dropDownIcon.length; i++) {
//     dropDownIcon[i].addEventListener('click', function () {
//       this.classList.toggle('active')
//     })
//   }

// console.log(dropDownIcon)


// const dropDown = document.getElementsByClassName('prices-list__dropdown')
// const priceList = document.getElementsByClassName('prices-list')
// const priceContent = document.getElementsByClassName('prices-list-bottom')
// const pricesLists = document.getElementsByClassName('prices-list')
// const dropDownIcon = document.getElementsByClassName('dropdown-icon')

// for (i=0; i<dropDownIcon.length; i++) {
//     dropDownIcon[i].addEventListener('click', function () {

//     })
//   }

// console.log(dropDownIcon)

// const dropDownBtns = document.querySelectorAll('.prices-list__dropdown')
// const pricesLists = document.querySelectorAll('.prices-list')


// dropDownBtns.forEach((dropDownButton) => {
//     dropDownButton.addEventListener('click', () => {
//         dropDownButton.classList.toggle('is-open');
//     })
// })

const accordionTops = document.querySelectorAll('.prices-list-top')
const pricesLists = document.querySelector('.prices-lists')

accordionTops.forEach(item => {

    if (pricesLists.classList.contains('is-open')) {
        pricesLists.classList.remove('is-open');
    } else {
        pricesLists.classList.add('is-open');
    }

    item.addEventListener('click', () => {
        if (item.classList.contains('is-open')) {
            item.classList.remove('is-open')
        } else {
            const accordionsIsOpen = document.querySelectorAll('.is-open');
            accordionsIsOpen.forEach( (accordionIsOpen) => {
                accordionIsOpen.classList.remove('is-open')
            })
            item.classList.add('is-open')
        }
    })
})


// const pricesLists = document.querySelectorAll('.prices-list');

// pricesLists.forEach(pricesList => {
//     pricesList.addEventListener('click', () => {
//         pricesList.classList.add('is-open')
//     })
// })

























