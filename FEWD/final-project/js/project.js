$(document).ready(function() {
	var submitButton = 0;
	
	$('#submit').click(function(){
		submitButton = submitButton + 1;
		$('.quote').remove();
	
		
	if (submitButton == 1) {
		$('.sidetext').css('background-image', 'url(images/pic1.jpg)'); 
		$('.quote').removeClass();

		} else if (submitButton == 2) {
		$('.sidetext').css('background-image', 'url(images/pic2.jpg)'); 
		} else if (submitButton == 3) {
			$('.sidetext').css('background-image', 'url(images/pic3.jpg)'); 
		} else if (submitButton == 4) {
		$('.sidetext').css('background-image', 'url(images/pic4.jpg)'); 
		} else if (submitButton == 5) {
			$('.sidetext').css('background-image', 'url(images/pic5.jpg)'); 
		} else if (submitButton == 6) {
		$('.sidetext').css('background-image', 'url(images/pic6.jpg)'); 
		} else if (submitButton == 7) {
			$('.sidetext').css('background-image', 'url(images/pic7.jpg)'); 
		} else if (submitButton == 8) {
		$('.sidetext').css('background-image', 'url(images/pic8.jpg)'); 
		} else if (submitButton == 9) {
			$('.sidetext').css('background-image', 'url(images/pic9.jpg)'); 
		} else if (submitButton == 10) {
		$('.sidetext').css('background-image', 'url(images/pic10.jpg)'); 
		} else if (submitButton == 11) {
			$('.sidetext').css('background-image', 'url(images/pic11.jpg)'); 
		} else if (submitButton == 12) {
		$('.sidetext').css('background-image', 'url(images/pic12.jpg)'); 
		} else if (submitButton == 13) {
			$('.sidetext').css('background-image', 'url(images/pic13.jpg)');
		}

	})
	})

	



	