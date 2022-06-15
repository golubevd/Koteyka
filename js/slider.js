(function () {
    'use strict';

    const slider = function () {
        const slides = [...document.querySelectorAll('.slide')];
        const slideRightBtn = document.querySelector('#next');
        const slideLeftBtn = document.querySelector('#prev');
        const dotsContainer = document.querySelector('.slider-dots');

        let slideIndex = 0;
        const MAX_SLIDE = slides.length;

        const createDots = function () {
            slides.forEach((_, index) => {
                let button = `<div class="dot dot-active" id='dot-${index}' data-slide='${index}'></div>`
                dotsContainer.insertAdjacentHTML('beforeend', button);
            })
        };

        const activateDot = function (slide) {
            document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot-active'));
            document.querySelector(`.dot[data-slide='${slide}']`).classList.add('dot-active');
        };

        const goToSlide = function (index) {
            slides.forEach((s) => {
                s.classList.remove('slide-active');
            })
            slides[index].classList.add('slide-active');
        };

        function nextSlide() {
            slideIndex++;
            if (slideIndex > MAX_SLIDE - 1) {
                slideIndex = 0;
            }

            goToSlide(slideIndex);
            activateDot(slideIndex);
        }

        function prevSlide() {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = MAX_SLIDE - 1;
            }

            goToSlide(slideIndex);
            activateDot(slideIndex);
        }

        const init = function () {
            goToSlide(0);
            createDots();
            activateDot(0);
        };

        init();

        //Event handlers
        slideRightBtn.addEventListener('click', nextSlide);
        slideLeftBtn.addEventListener('click', prevSlide);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            e.key === 'ArrowRight' && nextSlide();
        })

        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                const {
                    slide
                } = e.target.dataset;
                slideIndex = slide;
                goToSlide(slide);
                activateDot(slide);
            }
        })
    };

    slider();
})();