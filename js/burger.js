const iconMenu = document.querySelector('.menu-icon');
if (iconMenu){
    const menu = document.querySelector('.header__menu');
    iconMenu.addEventListener('click', function(){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}