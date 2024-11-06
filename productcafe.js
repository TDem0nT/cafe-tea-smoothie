let productimg = document.querySelectorAll('.product > img')
let productname = document.querySelectorAll('.product > a')
let productteaclick = document.querySelectorAll('.product > a')
let productsodaclick = document.querySelectorAll('.product > a')
let productsmoothieclick = document.querySelectorAll('.product > a')
let Headmenu = document.querySelector('.mymenu > h1')


let Get = sessionStorage.getItem('key')
sessionStorage.setItem('keyproducttea', null)
sessionStorage.setItem('keyproductsoda', null)
sessionStorage.setItem('keyproductsmoothie', null)

let arrteaimg = ['img/teathai.png', 'img/lemontea.png', 'img/greentea.png']
let arrsodaimg = ['img/Cocacola.png', 'img/fanta.png', 'img/sprite.png']
let arrsmoothieimg = ['img/strawberry.png', 'img/bluebarry.png', 'img/orange.png']

let arrteaname = ['Thai Tea', 'Lemon Tea', 'Grean Tea']
let arrsodaname = ['Coca Cola', 'Fanta Orange', 'Sprite']
let arrsmoothiename = ['Strawberry Smoothie', 'Blueberry Smoothie', 'Orange Smoothie']
let arrmenu = ['Tea Menu', 'Soda Menu', 'Smoothie Menu']


if (Get == 1) {
    for (let i = 0; i < productimg.length; i++) {
        productimg[i].src = arrteaimg[i]
        productname[i].innerHTML = arrteaname[i]
        Headmenu.innerHTML = arrmenu[0]
    }
    productteaclick[0].addEventListener("click", () => {
        sessionStorage.setItem('keyproducttea', 'product1')
    });
    productteaclick[1].addEventListener("click", () => {
        sessionStorage.setItem('keyproducttea', 'product2')
    });
    productteaclick[2].addEventListener("click", () => {
        sessionStorage.setItem('keyproducttea', 'product3')
    });
} 

else if (Get == 2) {
    for (let i = 0; i < productimg.length; i++) {
        productimg[i].src = arrsodaimg[i]
        productname[i].innerHTML = arrsodaname[i]
        Headmenu.innerHTML = arrmenu[1]
    }
    productsodaclick[0].addEventListener("click", () => {
        sessionStorage.setItem('keyproductsoda', 'product4')
    });
    productsodaclick[1].addEventListener("click", () => {
        sessionStorage.setItem('keyproductsoda', 'product5')
    });
    productsodaclick[2].addEventListener("click", () => {
        sessionStorage.setItem('keyproductsoda', 'product6')
    });
} 

else if (Get == 3) {
    for (let i = 0; i < productimg.length; i++) {
        productimg[i].src = arrsmoothieimg[i]
        productname[i].innerHTML = arrsmoothiename[i]
        Headmenu.innerHTML = arrmenu[2]
    }
    productsmoothieclick[0].addEventListener("click", () => {
        sessionStorage.setItem('keyproductsmoothie', 'product7')
    });
    productsmoothieclick[1].addEventListener("click", () => {
        sessionStorage.setItem('keyproductsmoothie', 'product8')
    });
    productsmoothieclick[2].addEventListener("click", () => {
        sessionStorage.setItem('keyproductsmoothie', 'product9')
    });
}
