// keep geting NaN
'use strict'

var prompt = require('prompt');
prompt.start();

console.log('Multistate Sales Tax Calculator')
console.log("Hint: When asked for state choose from one of these options - TX, CA, or NY")
prompt.get(['orderAmt','enter abbreviated state'],function(err,result){
	var orderAmt = parseInt(result.orderAmt);
	var state = result['enter abbreviated state'];
	var taxAmt;
	checkState();
	var amtAfterTax = orderAmt + taxAmt
	

	console.log('Your given order amount was '+orderAmt)
	console.log('Your tax amount in '+state+' is '+taxAmt.toFixed(2))
	console.log('Your after tax amount is '+amtAfterTax)

	function checkState(){
		if(state == 'TX'){
			taxAmt = orderAmt * 0.0625
		}
		if(state == 'CA'){
			taxAmt = orderAmt * 0.075
		}
		if(state == 'NY'){
			taxAmt = orderAmt * 0.04
		}
		if(state !== 'TX' && state !== 'CA' && state !== 'NY'){
			console.log('Invalid state entry')
			process.exit()
		}
		if( isNaN(orderAmt) ){
			console.log('Invalid orderAmt entry')
			process.exit()
		}
	}
})