(function () {
    "use strict"

    const cartContainer = document.querySelector('.card-container');
    const descBlock = document.querySelector('.card-description');
    const cardTitle = descBlock.querySelector('.card-title');
    const cardSize = descBlock.querySelector('.size');
    const cardSquare = descBlock.querySelector('.square');
    const cardPrice = descBlock.querySelector('.cost');
    const cardLink = descBlock.querySelector('.get-order');


    if (window.location.hash) {
        let idx = +window.location.hash.replace("#", "");
        let data = window.request.data[idx];

       

        cardTitle.innerHTML = `${data.title}`;
        cardSize.innerHTML = `${data.size[0].w}х${data.size[0].l}х${data.size[0].h} см`
        cardSquare.innerHTML = `${data.square} м<sup>2</sup>`;
        cardPrice.innerHTML = `${data.price}₽`;
        cardLink.href = `#${data.id}`;

        window.request.getEquipment(descBlock, data.equipment)
        renderCartMainPhoto(data)

    } else {
        cartContainer.innerHTML = "Не удалось загрузить описание номера! Попробуйте зайти позже"
    }


    function renderCartMainPhoto(data) {
        const mainPhoto = document.querySelector('.main-slide');
        const picture = document.createElement('p');
        mainPhoto.innerHTML ='';
        picture.className ='card-photo-full';
        picture.innerHTML = `
        <picture>
        <source type="image/webp" media="(min-width:1365px)"
            srcset="${data.slideswebp[0].pc}">
        <source type="image/webp" media="(min-width:767px)"
            srcset="${data.slideswebp[0].pad}">
        <source type="image/webp" srcset="${data.slideswebp[0].phone}">
        <source media="(min-width:1365px)" srcset="${data.slides[0].pc}">
        <source media="(min-width:767px)" srcset="${data.slides[0].pad}">
        <img src="${data.slides[0].phone}"
            srcset="${data.slides[0].phone}" width="290"
            alt="Фото номера класса ${data.title}">
    </picture>
        `;
      
        mainPhoto.appendChild(picture);
    }



})();