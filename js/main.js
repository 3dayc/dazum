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

// 체크박스 전체선택, 전체해제
var as = document.querySelectorAll(".allSelect");
var chk = document.querySelectorAll(".js-chk");

function selectToggle(){
	for(var i=0; i<as.length; i++){
		if(as[i].classList.contains("active")){
			as[i].classList.remove("active")
		}
	}
	this.classList.add("active");
	if(as[0].classList.contains("active")){
		for(var j=0; j<chk.length; j++){
			chk[j].checked=true;
		}
	} else {
		for(var k=0; k<chk.length; k++){
			chk[k].checked=false;
		}
	}
}
function selectInit(){
	for(var i=0; i<as.length; i++){
		as[i].addEventListener("click", selectToggle);
	}
}

selectInit();

/* page navigation */
var pn = document.querySelectorAll(".pn");

function pnToggle(){
	for(var i=0; i<pn.length; i++){
		if(pn[i].classList.contains("active")){
			pn[i].classList.remove("active")
		}
	}
	this.classList.add("active");
}
function pnInit(){
	for(var i=0; i<pn.length; i++){
		pn[i].addEventListener("click", pnToggle);
	}
}

pnInit();

/* tab */
var ti = document.querySelectorAll(".tab-item");

function tiToggle(){
	for(var i=0; i<ti.length; i++){
		if(ti[i].classList.contains("active")){
			ti[i].classList.remove("active")
		}
	}
	this.classList.add("active");
}
function tiInit(){
	for(var i=0; i<ti.length; i++){
		ti[i].addEventListener("click", tiToggle);
	}
}

tiInit();

/* modal */
var allM = document.querySelector("#selectMessage");
var selectM = document.querySelector("#allMessage");
var myModal = document.querySelector("#myModal");
var closeBtn = document.querySelector("#closeBtn");
var overlay = document.querySelector("#overlay");

function startModal(){
	allM.addEventListener("click", function(){
		myModal.style.visibility="visible"
		myModal.style.opacity="1";
	})
	selectM.addEventListener("click", function(){
		myModal.style.visibility="visible"
		myModal.style.opacity="1";
	})
}

function closeModal(){
	closeBtn.addEventListener("click", function(){
		myModal.style.visibility="hidden";
		myModal.style.opacity="0";
	})
	overlay.addEventListener("click", function(){
		myModal.style.visibility="hidden";
		myModal.style.opacity="0";
	})
}

startModal();
closeModal();