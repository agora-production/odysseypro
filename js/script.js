// JavaScript Document

// loading
$(window).on('load', function() {
  var loading_wrap = $('.loading_wrap');
  loading_wrap.addClass("blur");
});



//----------------clone----------------
const clonebox = document.getElementsByClassName("clonebox");
window.addEventListener('load', function(){
  for(let i =0; i< clonebox.length; i++){
    for (let c = 1; c <= 6; c++){
      let obj = clonebox[i].firstElementChild.cloneNode(true);
			clonebox[i].appendChild(obj);
		}
  }
});


//----------------top talent----------------
if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
$(function(){
  $('.talent_list').on('click', 'li', function() {
	 $(".talent_list li").removeClass("active");
	 $(this).toggleClass("active");
   });
});
}

//----------------IE----------------
$(window).on('load' , function() {
  $("body").removeClass("preload");
});



//----------------nav responsive---------------
$(function(){

  $(".nav_trigger_outer").click(function(){      
    $(this).toggleClass('active');
    $("#global_nav").toggleClass('active');
    return false;
  });

  $(".menu_box .txt_nav li a").click(function () {
		$("#global_nav").removeClass("active");
    $(".nav_trigger_outer").removeClass("active");
	});
  
});



//----------------pagetop----------------

$(function() {
var pageTop = $('.page_top');
pageTop.click(function () {
$('body,html').animate({
scrollTop: 0
}, 1200, "easeOutQuint"	);
return false;
});
});


//----------------modal----------------

$(document).ready(function(){
	$(".youtube").colorbox({
		iframe:true, 
		innerWidth:"80%", 
		innerHeight:"80%",
	});
});


//----------------nav tag----------------
if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
jQuery(function($) {
	var array = [];
	for(var i = 0; i < $("#nav_tag li").length; i++){
		array.push($("#nav_tag li").eq(i).outerWidth(true));
	}

	var childElementWidth = 0;
	for(var j = 0; j < array.length; j++){
		childElementWidth += array[j];
	}
	if(childElementWidth > 0) {
	var last_num = childElementWidth + 2;
	$("#nav_tag ul").css("width", last_num + "px" );
	}
});
}



//----------------animation----------------
$(window).on('load scroll', function(){

  var elem = $('.anime');

  elem.each(function () {

    var jsplay = 'jsplay';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 8)){
      $(this).addClass(jsplay);
    }
  });
});





//----------------swiper animation----------------
$(window).on('load scroll', function(){

  var elem = $('.fade_b_cont');

  elem.each(function () {

    var isPlay_b_cont = 'isPlay_b_cont';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 10)){
      $(this).addClass(isPlay_b_cont);
						$(this).children('.tit').addClass('isPlay_l');
						$(this).children('.tit').next().addClass('isPlay_l');
						$(this).children('.tit').next().next().addClass('isPlay_r');
    }
  });
});


//----------------iframe----------------
$(function(){
	$(".single .txt_box iframe").wrap("<p>");
	$(".single .txt_box .youtube_box iframe").unwrap();
	
	$(".single .txt_box p iframe").parent("p").addClass("youtube");
    $(".single .content_box p iframe").parent("p").addClass("youtube");
    $(".single .talent_free p iframe").parent("p").addClass("youtube");
	
});


//----------------bogo----------------
$('.bogo-language-switcher li').each(function() {
  if ( !$('a', this)[0] && !$(this).hasClass('current') ) {
    $(this).parent().addClass('non-active');
  }
});


