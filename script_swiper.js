// JavaScript Document


$(window).load(function() {
  $('.program li a').matchHeight();
  $('.video li a').matchHeight();
  $('.news li a').matchHeight({byRow: true});
  $('.event li a').matchHeight();
});


$(window).load(function() {
var swiper = new Swiper('#top_kv .swiper-container', {
  effect: 'fade',
  loop: true,
  speed:1000,
  slidesPerView: 1,
  autoplay: {
        delay: 5000,
		disableOnInteraction: false,
    }
});
});


$(window).load(function() {
var swiper = new Swiper('.sp_bnr_wrap .swiper-container', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.sp_bnr_wrap .swiper-button-next',
    prevEl: '.sp_bnr_wrap .swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
      slidesPerGroup:1.1,
    spaceBetween:20,
    },
  }
});
});


$(window).load(function() {
var swiper = new Swiper('.four .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup:2,
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup:1,
    },
  }
});
});

$(window).load(function() {
var swiper = new Swiper('.five.video .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 5,
      slidesPerGroup:5,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup:4,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    300: {
      slidesPerView: 2,
      slidesPerGroup:2,
    },
  }
});
});

$(window).load(function() {
var swiper = new Swiper('.five.news .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 5,
      slidesPerGroup:5,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup:4,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    300: {
      slidesPerView: 2,
      slidesPerGroup:2,
    },
  }
});
});

$(window).load(function() {
var swiper = new Swiper('.six .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 6,
      slidesPerGroup:6,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup:5,
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup:4,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    300: {
      slidesPerView: 2,
      slidesPerGroup:2,
    },
  }
});
});