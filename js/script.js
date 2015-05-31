$(document).ready(function() {
	var controller = new ScrollMagic.Controller();

	var skills = new ScrollMagic.Scene({triggerElement: "#skills ul", duration: 500})
	.addTo(controller).on("enter leave", function (e) {
			progressbarAnimation();
		});

	if($(document).width() >= 1000) {
		var projects = new ScrollMagic.Scene({triggerElement: "#projects", duration: 100, offset: -100})
		.addTo(controller).on("enter leave", function (e) {
				$('#projects li').removeClass('hidden');
				$('#projects li:nth-child(odd)').addClass('fadeInLeft');
				$('#projects li:nth-child(even)').addClass('fadeInRight');
			});
	} else {
		$('#projects li').removeClass('hidden');
	}

	var contact = new ScrollMagic.Scene({triggerElement: "#contact", duration: 100, offset: -100})
	.addTo(controller).on("enter leave", function (e) {
			$('#contact form').removeClass('hidden');
			$('#contact form').addClass('fadeInDown');
		});

  var skills = new Array();
	  skills[0] = 60; //html/css
	  skills[1] = 40; //sass
	  skills[2] = 30; //js/jquery
	  skills[3] = 30; //angular
	  skills[4] = 60; //illustrator
	  skills[5] = 50; //git
	  skills[6] = 30; //c++
	  skills[7] = 5; //ruby
	  skills[8] = 30; //arduino

	function progressbarAnimation(){
		for(var i=0; i<skills.length; i++) {
				$('.fill:eq(' + i +')').animate({
			    width: skills[i] + '%'
					}, 1000);
		};
	}

	$('#arrow').click(function(){
		$('html, body').animate({
		    scrollTop: $('#bio').offset().top
		}, 1000);
		return false;
	});

	$('#page-footer h3').click(function(){
		$('html, body').animate({
		    scrollTop: $('#landing').offset().top
		}, 1000);
		return false;
	});

});