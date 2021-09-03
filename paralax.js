let bg = document.querySelector('.paralax__img-bg');
let title = document.querySelector('.paralax__h2');
let mountains = document.querySelector('.paralax__img-mountains');
let heel = document.querySelector('.paralax__img-heel');
let boarder = document.querySelector('.paralax__img-boarder');
let header = document.querySelector('.header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    // bg.style.top = value * -0.5 +'px';
    title.style.top = 60 + value * 1 +'px';
    mountains.style.top = 150 + value * 0.5 +'px';
    header.style.top = value * 0.5 +'px';
    boarder.style.right = value * 0.5 +'px';

});

console.log(title);