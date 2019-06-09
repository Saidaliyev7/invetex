$(document).ready(function () {
    $('#header .header-top nav .navbar-nav ul > li').mouseover(function () {
        $(this).find('.dropdown').fadeIn()
    })
    $('#header .header-top nav .navbar-nav ul > li').mouseleave(function () {
        $(this).find('.dropdown').fadeOut()
    })
    let counterEnded=false;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.header-top').addClass('active')
            $('.header-top.active').css('top', 0);
            $('.header-top .logo img').attr('src', './images/logo.png');
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
            if ($('.header-top').hasClass('active')) {
                $('.header-top').removeClass('active');
                $('.header-top .logo img').attr('src', './images/logo_dark.png');
            }

        }
     if ($(window).scrollTop()+400 > $('#business').offset().top && counterEnded==false) {
        for ( let j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
          }
          counterEnded =true;
     }

    })
   
    let counters = $('.counter');
    let countersQuantity = counters.length;
    let counter = [];
  
    for ( let i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters.eq(i).find('.number span').text());
    }
  
    function count(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters.eq(id).find('.number span').text(localStart)
        }
      }, 60);
    }
  
   


    $('.arrow-up').click(function(){
        $('html').animate({
            scrollTop:0
        },300)
    })
    $('.client-carousel').owlCarousel({
        items:5,
        autoplay:true,
        loop:true,
    })
    $('.header-carousel .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:true,
        navigationText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        navClass:['owl-prev','owl-next']
    })


})