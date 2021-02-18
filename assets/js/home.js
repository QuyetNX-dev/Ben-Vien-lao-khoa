<script>
    

    var lazy_load_group = [];
    var category_to_fetch = [];
      
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

    $(function(){
        
        Hura.UI.loadGroup(lazy_load_group);
    })


</script>