$(document).ready(function(){
    $('.gallery-photos img').click(function(){
        $('#modal .carousel-inner').empty();
        $('.gallery-photos img').each(function(index) {
            var $img = $('<img />');
            var src = $(this).attr('src');
            $img.attr('src', src);
            var $item = $('<div class="item" ></div>');
            $item.append($img);
            if (index === 0) {
                $item.addClass('active');
            }
            $('#modal .carousel-inner').append($item);
        });
        $("#myCarousel").carousel($('.gallery-photos img').index(this));
        $('#modal').modal();
    });
});