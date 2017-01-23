$('#convertCeltoFar').click(function() {
	var cel = $('#cel').val();
	var far = $('#far').val();
	var cel = parseInt($('#cel').val());
	$('#far').val((cel*1.8)+32);

})

$('#convertFartoCel').click(function() {
	var far = $('#far').val();
	var cel = $('#cel').val();
	var far = parseInt($('#far').val());
	$('#cel').val((far-32)/1.8);
})

$('#reset').click(function() {
	var reset = $('#reset').html(reset)
	var count = '';
	$('#far').val(count);
	$('#cel').val(count);
})
