  

// Навигация по странице по средствам якорей

$(function(){

$('.page1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.block-content').offset().top }, 1000);
  e.preventDefault();
});

});


$(function(){ 

$('.page2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.block-content2').offset().top }, 1000);
  e.preventDefault();
});

});

$(function(){ 

$('.page3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.block-content3').offset().top }, 1000);
  e.preventDefault();
});

});

$(function(){ 

$('.page4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.block-content4').offset().top }, 1000);
  e.preventDefault();
});

});

$(function(){ 

$('.page5').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.block-content5').offset().top }, 1000);
  e.preventDefault();
});
    
});

// ---------//




//Скрипт на переключение классов при щелчке
  
$(function() {
    var sbula = $(".page-all-class");
    
    sbula.click(function() {
        sbula.removeClass("page-active").not(sbula).add(this).toggleClass("page-active");
    });
});

//----------------//

















