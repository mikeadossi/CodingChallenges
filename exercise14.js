// ISSUE WITH CODE.

'use strict'
var prompt = require('prompt')
prompt.start()

console.log('Tax Calculator (hint: give your state as TX)')
prompt.get(['orderAmt','state'],function(err, result){
	var orderAmt = parseInt(result.orderAmt)
	var state = result.state
	var tax;
	checkTax();
	var taxAmt = orderAmt * tax
	var totalCost = orderAmt + taxAmt

	console.log('Your order subtotal is $'+orderAmt)
	console.log('Your incurred tax amount is $'+taxAmt.toFixed(2))
	console.log('The total cost to you is $'+totalCost.toFixed(2))

	function checkTax(){

	if(state == 'TX'){
		tax = 0.0625
	 } else{
	 	console.log('ERROR. Give your state as TX')
	 }
	}

})

