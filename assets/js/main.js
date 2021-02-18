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
            {speed} = paramSwiperSlide

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

class AjaxGlee extends MainQuety {

    constructor(){
        super()
        this.Category = {
            ElementName : {
                idInnerHtml : '#id-inner-html',
                idWrapCategory: '#id-wrap-category'
            },
            params: {
                action_type: "product-list",
                type: "hot",
                category: 'id',
                sort: "order",
                show: 'show',
            }
        }

        this.Article = {
            ElementName : {
                idInnerHtml : '#id-inner-html',
                idWrapArticle : '#id-wrap-article'
            },
            params : {
                action_type: "list",
                type: "article",
                catId: 'mouse_id',
                show: 'show',
            }
        }

        this.FormContact = {
            g_getElmentByTagName : {
                $idInputName: $('#contact_name_detail'),
                $idInputEmail: $('#contact_email_detail'),
                $idInputTel: $('#contact_tel_detail'),
                $idInputMessage: $('#contact_message_detail'),
            },
            params: {
                action_type: "contact",
                type    :"contact",
                info : {
                    name : 'check_name', 
                    email : 'check_email', 
                    tel : 'check_tel', 
                    title: 'Khách hàng liên hệ ', 
                    message : 'check_message'
                }
            }
        }

    }

    // lay sp danh muc trang chu nổi bật is_featured = 1
    getProductCategoryHome(mouse_id,show,templateTpl,wrapTemplateTpl) {
        var {idInnerHtml, idWrapCategory} = this.Category.ElementName
        var {params} = this.Category
        var {runMultipleSwiper} = this
        params.category = mouse_id
        params.show = show
    
        var target = `${idInnerHtml}${mouse_id}`;
    
        Hura.Ajax.get("product", params).then(function (data) {
            console.log(data);

            var html = Hura.Template.parse(templateTpl, data.list);
            var listItem = html;
            if(wrapTemplateTpl){
                listItem = wrapTemplateTpl
                        .replace(new RegExp("{{list-item}}", "g"), html)
            }
            if(html == ""){
                $(`${idWrapCategory}${mouse_id}`).hide()
            }
            Hura.Template.render(target, listItem);
  
            //runMultipleSwiper(`${idWrapCategory}${mouse_id}`, 5, 1);
            //tooltipProduct(".content-product", ".hover_content_pro")
    
        })
    
    }

    //lấy product danh mục article
    getArticleCategory(mouse_id, show) {

        var {idInnerHtml} = this.Article.ElementName
        var {idWrapArticle} = this.Article.ElementName
        var {params} = this.Article
        params.catId = mouse_id
        params.show = show

        var target = `${idInnerHtml}${mouse_id}`;

        //console.log(target)

        Hura.Ajax.get("article", params).then(function (data) {
            var html = Hura.Template.parse(itemArticle, data.list);
            if(html == ""){
                $(`${idWrapArticle}-${mouse_id}`).hide()
            }
            Hura.Template.render(target, html);

            //runMultipleSwiperVr2(`${idWrapArticle}-${mouse_id}`, 3, 15);

        })

    }

    // Gửi form liên hệ
    check_form_contact_detail() {

        var {$idInputName} = this.FormContact.g_getElmentByTagName
        var {$idInputEmail} = this.FormContact.g_getElmentByTagName
        var {$idInputTel} = this.FormContact.g_getElmentByTagName

        var error = "";
        var check_name = $idInputName.val();
        var check_email = $idInputEmail.val();
        var check_tel = $idInputTel.val();
        // var check_message = $idInputMessage.val();
        //var check_captcha = document.getElementById('captcha').value;

        if(check_name.length < 4) error += "- Bạn chưa nhập tên\n";
        if(check_email.length < 4) error += "- Bạn chưa nhập email\n";
        if(check_tel.length < 8) error += "- Bạn chưa nhập số điện thoại\n";
        //if(check_captcha.length < 4) error += "- Bạn chưa nhập Mã bảo vệ\n";

        if(error == ""){
        
            var {params} = this.FormContact
            params.info.name = check_name
            params.info.email = check_email
            params.info.tel = check_tel

            Hura.Ajax.post('customer', params).then(function (data) {
                alert("Bạn đã gửi liên hệ thành công\nChúng tôi đã nhận được thông tin và sẽ liên hệ với quý khách trong thời gian sớm nhất");

                $idInputName.val('')
                $idInputEmail.val('')
                $idInputTel.val('');
            })
        }else {
            alert(error);
        }
        return false;
    }

}

