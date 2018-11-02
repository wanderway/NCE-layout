(function () {
    const App = {
        init: function () {
            Search.init();
            Sliders.init();
        }
    };

    const Search = {
        init: function () {
            const search = document.querySelector('.search');
            const toggle = document.querySelector('.search__toggle');
            const changingIcon = document.querySelector('.search__changing-icon');

            if (toggle) {
                toggle.addEventListener('click', function () {
                    if (search.classList.contains('search--closed')) {
                        search.classList.remove('search--closed');
                        search.classList.add('search--opened');
                        changingIcon.setAttribute("href", "#changing-icon")
                    } else {
                        search.classList.add('search--closed');
                        search.classList.remove('search--opened');
                        changingIcon.setAttribute("href", "#search-icon")

                    }
                });
            }
        }
    };
    const Sliders = {
        init: function () {
            this.initMedSlider();
            this.initLanguageBar();
            this.initDocSlider();
        },
        initMedSlider: function () {
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
        },
        initLanguageBar: function () {
            let navMain = document.querySelector('.navigation-block__languages');

            navMain.addEventListener('click', function () {
                if (navMain.classList.contains('navigation-block__languages--closed')) {
                    navMain.classList.remove('navigation-block__languages--closed');
                    navMain.classList.add('navigation-block__languages--opened');
                } else {
                    navMain.classList.add('navigation-block__languages--closed');
                    navMain.classList.remove('navigation-block__languages--opened');
                }
            });

        },
        initDocSlider: function () {

            let element = $('.transparent-content-block__doc-slider-items');
            if (element.length) {
                element.slick({
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 1151,
                            settings: {
                                slidesToShow: 3,
                            }
                        }
                    ]

                });
            }
        }
    };

    App.init();
})();