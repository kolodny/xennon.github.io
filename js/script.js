$(document).ready(function() {

	  var skills = new Array();
		  skills[0] = 65; //html/css
		  skills[1] = 45; //sass
		  skills[2] = 40; //js/jquery
		  skills[3] = 40; //angular
		  skills[4] = 65; //illustrator
		  skills[5] = 55; //git
		  skills[6] = 40; //c++
		  skills[7] = 40; //arduino

	for(var i=0; i<8; i++) {
		$('.fill:eq(' + i +')').animate({
		    width: skills[i] + '%'
		}, 1000);
	};

	$('#arrow').click(function(){
		$('html, body').animate({
		    scrollTop: $('#bio').offset().top
		}, 1000);
		return false;
	});

});