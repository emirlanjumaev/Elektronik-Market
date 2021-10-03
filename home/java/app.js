let head = document.querySelector('.menu-btn');
let nav = document.querySelector('.navbar');
let inner = document.querySelector('.nav-img');

head.addEventListener('click', function(item){
let navbar = nav;

nav.classList.remove('navbar__active')

nav.classList.add('navbar__active');
})

inner.addEventListener('click', function(wrap){
    nav.classList.remove('navbar__active')
})