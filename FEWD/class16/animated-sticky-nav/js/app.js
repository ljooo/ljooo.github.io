$(document).ready(function () {
})

$(window).scroll(function(){
	var offset  = $(window).scrollTop()

	if (offset > 150) {
		$('header').addClass('header-offset');
		// console.log('greater')
	} else  {
		$('header').removeClass('header-offset');
		// console.log('less');
		
	}
})
