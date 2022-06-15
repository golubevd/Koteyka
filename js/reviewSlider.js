'use strict';

$('.reviews-list').slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots:true,
    appendArrows:$('.review-slider-controls'),
    appendDots:$('.review-slider-controls'),
    responsive: [
	    {
	      breakpoint: 1365,
	      settings: {
            slidesToShow: 2,
            arrows:false,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
            slidesToShow: 1,
            arrows:false,
	      }
	    }
    ]
})
