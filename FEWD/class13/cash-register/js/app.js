// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// Inside the anonymous function:
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

$(document).ready(function () {

	var total_cost = 0;
	
	
	$('#entry').submit(function(event){
	event.preventDefault();	
	var entered_number = $('#newEntry').val();
	entered_number = parseFloat(entered_number);
	$('#entries').append('<tr><td></td><td>' + entered_number + '</td></tr>');
	$('#newEntry').val(' ');
	total_cost = total_cost + entered_number;
	$('#total').html('$' + total_cost);

	
        
	})

	// function calculate(total){
	// 	$('#newEntry').html(total);

	})
	// 	$('#entries').on('click', 'td',function(){
	// 	var total = $('#newEntry').val()
	// 	$('#total').val(total);
	// // // 	console.log(total)
	// })

	// $('ul').on('click', 'li', function(){
	// 	// var clickedItem = ('#newItem').val();
	// 	$(this).remove();

	



