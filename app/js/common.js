$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    })
    
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: false,
        focusOnSelect: true
    })

     $('.selectpicker').selectpicker();


    //    for (i=1;i<5;i++) {
    //        $("$pic" + [i]).css("background-image", "url(../img/pic-" + [i] + ".jpg)");
    //    }

})
