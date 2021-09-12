let bg = document.querySelector('.paralax__img-bg');
let title = document.querySelector('.paralax__h2');
let mountains = document.querySelector('.paralax__img-mountains');
let heel = document.querySelector('.paralax__img-heel');
let boarder = document.querySelector('.paralax__img-boarder');
let header = document.querySelector('.header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    title.style.top = 5 + value * 0.2 +'%';
    mountains.style.top = value * 0.3 +'%';
    // header.style.top = value * -0.5 +'px';
    boarder.style.right =value * 0.9 +'px';

});

console.log(title);