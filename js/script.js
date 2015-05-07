$(document).ready(function() {
	// $(".").hover(function() {
	//    $(this).siblings('p').stop().animate({
	//    	opacity: "1"
	//    },200, function(){
	//    	$(this).css('display','block');
	//    });

	//    $(this).siblings('.').stop().animate({
	//    	height: "100%"
	//    },200, function(){
	//    	$('.').css('height','100%');
	//    });
	// });

	// $('.').mouseleave(function() {
	//    $(this).find("p").animate({
	//    	opacity: "0"
	//    },200, function(){
	//    	$(this).css('display','none');
	//    });

	//    $('.').animate({
	//    	height: "60px"
	//    },200, function(){
	//    	$('.').css('height','60px');
	//    });

	// });

	$('#arrow').click(function(){
		$('html, body').animate({
		    scrollTop: $('#arrow-box').offset().top
		}, 1000);
		return false;
	});

});