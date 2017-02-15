$(document).ready(function () {
	$('#next').click(function() {
    $('.current').removeClass('current').hide()
        .next().show().addClass('current');
    if ($('.current').hasClass('last')) {
        $('#next').attr('disabled', true);
    }
    $('#prev').attr('disabled', null);
});

$('#prev').click(function() {
    $('.current').removeClass('current').hide()
        .prev().show().addClass('current');
    if ($('.current').hasClass('first')) {
        $('#prev').attr('disabled', true);
    }
    $('#next').attr('disabled', null);
});



