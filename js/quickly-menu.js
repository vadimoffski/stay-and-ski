const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
console.log(menuLinks);
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset +80;

            const menu = document.querySelector('.header__menu');
            const iconMenu = document.querySelector('.menu-icon');
            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault(); 
        }
    }
}