<script>
  
    $(function(){
        var getAjaxGlee = new AjaxGlee()
        var lazy_load_group = [];
        var category_to_fetch = [];
    
        //lấy api youtube
        main.getApiYoutube('.poster-yt')

        // tham số slide liên kết nhiều bệnh viện
        var paramSwiperSlideBv = {
            nameAttr: '.block-enterprise',
            slidesPerView: 1,
            spaceBetween: 15,
            speed: 500,
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
                    slidesPerView: 5,
                    spaceBetween: 35
                }
            }

        }

        // than số slide banner
        var paramSwiperSlideBanner = {
            nameAttr: '.block-banner',
            slidesPerView: 1,
            spaceBetween: 0,
        }
    
        //hàm nhận thông số chạy nhiều slide
        main.runMultipleSwiperParam(paramSwiperSlideBanner, paramSwiperSlideBv)

        {% for _item in component.product.all_category %}
            {% if _item.is_featured == 1 %}
                category_to_fetch.push('{{ _item.id }}');
            {% endif %}
        {% endfor %}


        if(typeof category_to_fetch != "undefined") {
            lazy_load_group = category_to_fetch.map(function (id) {
                return {
                    id: 'category-product' + id,
                    target: '#id-wrap-category'+id,
                    loadFn: function () {
                        getAjaxGlee.getProductCategoryHome(id, 4, productTpl);
                    }
                }
            });
        }

        lazy_load_group.push(
            {
                id: 'article-dv-kythuat',
                target: '#id-wrap-article16',
                loadFn: function () {
                    getAjaxGlee.getArticleCategory(16, 3, itemAtc_dicVuKyThuat);
                }
            },{
                id: 'article-dv-su-kien',
                target: '#id-wrap-article12',
                loadFn: function () {
                    getAjaxGlee.getArticleCategory(12, 5, itemAtc_tinTucSuKien);
                }
            },{
                id: 'article-dv-kham',
                target: '#id-wrap-article17',
                loadFn: function () {
                    getAjaxGlee.getArticleCategory(17, 4, itemAtc_dvKham);
                }
            },{
                id: 'article-cau-hoi',
                target: '#id-wrap-article18',
                loadFn: function () {
                    getAjaxGlee.getArticleCategory(18, 5, itemAtc_dvKham);
                }
            }
        )
        
        Hura.UI.loadGroup(lazy_load_group);
    })
</script>