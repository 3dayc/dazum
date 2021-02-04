// var title = document.getElementsByClassName("js-title");
// var acTwo = document.getElementsByClassName("two_text");
// var i, j;

// function navToggle(){
//     for (i = 0; i < title.length; i++) {
//         title[i].addEventListener("click", function() {
//             for (j=0; j<title.length; j++) {
//                 title[j].classList.remove("active_nav");
//                 title[j].nextElementSibling.style.display="none";
//             }
//             title[0].nextElementSibling.style.display="block";
//             this.classList.toggle("active_nav");
//             panel = this.nextElementSibling;
//             // panel.style.opacity="1";
//             // panel.style.visibility="visible";
//             // panel.style.height="100%";
//             panel.style.display="block";
//         });
//     }
// }

// function activeTwo(){
//     for(var k=0; k<acTwo.length; k++){
//         acTwo[k].classList.remove("active_two-nav");
//     }
//     this.classList.add("active_two-nav");
// }

// function activeTwoInit(){
//     for(var k=0; k<acTwo.length; k++){
//         acTwo[k].addEventListener("click", activeTwo);
//     }
// }

// function init(){
//     navToggle();
//     activeTwoInit();
// }

// init();





jQuery(function ($) {
	var $body = $('body'),
		$window = $(window);
	
	
	var lastScrollTop = 0,
		$scrollElement = $('html, body');
	$window.scroll(function(){
		var sT = $(this).scrollTop();
		if ($(this).scrollTop()>0) {
			$body.addClass('is-scroll');
		}else {
			$body.removeClass('is-scroll');
		}
		lastScrollTop = sT;	
	}).trigger('scroll');
	
//	$('.gnb>li>a').click(function(){
//		if($(this).parent().find('.dep2').length){
//			$(this).addClass('on').parent().siblings().find('a').removeClass('on');
//			$(this).next().slideDown().addClass('on').parent().siblings().find('.dep2').slideUp().removeClass('on');
//			return false;
//		};
//	});
//	$('.gnb .dep2>li>a').click(function(){
//		if($(this).parent().find('.dep3').length){
//			$(this).addClass('on').parent().siblings().find('a').removeClass('on');
//			$(this).next().slideDown().addClass('on').parent().siblings().find('.dep3').slideUp().removeClass('on');
//			return false;
//		};
//	});
	$('.gnb>li>a').click(function(){
		if($(this).parent().find('.dep2').length){
			$(this).toggleClass('on');
			$(this).next().slideToggle(300, 'linear');
			return false;
		};
	});
	// $('.gnb .dep2>li>a').click(function(){
	// 	if($(this).parent().find('.dep3').length){
	// 		$(this).toggleClass('on');
	// 		$(this).next().slideToggle(300, 'linear');
	// 		return false;
	// 	};
	// });
	
	// $('.gnb .dep2>li>a').addClass(function(){
	// 	if($(this).parent().find('.dep3').length){
	// 		$(this).addClass('a-dep3');
	// 	};
	// });
	$('.collapse').on('shown.bs.collapse', function () {
		$('.btn-collapse[data-target="'+$(this).attr('data-tg')+'"]').find('.txt').text('접기');
	});
	$('.collapse').on('hidden.bs.collapse', function () {
		$('.btn-collapse[data-target="'+$(this).attr('data-tg')+'"]').find('.txt').text('열기');
	});
});
jQuery(function ($) {
 	$(document).on('click', '[data-toggle="toggle"]', function(){
		var $t = $(this);
		var txt = $t.data('class');
		var target = $t.data('target') || $t.attr('href');
		$(target).toggleClass(txt);
	});
});