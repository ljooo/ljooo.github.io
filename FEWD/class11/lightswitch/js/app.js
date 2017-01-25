$(document).ready(function () {
	var lights = 'on';

$('#lightswitch').click(function() {

	if (lights == 'on') {
		$('#lightswitch').addClass('switch-off');
		$('#lightswitch').removeClass('switch-on');
		// console.log('lights on');
		$('body').addClass('lights-off')
		$('#lightswitch').html('OFF');
		lights  = 'off';

	} else {
		// console.log('lights off');
		$('#lightswitch').removeClass('switch-off');
		$('#lightswitch').addClass('switch-on');
		$('body').removeClass('lights-off')
		$('#lightswitch').html('ON');
		lights = 'on';
	
	}
})

})

$('#lightswitch').toggleClass('switch-off');
$('#lightswitch').toggleClass('switch-on');
$('body').toggleClass('lights-off');

