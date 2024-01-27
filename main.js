jQuery(document).ready(function ($) {
	var currentStep = 1; // Current Step
	var nextBtn = $('.btn-next'); // Next Button
	var isMobile = /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);
	var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
	var isAndroid = /Android/i.test(navigator.userAgent);
	var screenSize = $(window).width();
	var screenHeight = $(window).height();

	if(isMobile) {
		$('body').addClass('isMobile');
	}
	else {
		$('body').addClass('isDesk');
	}

	if(isIOS) {
		$('body').addClass('iOs');
	}
	else if(isAndroid) {
		$('body').addClass('isAndroid');
	}
	// Set Content height
	contentHeight();

	function show_next(n) {
		$('.item' + currentStep).hide();
		var prevStep = currentStep;
		currentStep += n;

		$('.item' + currentStep).hide().fadeIn(500);
		$('body').removeClass('active-step-' + prevStep).addClass('active-step-' + currentStep);

		// Preload images
		var preloadImg = $('.preload .preload-img');
		preloadImg.eq(prevStep + 1).addClass('preload-img' + (currentStep + 1));
	}
	show_next(0);

	nextBtn.on('click', function (e) {
		e.preventDefault();
		show_next(1);
	});	
});

function contentHeight() {
	var windowHeight = $(window).innerHeight();
	var windowWidth = $(window).innerWidth();
	$('body').attr('data-window-height', windowHeight);

	if (windowHeight > windowWidth) {
		$('body').removeClass('device-landscape').addClass('device-portrait');
	}
	else {
		$('body').removeClass('device-portrait').addClass('device-landscape');
	}
}
$(window).on('resize', function(){
	contentHeight();
});
$(window).on('load', function(){
	$('body').css('display', 'block');
});
