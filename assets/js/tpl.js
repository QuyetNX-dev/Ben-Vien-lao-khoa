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
    `
var wrapProductTpl = ``