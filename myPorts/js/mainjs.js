// открытие меню при нажатии 

$(document).ready(function() {
        $('.navbar-toggle').click(function(){
            $('.main-menu').slideToggle(400)
        })
});

// Фиксирование меню при скролле


$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>$('.header-wrapper').height()){
	                $('#nav-js').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<$('.header-wrapper').height()){
	                $('#nav-js').removeClass('fixed');
	            }
	        });
	    });


//Изменение стиля при скролле на кнопке скролла в самый верх

$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>300){
	                $('.go-to-top').addClass('go-to-top__vision');
	            }
	            else if ($(this).scrollTop()<300){
	                $('.go-to-top').removeClass('go-to-top__vision');
	            }
	        });
	    });



//Изменение цвета у пунктов меню


$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>$('.nav-fake').offset().top - 1){
	                $('.menu-nav2-js').addClass('menu-item-js');
	            }
	            else if ($(this).scrollTop()<$('.header-wrapper').height()){
	                $('.menu-nav2-js').removeClass('menu-item-js');
	            }       
	        });
	    });



$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>$('.my-works').offset().top - 55 ){
	                $('.menu-nav3-js').addClass('menu-item-js');
	            }
	            else if ($(this).scrollTop()<$('.my-works').offset().top){
	                $('.menu-nav3-js').removeClass('menu-item-js');
	            }       
	        });
	    });



$(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>$('.are-you-ready').offset().top - 55){
	                $('.menu-nav4-js').addClass('menu-item-js');
	            }
	            else if ($(this).scrollTop()<$('.are-you-ready').offset().top){
	                $('.menu-nav4-js').removeClass('menu-item-js');
	            }       
	        });
	    });





//

//Кнапка на главном экране прокручивающая страницу до нижнего блока
$(function(){

$('.scroll-down').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.nav-fake').offset().top }, 1000);
  e.preventDefault();
});

});

 
//Кнопка возврата в самый верх

$(function(){

$('.go-to-top').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.header-wrapper').offset().top }, 1000);
  e.preventDefault();
});

});



// Элементы навыгации, скролл по нажатию по элементу меню


//Скролл к Хедеру
$(function(){

$('.menu-nav-js').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.header-wrapper').offset().top }, 1000);
  e.preventDefault();
});

});

// Скролл к блоку Сервис

$(function(){

$('.menu-nav2-js').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.services').offset().top - 50 }, 1000);
  e.preventDefault();
});

});

// Скролл к блоку Мои работы

$(function(){

$('.menu-nav3-js').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.my-works').offset().top - 50 }, 1000);
  e.preventDefault();
});

});


// Скролл к блоку Контакты 

$(function(){

$('.menu-nav4-js').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.are-you-ready').offset().top - 50 }, 1000);
  e.preventDefault();
});

});




$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
//			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});











