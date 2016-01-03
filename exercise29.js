'use strict'

var prompt = require('prompt-sync').prompt;
console.log('Handling Bad Input Program')

console.log('Enter the rate of return on your investment')

while(true){ // infinite loop
	var ror = parseInt(prompt());
	if(ror === 0){
		console.log('Invalid input. ROR cannot be zero')
	} else if(isNaN(ror)){
		console.log('Invalid input. ROR has to be an number')
	} else{
		break;
	}
}

console.log('It will take '+(72/ror)+'years to double your initial investment')