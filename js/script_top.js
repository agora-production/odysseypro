// JavaScript Document


if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
if($("#top .top_bnr .swiper-container li").length > 3) {
$(window).load(function() {
var swiper = new Swiper('.top_bnr .swiper-container', {
  loop:false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup:1,
    },
  }
});
var bnrNumber = $(".swiper-pagination span").length;
var bnrNumber_fix = bnrNumber * 16 / 2 + 32;
$("#top .swiper-button-next").css("transform", "translateX(" + bnrNumber_fix + "px)" );
$("#top .swiper-button-prev").css("transform", "translateX(" + -bnrNumber_fix + "px)" );
});

} else{
$("#top .container .swiper-button-prev").css("display","none");
$("#top .container .swiper-button-next").css("display","none");
$("#top .container .swiper-wrapper").css({"display":"block","text-align":"center","font-size":"0"});
$("#top .top_bnr .swiper-container li").css("display","inline-block");
}
}

if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
var swiper = new Swiper('.top_bnr .swiper-container', {
  loop:false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup:1,
    },
  }
});

$(function() {
var bnrNumber = $(".swiper-pagination span").length;
var bnrNumber_fix = bnrNumber * 16 / 2 + 32;
$("#top .swiper-button-next").css("transform", "translateX(" + bnrNumber_fix + "px)" );
$("#top .swiper-button-prev").css("transform", "translateX(" + -bnrNumber_fix + "px)" );
});
}