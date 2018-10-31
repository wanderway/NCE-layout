$('.slider-block__doc-slider-items').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "20px",
    responsive: [
        {
            breakpoint: 1151,
            settings: {
                slidesToShow: 3,
            }
        }
    ]

});