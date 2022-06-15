(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function () {


        const odrderButtons = document.querySelectorAll('.get-order');
        const popUpForm = document.querySelector('.room-reservation-form');
        const classList = ['popup-show'];
        const closeForm = document.querySelector('#close-form');
        const orderForm = document.querySelector('#form-reservation');
        const sendFormBtn = orderForm.querySelector('.btn-form');
        const ownerName = orderForm.querySelector('#reservation-form-name');
        const petName = orderForm.querySelector('#reservation-form-pet');
        const phone = orderForm.querySelector('#reservation-form-phone');
        const email = orderForm.querySelector('#reservation-form-mail');
        const fields = orderForm.querySelectorAll('input');
        const dateStart = orderForm.querySelector('#reservation-form-date-begin');
        const dateEnd = orderForm.querySelector('#reservation-form-date-end');
        const presets = {
            MAX_INPUT_LENGTH: 25,
            MIN_INPUT_LENGTH: 2,
            LETTER_PATTERN: '[A-Za-zА-Яа-яЁё ]+',
            PHONE_MASK: "+7(___)___-__-__",
            PHONE_PATTERN: "\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}",
            PHONE_VALUE: "+7(___)___-__-__",
            EMAIL_PATTERN: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" //^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})
        }

        //Инициализация атрибутов полей формы

        function init() {
            ownerName.required = true;
            ownerName.minLength = presets.MIN_INPUT_LENGTH;
            ownerName.pattern = presets.LETTER_PATTERN;
            ownerName.maxLength = presets.MAX_INPUT_LENGTH;
            petName.required = true;
            petName.minLength = presets.MIN_INPUT_LENGTH;
            petName.maxLength = presets.MAX_INPUT_LENGTH;
            petName.pattern = presets.LETTER_PATTERN;
            email.required = true;
            email.pattern = presets.EMAIL_PATTERN;
            phone.placeholder = presets.PHONE_MASK;
            phone.required = true;
        }

        //Маска для телефона
        function setCursorPosition(pos, e) {
            e.focus();
            if (e.setSelectionRange) e.setSelectionRange(pos, pos);
            else if (e.createTextRange) {
                let range = e.createTextRange();
                range.collapse("true");
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }

        function mask(e) {
            let mask = this.placeholder,
                i = 0,
                def = mask.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            def.length >= val.length && (val = def);
            mask = mask.replace(/[_\d]/g, function (a) {
                return val.charAt(i++) || "_"
            });

            this.value = mask;
            i = mask.lastIndexOf(val.substr(-1));
            i < mask.length && mask != this.placeholder ? i++ : i = mask.indexOf("_");
            setCursorPosition(i, this);
        }
        window.addEventListener("DOMContentLoaded", function () {
            var input = document.querySelector("#reservation-form-phone");
            input.addEventListener("input", mask, false);
            input.focus();
            setCursorPosition(3, input);
        });


        ////Создание окна при успешной отправки формы
        const creatSuccsessElement = function () {
            const bodyContainer = document.querySelector('main');
            let mainSection = document.createElement('section');
            let block = document.createElement('div');
            let header = document.createElement('h3');
            let text = document.createElement('p');
            let succsessBtn = `<button type="button" class="btn btn-bg-orange btn-form-succsess">Ok<span><img
    src="img/btn-icon-white.svg" alt="Order"></span></button>`;
            let closeBtn = `<button class="close-form-btn" id="close-form-succsess">Закрыть форму</button>`;
            mainSection.classList.add('succsess');
            block.classList.add('succsess-block');
            header.innerText = "Спасибо за заявку!";
            text.innerText = "Мы свяжемся с вами в ближайшее время";
            mainSection.appendChild(block)
            block.append(header);
            block.append(text);
            block.insertAdjacentHTML('beforeend', succsessBtn);
            block.insertAdjacentHTML('beforeend', closeBtn);


            const confirm = mainSection.querySelector('.succsess-block .btn-form-succsess');
            const close = mainSection.querySelector('.succsess-block .close-form-btn');

            confirm.addEventListener('click', function () {
                removeSuccsess(mainSection);
            });

            close.addEventListener('click', function () {
                removeSuccsess(mainSection);
            });

            function removeSuccsess(revomeElem) {
                document.body.removeChild(revomeElem);
            }

            document.body.appendChild(mainSection);
        }

        //Отправка формы

        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (orderForm.checkValidity()) {
                creatSuccsessElement();
                document.querySelector('.succsess').classList.add('popup-show');
                orderForm.reset();
                window.togglemenu.toggleClass(popUpForm, classList[0]);
            }
        });


        //Events
        odrderButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                popUpForm.classList.add(classList[0]);
            })
        })

        closeForm.addEventListener('click', () => {
            window.togglemenu.toggleClass(popUpForm, classList[0]);
            orderForm.reset();
        });

        window.togglemenu.onEscClose(popUpForm, classList[0]);

        init();

        window.makeorder= {
            popUpForm:popUpForm,
            orderForm:orderForm
        }

    });

})();