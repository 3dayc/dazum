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
	$('.gnb>li>a').click(function(){
		if($(this).parent().find('.dep2').length){
			$(this).toggleClass('on');
			$(this).next().slideToggle(300, 'linear');
			return false;
		};
	});
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