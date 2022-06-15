(function () {
    'use strict';

    /*Прокрутка к блоку при клике по ссылке */

    const linksList = document.querySelectorAll('.menu-item-link[data-goto]');
    const header = document.querySelector('.main-header');
    const toggleButton = document.querySelector('.main-nav--toggler');
    const menu = document.querySelector('.main-nav-menu');
    if (linksList.length > 0) {
        linksList.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick)
        });

        function onMenuLinkClick(e) {
            e.preventDefault();

            const menuLink = e.target;

            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                gotoBlock.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })


                /*  window.scrollTo({
                      top: gotoBlockValue,
                      behavior: 'smooth'
                  });*/

            }
        }
    }

    function menuOffScroll(block, modifer) {
        window.addEventListener('scroll', function () {
            let windowH = window.pageYOffset;
            let headerH = header.clientHeight;
            if (windowH > headerH) {
                block.classList.contains(modifer) && block.classList.remove(modifer);
            }
        })
    }

    menuOffScroll(toggleButton, 'toggler-active');
    menuOffScroll(header, 'header-active');
    menuOffScroll(menu, 'menu-active');

})();