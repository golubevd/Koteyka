(function () {


    "use strict";

    //МОС data запроса
    let data = [{
            "id": 0,
            "title": "Эконом",
            "isHot": false,
            "slides": [{
                "phone": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pad": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pc": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }],
            "slideswebp": [{
                "phone": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pad": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pc": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }],
            "pictures": [{
                "phone": "img/phone/catalog-img-1--phone.jpg",
                "pad": "img/pad/catalog-img-1--pad.jpg",
                "pc": "img/catalog-img-1.jpg"
            }],
            "webp": [{
                "phone": "img/phone/webp/catalog-img-1--phone.webp",
                "pad": "img/pad/webp/catalog-img-1--pad.webp",
                "pc": "img/webp/catalog-img-1.webp"
            }],
            "equipment": [
                "empty",
            ],
            "price": 100,
            "square": 0.63,
            "size": [{
                "w": 90,
                "l": 70,
                "h": 180
            }]
        },
        {
            "id": 1,
            "title": "Эконом плюс",
            "isHot": true,
            "slides": [{
                "phone": "img/phone/room-1--phone.jpg",
                "pad": "img/pad/room1-img.jpg",
                "pc": "img/room1-img.jpg"
            }],
            "slideswebp": [{
                "phone": "img/phone/webp/room-1--phone.webp",
                "pad": "img/pad/webp/room-1--pad.webp",
                "pc": "img/webp/room1-img.webp"
            }],
            "pictures": [{
                "phone": "img/phone/catalog-img-2--phone.jpg",
                "pad": "img/pad/catalog-img-2--pad.jpg",
                "pc": "img/catalog-img-2.jpg"
            }],
            "webp": [{
                "phone": "img/phone/webp/catalog-img-2--phone.webp",
                "pad": "img/pad/webp/catalog-img-2--pad.webp",
                "pc": "img/webp/catalog-img-2.webp"
            }],
            "equipment": [
                "sofa",
                "cat-tree",
            ],
            "price": 200,
            "square": 0.90,
            "size": [{
                "w": 90,
                "l": 100,
                "h": 180
            }]
        },
        {
            "id": 2,
            "title": "Комфорт",
            "isHot": true,
            "slides": [{
                "phone": "img/phone/room-2--phone.jpg",
                "pad": "img/pad/room2-img.jpg",
                "pc": "img/room2-img.jpg"
            }],
            "slideswebp": [{
                "phone": "img/phone/webp/room-2--phone.webp",
                "pad": "img/pad/webp/room-2--pad.webp",
                "pc": "img/webp/room2-img.webp"
            }],
            "pictures": [{
                "phone": "img/phone/catalog-img-3--phone.jpg",
                "pad": "img/pad/catalog-img-3--pad.jpg",
                "pc": "img/catalog-img-3.jpg"
            }],
            "webp": [{
                "phone": "img/phone/webp/catalog-img-3--phone.webp",
                "pad": "img/pad/webp/catalog-img-3--pad.webp",
                "pc": "img/webp/catalog-img-3.webp"
            }],
            "equipment": [
                "sofa",
                "cat-tree",
                "toy",

            ],
            "price": 250,
            "square": 1.13,
            "size": [{
                "w": 100,
                "l": 125,
                "h": 180
            }]
        },
        {
            "id": 3,
            "title": "Сьют",
            "isHot": true,
            "slides": [{
                "phone": "img/phone/room-3--phone.jpg",
                "pad": "img/pad/room3-img.jpg",
                "pc": "img/room3-img.jpg"
            }],
            "slideswebp": [{
                "phone": "img/phone/webp/room-3--phone.webp",
                "pad": "img/pad/webp/room-3--pad.webp",
                "pc": "img/webp/room3-img.webp"
            }],
            "pictures": [{
                "phone": "img/phone/catalog-img-4--phone.jpg",
                "pad": "img/pad/catalog-img-4--pad.jpg",
                "pc": "img/catalog-img-4.jpg"
            }],
            "webp": [{
                "phone": "img/phone/webp/catalog-img-4--phone.webp",
                "pad": "img/pad/webp/catalog-img-4--pad.webp",
                "pc": "img/webp/catalog-img-4.webp"
            }],
            "equipment": [
                "sofa",
                "cat-tree",
                "toy",

            ],
            "price": 350,
            "square": 1.56,
            "size": [{
                "w": 125,
                "l": 125,
                "h": 180
            }]
        },
        {
            "id": 4,
            "title": "Люкс",
            "isHot": false,
            "slides": [{
                "phone": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pad": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pc": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }],
            "slideswebp": [{
                "phone": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pad": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "pc": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }],
            "pictures": [{
                "phone": "img/phone/catalog-img-5--phone.jpg",
                "pad": "img/pad/catalog-img-5--pad.jpg",
                "pc": "img/catalog-img-5.jpg"
            }],
            "webp": [{
                "phone": "img/phone/webp/catalog-img-5--phone.webp",
                "pad": "img/pad/webp/catalog-img-5--pad.webp",
                "pc": "img/webp/catalog-img-5.webp"
            }],
            "equipment": [
                "sofa",
                "cat-tree",
                "toy",
                "house"
            ],
            "price": 500,
            "square": 2.56,
            "size": [{
                "w": 160,
                "l": 160,
                "h": 180
            }]
        },
        {
            "id": 5,
            "title": "Супер-Люкс",
            "isHot": false,
            "slides": [{
                "phone": "img/phone/room-6--phone.jpg",
                "pad": "img/pad/room6-img.jpg",
                "pc": "img/room6-img.jpg"
            }],
            "slideswebp": [{
                "phone": "img/phone/webp/room-6--phone.webp",
                "pad": "img/pad/webp/room-6--pad.webp",
                "pc": "img/webp/room6-img.webp"
            }],
            "pictures": [{
                "phone": "img/phone/catalog-img-6--phone.jpg",
                "pad": "img/pad/catalog-img-6--pad.jpg",
                "pc": "img/catalog-img-6.jpg"
            }],
            "webp": [{
                "phone": "img/phone/webp/catalog-img-6--phone.webp",
                "pad": "img/pad/webp/catalog-img-6--pad.webp",
                "pc": "img/webp/catalog-img-6.webp"
            }],
            "equipment": [
                "sofa",
                "cat-tree",
                "toy",
                "house"
            ],
            "price": 600,
            "square": 2.88,
            "size": [{
                "w": 180,
                "l": 160,
                "h": 180
            }]
        }

    ];
    const classList = ['popup-show'];
  
    //Рендер карточек комнат
    function renderCard(data) {
        const container = document.querySelector('.catalog-list');
        if (container) {

            container.innerHTML = '';

            data.forEach(card => {
                let element = document.createElement('li');
                element.classList.add('catalog-item');
                element.id = card.id;
                element.innerHTML = `
        <a href="" class="room-photo show-more">
        <picture>
            <source type="image/webp" media="(min-width:1365px)"
                srcset="${card.webp[0].pc}">
            <source type="image/webp" media="(min-width:767px)"
                srcset="${card.webp[0].pad}">
            <source type="image/webp" srcset="${card.webp[0].phone}">
            <source media="(min-width:1365px)" srcset="${card.pictures[0].pc}">
            <source media="(min-width:767px)" srcset="${card.pictures[0].pad}">
            <img class="room-img" src="${card.pictures[0].phone}"
                srcset="${card.pictures[0].phone}" width="290"
                alt="Фото номера класса ${card.title} ">
        </picture>
    </a>
    <article class="catalog-item-container">
        <h3>${card.title}</h3>
        <ul class="catalog-item-description">
            <li>Размеры (ШхГхВ) — ${card.size[0].w}х${card.size[0].l}х${card.size[0].h}см</li>
            <li>Площадь - ${card.square} м<sup>2</sup></li>
            <li class="equipment">Оснащение номера
                <ul class="equipment-list">
                    <li class="equipment-item equipment-item-empty" title="Пустой номер">Пустой
                        номер</li>
                </ul>
            </li>
            <li>Цена за сутки: <span class="cost">${card.price}₽</span></li>
        </ul>
        <a href="#" class="btn btn-bg-orange get-order">Забронировать<span><img
                    src="img/btn-icon-white.svg" alt="Забронировать"></span></a>
    </article>
        `;
                container.appendChild(element);
                getEquipment(element, card.equipment);


                element.querySelector('.get-order').addEventListener('click', (e) => {
                    e.preventDefault();
                    window.makeorder.popUpForm.classList.add(classList[0]);
                });
   

            })
            openFullDesc(container);
        }
    };

    //Отрисовка списка оборудование в комнате 
    function getEquipment(block, data) {
        const container = block.querySelector('.equipment-list');
        container.innerHTML = '';
        data.forEach(el => {
            const li = document.createElement('li');
            li.className = 'equipment-item';
            li.classList.add('equipment-item-' + el);
            switch (el) {
                case "empty":
                    li.title = "Пустой номер";
                    li.innerText = "Пустой номер";
                    break;
                case "sofa":
                    li.title = "Лежак";
                    li.innerText = "Лежак";
                    break;
                case "cat-tree":
                    li.title = "Когтеточка";
                    li.innerText = "Когтеточка";
                    break;
                case "toy":
                    li.title = "Игровой комплекс";
                    li.innerText = "Игровой комплекс";
                    break;
                case "house":
                    li.title = "Домик";
                    li.innerText = "Домик";
                    break;
                default:
                    li.title = "";
                    li.innerText = "";
                    break;
            }
            container.appendChild(li);
        })
    };

    //Удаление карточки объекта    
    const removeCard = function () {
        const container = document.querySelector('.catalog-list');
        const cards = container.querySelectorAll('.catalog-item');
        cards.forEach(function (elem) {
            elem.remove();
        });
    };



    const sortPriceUp = function (data) {
        data.sort(function (x, y) {
            return x.price - y.price;
        });
        renderCard(data);
    };

    const sortPriceDown = function (data) {
        data.sort(function (x, y) {
            return y.price - x.price;
        });
        renderCard(data);
    };

    const sortSquareDown = function (data) {
        data.sort(function (x, y) {
            return y.square - x.square;
        });
        renderCard(data);
    }

    const sortSquareUp = function (data) {
        data.sort(function (x, y) {
            return x.square - y.square;
        });
        renderCard(data);
    }

    const checkFilters = function (target) {
        if (target.checked && target.dataset.sorting === "price" && target.dataset.sortingOrder === "desc") {
            sortPriceDown(data);
        } else if (target.checked && target.dataset.sorting === "price" && target.dataset.sortingOrder === "asc") {
            sortPriceUp(data);
        } else if (target.checked && target.dataset.sorting === "square" && target.dataset.sortingOrder === "desc") {
            sortSquareDown(data);
        } else if (target.checked && target.dataset.sorting === "square" && target.dataset.sortingOrder === "asc") {
            sortSquareUp(data);
        }
    }

    const openFullDesc = function (block) {
        let links = block.querySelectorAll('.show-more');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                let cartLink = e.target.closest('.catalog-item');
                link.href = `cart.html#${cartLink.id}`

            })
        })

    }


    renderCard(data);


    window.request = {
        data: data,
        sortPriceDown: sortPriceDown,
        sortPriceUp: sortPriceUp,
        sortSquareUp: sortSquareUp,
        sortSquareDown: sortSquareDown,
        checkFilters: checkFilters,
        getEquipment: getEquipment

    }


})();