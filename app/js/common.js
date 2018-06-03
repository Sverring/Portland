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
    
    
//    $('.catalog-options ul li:last-child').click(function(show) {
//        
//            $('.catalog-options ul li:last-child .catalog-burger-ul li:last-child').css('border-radius','0 0 5px 5px');
//            $('.catalog-options ul li:last-child .ctlg-option-title').css('border-radius','0');
//    });        
   
    
    
    
    
    /*=================== SLIDER ======================*/
    
//    $('#checkbox').change(function () {
//       setInterval(function () {
//           moveRight();
//       }, 3000); 
//    });
//    
//    var slideCount = $('#slider ul li').length;
//    var slideWidth = $('#slider ul li').width();
//    var slideHeight = $('#slider ul li').height();
//    var sliderUlWidth = slideCount * slideWidth;
//    
//    $('#slider').css({ width: slideWidth, height: slideHeight });
//    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//    $('#slider ul li: last-child').prependTo('#slider ul');
//    
//    function moveLeft () {
//        $('#slider ul').animate({
//            left: + slideWidth
//        }, 200, function () {
//            $('#slider ul li:last-child').prependTo('#slider ul');
//            $('#slider ul').css('left', '');
//        });
//    };
//    
//    function moveRight () {
//        $('#slider ul').animate({
//            left: - slideWidth
//        }, 200, function () {
//            $('#slider ul li:first-child').appendTo('#slider ul');
//            $('#slider ul').css('left', ''); 
//        });
//    };
//    
//    $('a.controlPrevious').click(function () {
//       moveLeft(); 
//    });
//    
//    $('a.controlNext').click(function () {
//       moveRight(); 
//    });
    
    
//    $('#checkbox').change(function(){
//    setInterval(function () {
//        moveRight();
//    }, 3000);
//  });
  
//	var slideCount = $('.slider ul li').length;
//	var slideWidth = $('.slider ul li').width();
//	var slideHeight = $('.slider ul li').height();
//	var sliderUlWidth = slideCount * slideWidth;
//	
//	$('.slider').css({ width: slideWidth, height: slideHeight });
//	
//	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//	
//    $('.slider ul li:last-child').prependTo('.slider ul');
//
//    function moveLeft() {
//        $('#slider ul').animate({
//            left: + slideWidth
//        }, 200, function () {
//            $('#slider ul li:last-child').prependTo('#slider ul');
//            $('#slider ul').css('left', '');
//        });
//    };
//    
//    function moveRight() {
//        $('.slider ul').animate({
//            left: - slideWidth
//        }, 200, function () {
//            $('.slider ul li:first-child').appendTo('.slider ul');
//            $('.slider ul').css('left', '');
//        });
//    };
//
//    $('a.control_prev').click(function () {
//        moveLeft();
//    });
//
//    $('a.control_next').click(function () {
//        moveRight();
//    });
//    
});
