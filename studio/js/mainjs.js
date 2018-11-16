//$('.build-beautiful-right>div:nth-child(2)').hover(function(){
//    $(this).addClass('animate');
//});

$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>$('.scroll-js').offset().top - 200){
	                $('.add-animation-js').addClass('animate');
	            }
	            else if ($(this).scrollTop()< 10){
	                $('.add-animation-js').removeClass('animate');
	            }       
	        });
	    });

$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>$('.scroll-js').offset().top - 200){
	                $('.add-animation2-js').addClass('animate2');
	            }
	            else if ($(this).scrollTop()< 10){
	                $('.add-animation2-js').removeClass('animate2');
	            }       
	        });
	    });