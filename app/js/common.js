$(document).ready(function () {
    
//    $(".burger-menu").hide();
//    $(".burger").click(function () {
//        $(".burger-menu").slideToggle("slow", function () {
//        });
//    });
   
    $(".nav-menu-bottom").hide();
    $(".nav-menu-bottom2").hide();
    $(".burger").click(function () {
        $(".nav-menu-bottom").slideToggle("slow", function () {
        });
        $(".nav-menu-bottom2").slideToggle("slow", function () {
        });
    });
    
    $('.single-item').slick({
        arrows: true
    });
    
    var complete = true;
    
    
    /******************************* COLOR SELECTION, Product page *************************/
    
    var colorArray = ["item-select-color-red", "item-select-color-pink", "item-select-color-white", "item-select-color-black", "item-select-color-gold"];
    
    function selectColor (classColor) { 
        if ($("." + classColor).hasClass("active")) {
            $("." + classColor).removeClass("active");
        } else { 
            $("." + classColor).addClass("active");
        }   
    };
    
    function removeAllActive () {
        $(".item-select-color ul li").removeClass("active");      
    }
        
    $(".item-select-color ul li").click( function () {
        for ( i = 0; i < colorArray.length; i++) {
            if ($(this).hasClass(colorArray[i])) {
                removeAllActive();
                selectColor(colorArray[i]);  
            }   
        }
    });
    
 /***************************************************************/
    
    $(".catalog-options ul .catalog-burger .catalog-burger-ul").hide();
    $('.catalog-options ul li:last-child .catalog-burger-ul li:last-child').addClass("bord")
    
    $(".catalog-options ul .catalog-burger").click(function () {
        $('.catalog-options ul li:last-child .ctlg-option-title').removeClass("no-bord");
        var what = $(this).index();
        $(".catalog-options ul .catalog-burger:nth-child("+ (what + 1) +") .catalog-burger-ul").slideToggle("slow", function() {
             
            if (complete) {
                complete = false;
                $('.catalog-options ul li:last-child .ctlg-option-title').addClass("no-bord");
  
            } else {
                complete = true;
                $('.catalog-options ul li:last-child .ctlg-option-title').removeClass("no-bord"); 
            }
        });      
    });
    
  
     
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });
    
    $(document).ready(function() {
      $('#my-video').backgroundVideo();
    });
   
    
    /* POPUP CLICK */
    $('.popup').hide();
    $('#overlay').hide();
    
    $('.show-popup').click(function () {
            $('.popup').show();
            $('#overlay').show();
            return false;
        });
        
        $('i.fas.fa-times').click(function() {
            $('.popup').hide();
            $('#overlay').hide();
        });   

});
