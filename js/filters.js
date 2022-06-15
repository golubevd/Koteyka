(function(){
'use strict';

const form = document.querySelector('#filters-form');
const priceFrom = form.querySelector('#filters-form-price-from');
const priceTo = form.querySelector('#filters-form-price-to');
const aceprtBtn = form.querySelector('.btn-acept');
const resetBtn = form.querySelector('.btn-drop');
const sortingBtn = document.querySelector('.sorting-toggler');
const sortingList = document.querySelector('.sorting-list');
const soringItems = sortingList.querySelectorAll('.sorting-item');
const hiddenInputList = document.querySelector('.sorting');
const sortingInputs = hiddenInputList.querySelectorAll('input');
const filterToggleBtn = document.querySelector('.filter-toggler');
const flitersContainer = document.querySelector('.filters');
const closeFilterPopup = document.querySelector('.close-popup');
const inputs = form.querySelectorAll('input[type=checkbox]');



const PRICE_RANGE = {
    MIN:100,
    MAX:600
};

function checkPrice(price){
    price.addEventListener('input',function(e){      
        e.target.value = e.target.value.replace(/[^\d]/g, '');
    })
}



resetBtn.addEventListener('click',function(e){
    priceFrom.value=PRICE_RANGE.MIN;
    priceTo.value = PRICE_RANGE.MAX; 
    restChekbox();
    resetBtn.disabled= true;
    aceprtBtn.disabled= true;
});


const restChekbox = function(){
    inputs.forEach(element=>{
        element.checked = true;       
    });
}


form.addEventListener('change',()=>{
    resetBtn.disabled=false;
    aceprtBtn.disabled= false;
});

let data = [];

function getCheckboxValue(){
    inputs.forEach(input=>{
        if(input.checked){
           data.push(input.value);
        }
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getCheckboxValue();
    console.log(priceFrom.value,priceTo.value,data.toString());
})

filterToggleBtn.addEventListener('click',function(){
    window.togglemenu.toggleClass(flitersContainer,'show-popup-filters');
})

closeFilterPopup.addEventListener('click',function(){
    window.togglemenu.toggleClass(flitersContainer,'show-popup-filters');
})

//Клик по кнопке открыть
sortingBtn.addEventListener('click', function(){
    window.togglemenu.toggleClass(sortingList,'sorting-list-show'); 
    this.classList.add('sorting-toggler--active');   
    window.togglemenu.onEscClose(sortingList,'sorting-list-show');
})

soringItems.forEach((item,index)=>{  
    item.addEventListener('click',function(e){  
        e.stopPropagation();
        let targetInput = hiddenInputList.querySelector(`#sorting_${index+1}`);
        sortingBtn.innerText = this.innerText; 
        targetInput.checked = true;
        sortingBtn.focus();     
        window.togglemenu.toggleClass(sortingList,'sorting-list-show');     
        selectActiveItem(index);       
    window.request.checkFilters(targetInput);
       
    })
})


//установка стилией для выбранного списка меню.
function selectActiveItem(iterator) {  
        soringItems.forEach(function(item, iter) {
            item.classList.remove('sorting-item--active');
            if(iterator == iter) {
                item.classList.add('sorting-item--active');
            }
        });
}


//Клик снаружи списка. Закрыть список
document.addEventListener('click',function(e){
    if(e.target !== sortingBtn){
        sortingList.classList.remove('sorting-list-show');  
        sortingBtn.classList.remove('sorting-toggler--active');  
    }

})

window.togglemenu.onEscClose(flitersContainer,'show-popup-filters');


function init(){
    resetBtn.disabled= true;
    aceprtBtn.disabled= true;
  soringItems[0].classList.add('sorting-item--active');
  sortingInputs[0].checked = true;
};

init();
checkPrice(priceFrom);
checkPrice(priceTo);

})();