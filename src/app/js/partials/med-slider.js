$('.transparent-content-block__med-slider-items').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});