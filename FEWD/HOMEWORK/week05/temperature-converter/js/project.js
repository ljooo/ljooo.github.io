$('#convertCeltoFar').click(function() {
	var cel = $('#cel').val();
	var far = $('#far').val();
	var cel = parseInt($('#cel').val());
	$('#far').val((cel*1.8)+32);

	if (cel>=80) {
		$('h1').css('color', 'blue');
	}

})

$('#convertFartoCel').click(function() {
	var far = $('#far').val();
	var cel = $('#cel').val();
	var far = parseInt($('#far').val());
	$('#cel').val((far-32)/1.8);

	if (far<=2){
		$('h1').css('color', 'red');
	}
})

$('#reset').click(function() {
	var reset = $('#reset').html(reset)
	var count = '';
	$('#far').val(count);
	$('#cel').val(count);
})
