
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});


//ハンバーグメニュー
jQuery(function ($) {

    //ナビバートグル
    $('.js-hamburger').on('click', function () {
      if ($('.js-hamburger').hasClass('is-open')) {
        //$('.js-drawer-menu').fadeOut();
        $('.js-drawer-menu').removeClass('is-open');
        $(this).removeClass('is-open');
      } else {
        //$('.js-drawer-menu').fadeIn();
        $('.js-drawer-menu').addClass('is-open');
        $(this).addClass('is-open');
      }
    });
  
  });


  //ヘッダーの高さによるカラーチェンジ
  $(function () {
    $(window).on('scroll', function () {
      if ($('.fv').height()  < $(this).scrollTop()) {
          $('.js-header').addClass('change-color');
      } else {
          $('.js-header').removeClass('change-color');
      }
    });
  });


  $(".sp-slide-items").slick({
    autoplay:	true,
    autoplaySpeed: 3000,
    infinite:true
  });
  $(".pc-slide-items").slick({
    autoplay:	true,
    autoplaySpeed: 3000,
    infinite:true
  });

//informationの画像出現
//要素の取得とスピードの設定
var box = $('.information__img,.card2__img,.pc-price__img'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
        $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});



//top戻るボタン
$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});




//swiper
const mySwiper = new Swiper('.card01 .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    
  },
  navigation: {
    nextEl: '.card01 .swiper-button-next',
    prevEl: '.card01 .swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
});




var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

