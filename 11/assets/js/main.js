$(document).ready(function () {
    (function () {
        $(".arrivals__slider").slick({
            infinite: true,
            variableWidth: true,
            arrows: false,
            dotsClass: 'slick-dots top-dots',
            accessibility: true,
            autoplay: false,
            autoplaySpeed: 800,
            speed: 1000,
            alwaysCenter: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        alwaysCenter: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        alwaysCenter: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                    }
                },

                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 2,
                        alwaysCenter: true,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 368,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        alwaysCenter: true,
                        variableWidth: true,
                        dots: true,
                        dotsClass: 'slick-dots top-dots',
                    }
                },
            ]
        });
        $('.arrivals__arrow').click(function() {
            $('.arrivals__slider').slick($(this).hasClass('arrivals__next') ? 'slickNext' : 'slickPrev');
        })
    })();

    (function () {
        $(".partners__slider").slick({
            accessibility: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            alwaysCenter: true,
            autoplaySpeed: 800,
            speed: 1000,
            slidesToShow: 9,
            slidesToScroll: 1,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        dots: true,
                        autoplay: false,
                        arrows: false,
                        dotsClass: 'slick-dots top-dots dots-hero dots-partners',
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
            ]
        });
        $('.partners__arrow').click(function() {
            $('.partners__slider').slick($(this).hasClass('partners__next') ? 'slickNext' : 'slickPrev');
        })
    })();

    (function () {
        $(".hero--slider").slick({
            infinite: true,
            arrows: false,
            dotsClass: 'slick-dots top-dots dots-hero',
            accessibility: true,
            autoplay: false,
            autoplaySpeed: 800,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            dots: true,
        });
    })();
});
  
