{% raw %}
<script>
  
    var productTpl = `
        <a href="{%=item.productUrl %}" class="__item">
            <div class="__img">
                <img src="{%=item.productImage.large %}" alt="">
            </div>
            <div class="__name">{%=item.productName%}</div>
            <div class="__sub-name">{%=item.productSummary%}</div>
            <div class="order-times">
                <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                <span>Đặt lịch khám</span>
            </div>
        </a>
    `;
  
  	var itemAtc_dicVuKyThuat = `
        <a href="{%=item.url %}" class="__item __item--label">
            <div class="__w-img w-img--label">
                <img src="{%=item.image.original %}" alt="{%=item.title%}">
            </div>
            <div class="_description">
                {%=item.title%}
            </div>
            <div class="__more">
                xem thêm <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
            </div>
        </a>
    `;
  
  	var itemAtc_tinTucSuKien = `
        <a href="{%=item.url %}" class="__item __item--label">
            <div class="__w-img w-img--label">
                <img src="{%=item.image.original %}" alt="{%=item.title%}">
            </div>
            <div class="_description">
                {%=item.title%}
            </div>
        </a>
    `;
  
  	var itemAtc_dvKham = `
        <a href="{%=item.url %}" class="__item __item--label">
            <div class="__w-img w-img--label">
                <img src="{%=item.image.original %}" alt="{%=item.title%}">
            </div>
            <div class="__item__right">
                <div class="_description">
                    {%=item.title%}
                </div>
                <div class="__more">
                    xem thêm <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
                </div>
            </div>
        </a>
    `;
  
    var itemAtc_Doctor = `
        <a href="{%=item.url %}?doctor" class="__item">
            <div class="__img">
                <img src="{%=item.image.original %}" alt="{%=item.title%}">
            </div>
            <div class="__name">{%=item.title%}</div>
            <div class="__sub-name">{%=item.summary%}</div>
            <div class="order-times">
                <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                <span>Đặt lịch khám</span>
            </div>
        </a>
    `;

    var itemAtc_DoctorSlide = `
        <div class="swiper-slide">
            <a href="{%=item.url %}?doctor" class="__item">
                <div class="__img">
                    <img src="{%=item.image.original %}" alt="{%=item.title%}">
                </div>
                <div class="__name">{%=item.title%}</div>
                <div class="__sub-name">{%=item.summary%}</div>
                <div class="order-times">
                    <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                    <span>Đặt lịch khám</span>
                </div>
            </a>
        </div>
    `;

    var itemOptionSelect = `
        <option value="{%=item.title%}">{%=item.title%}</option>
    `;
  
</script>
{% endraw %}