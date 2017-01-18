document.getElementById('click-me').onclick = clickMe;

function clickMe () {
	var age = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var item = document.getElementById ('item').value;
	var numPerDay = document.getElementById ('num-per-day').value;
	var solution = (((maxAge-age)*365)*numPerDay);
	document.getElementById('solution').innerHTML = solution;
	document.getElementById('drink').innerHTML = item;
	console.log(solution);
}
	
	// var solution = document.getElementById ('solution');
