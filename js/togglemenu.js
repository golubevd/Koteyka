(function(){
'use strict';

const header = document.querySelector('.main-header');
const toggleButton = document.querySelector('.main-nav--toggler');
const menu = document.querySelector('.main-nav-menu');


function toggleClass(block, classStyle){
    block.classList.toggle(classStyle);
}

toggleButton.addEventListener('click', function(){
    toggleClass(toggleButton,'toggler-active');
    toggleClass(header,'header-active');
    toggleClass(menu,'menu-active');
})

const onEscClose = function (block, modifer) {
    window.addEventListener("keydown", function (e) {
        e.keyCode === 27 && block.classList.contains(modifer) && block.classList.remove(modifer);
    });
}

document.addEventListener("click", function (e) {
    let target = e.target;
    let its_menu = target == header || header.contains(target);
    let its_gamburger = target == toggleButton;
    let menu_is_active = menu.classList.contains('menu-active');

    if (!its_menu && !its_gamburger && menu_is_active) {
        toggleClass(toggleButton,'toggler-active');
        toggleClass(header,'header-active');
        toggleClass(menu,'menu-active');
       
    }
});


onEscClose(toggleButton,'toggler-active');
onEscClose(header,'header-active');
onEscClose(menu,'menu-active');


window.togglemenu={
    toggleClass:toggleClass,
    onEscClose:onEscClose
};

})();