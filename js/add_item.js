jQuery('document').ready(function($)
{
    $('body').on('click', '#btnAddItem', function()
    {
        var _this = $(this);
        var current = _this.attr("src");
        var swap = _this.attr("data-swap");     
        _this.attr('src', swap).attr("data-swap",current);
        current = _this.attr("class")
        swap = _this.attr("class-swap"); 
        _this.attr('class', swap).attr("class-swap",current);
    })
    
});
