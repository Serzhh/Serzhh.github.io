
   $(document).ready(function() {
        $('.dropdown-lang-js').click(function(){
            $('.language-list').toggleClass('')
            $('.language-list').slideToggle(0)
        })
});

   $(document).ready(function() {
        $('.dropdown-currency-js').click(function(){
            $('.currency-list').toggleClass('')
            $('.currency-list').slideToggle(0)
        })
});


$(document).ready(function(){
     $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
     })
});