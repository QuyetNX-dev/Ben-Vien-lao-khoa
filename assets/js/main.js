function runMultipleSwiperBanner(nameAttr, slidesPerView, spaceBetween){
    
    new Swiper(`${nameAttr} .swiper-container`, {
        slidesPerView,
        spaceBetween,
        navigation: {
            nextEl: `${nameAttr} .swiper-button-next`,
            prevEl: `${nameAttr} .swiper-button-prev`,
        },
        pagination: {
            el: `${nameAttr} .swiper-pagination`,
        }
    });

}

function runMultipleSwiper(nameAttr, slidesPerView, spaceBetween, autoSlide){
    
    new Swiper(`${nameAttr} .swiper-container`, {
        slidesPerView: 1.5,
        spaceBetween: 15,
        navigation: {
            nextEl: `${nameAttr} .swiper-button-next`,
            prevEl: `${nameAttr} .swiper-button-prev`,
        },
        loop: autoSlide ? true : false,
        autoplay: autoSlide ? {
        delay: 5000,
        disableOnInteraction: false,
        } : '',
        pagination: {
            el: `${nameAttr} .swiper-pagination`,
        },
        breakpoints: {
            640: {
            slidesPerView: 2,
            spaceBetween: 15
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 15
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30
            },
            1366: {
            slidesPerView,
            spaceBetween
            }
        }
    });

}

function gotoTopQuety(classNameAttr){
    $(`.${classNameAttr}`).click(()=>{
        $('html, body').animate({scrollTop: 0}, 'slow');
    })
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $(`.${classNameAttr}`).fadeIn()
        }else{
            $(`.${classNameAttr}`).fadeOut()
        }
    })
}