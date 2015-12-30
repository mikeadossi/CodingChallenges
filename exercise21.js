'use strict'

var prompt = require('prompt');
prompt.start();

console.log('Number to Names')
prompt.get(['enter a number between 1 and 12'],function(err, result){
	var number = parseInt(result['enter a number between 1 and 12'])
	convert();

	function convert(){
		if(number == "1"){
			console.log('your number corresponds with the month of: january')
		} else if (number == '2'){
			console.log('your number corresponds with the month of: february')
		} else if(number == '3'){
			console.log('your number corresponds with the month of: march')
		} else if(number == '4'){
			console.log('your number corresponds with the month of: april')
		} else if(number == '5'){
			console.log('your number corresponds with the month of: may')
		} else if (number == '6'){
			console.log('your number corresponds with the month of: june')
		} else if(number == '7'){
			console.log('your number corresponds with the month of: july')
		} else if(number == '8'){
			console.log('your number corresponds with the month of: august')
		} else if(number == '9'){
			console.log('your number corresponds with the month of: september')
		} else if(number == '10'){
			console.log('your number corresponds with the month of: october')
		} else if(number == '11'){
			console.log('your number corresponds with the month of: november')
		} else if(number == '12'){
			console.log('your number corresponds with the month of: december')
		} else{
			console.log('Enter a number between 1 and 12')
		}
	}
})