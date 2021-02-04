// <---{(CÔNG THỨC CHUẨN THAM SỐ TRUYỀN VÀO HÀM CHẠY SLIDE)}--->

// paramSwiperSlide={
//     nameAttr: nameAttr,
//     slidesPerView: slidesPerView,
//     spaceBetween,
//     loop,
//     speed,
//     autoSlide:{
//         delay,
//         disableOnInteraction
//     },
//     delay,
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 15
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 15
//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 30
//         },
//         1366: {
//             slidesPerView,
//             spaceBetween
//         }
//     }

// }

//---------------------------------------------------------------------------------->

//hàm tạo 1 iframe và phát youtube khi lấy được mã api
var heightVideo = $('.poster-yt').height();
var player;
var videoId = 'W5cPSwcrCrs'
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
        height: heightVideo,
        width: '100%',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}

//load plubgin-facebook
window.fbAsyncInit = function() {
    FB.init({
    appId            : 'www.benhvienlaokhoa.vn',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v9.0'
    });
};

class MainQuety {
    constructor(){
        this.get_ElemetByTagName = {
            $html_body : $('html, body'),
            $header: $('.header'),
            $footer: $('.footer')
        }
    }
    getApiYoutube(attrTagName){
        $(attrTagName).click(function(){
            videoId = '6fsFbUpZxG0'
			$(this).toggleClass('js-play-yt')

			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		})
    }
    getApiFacebook(){
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    gotoTopQuety(classNameAttr){
        var {$html_body} = this.get_ElemetByTagName
        $(`.${classNameAttr}`).click(()=>{
            $html_body.animate({scrollTop: 0}, 'slow');
        })
        $(window).scroll(function(){
            if($(this).scrollTop() > 1000){
                $(`.${classNameAttr}`).fadeIn()
            }else{
                $(`.${classNameAttr}`).fadeOut()
            }
        })
    }

    handScrollHeaderMenu(){
        var {$header} = this.get_ElemetByTagName;
        var lastScrollTop = 0;
        $(window).scroll(function() {

            var y = $(this).scrollTop();
            var currentScrollTop = y + 1;

            if(y > 0){
                $header.addClass('js-scroll-header');
            }else{
                $header.removeClass('js-scroll-header');
            }
            
            if (currentScrollTop < lastScrollTop) {
                $header.addClass('js-show-menu');
                $header.removeClass('js-hidden-menu');
            }else {
                $header.removeClass('js-show-menu');
                $header.addClass('js-hidden-menu');
            }
            if(y <= 0){
                $header.addClass('js-show-menu');
                $header.removeClass('js-hidden-menu');
            }
            lastScrollTop = currentScrollTop;
        });
    }

    runMultipleSwiperBanner(nameAttr, slidesPerView, spaceBetween){
    
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

    runMultipleSwiper(paramSwiperSlide){

        var {nameAttr} = paramSwiperSlide,
        {slidesPerView} = paramSwiperSlide,
        {spaceBetween} = paramSwiperSlide,
        {loop} = paramSwiperSlide,
        {autoSlide} = paramSwiperSlide,
        {breakpoints} = paramSwiperSlide,
        {speed} = paramSwiperSlide,

        new Swiper(`${nameAttr} .swiper-container`, {
            slidesPerView,
            spaceBetween,
            speed : speed ? speed : 400,
            navigation: {
                nextEl: `${nameAttr} .swiper-button-next`,
                prevEl: `${nameAttr} .swiper-button-prev`,
            },
            loop: loop ? true : false,
            autoplay: autoSlide ? autoSlide : '',
            pagination: {
                el: `${nameAttr} .swiper-pagination`,
            },
            breakpoints: breakpoints
        });
    
    }

    runMultipleSwiperParam(){
        var {runMultipleSwiper} = this
        for(let param of arguments){
            runMultipleSwiper(param)
        }
    }

}

