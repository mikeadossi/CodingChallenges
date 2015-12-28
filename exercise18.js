// WHY DO I GET NaN?
'use strict'

var prompt = require('prompt')
prompt.start();

console.log('Temperature calculator')
console.log('Give the type of conversion you need:')
prompt.get(['Fahrenheit to Celsius? Y/N', 'Celsius to Fahrenheit? Y/N','starting temperature'],function(err,result){
	var startingTemp = parseInt(result['starting temperature']);
	var query1 = result['Fahrenheit to Celsius? Y/N'];
	var query2 = result['Celsius to Fahrenheit? Y/N'];
	var variable;
	conversionWanted();
	

	function conversionWanted(){
		if(query1 == 'Y' && query2 == 'N'){
			variable = ((startingTemp - 32)*5)/9
			var convertedTemp = variable * startingTemp;
			console.log('Your given fahrenheit temperature is: '+startingTemp)
			console.log('Your temperature converted to celsius is: '+convertedTemp)
		} else if (query2 == 'Y' && query1 == 'N'){
			variable = (startingTemp * 9)+32
			var convertedTemp = variable * startingTemp;
			console.log('Your given celsius temperature is: '+startingTemp)
			console.log('Your temperature converted to fahrenheit is: '+convertedTemp)
		} else{
			console.log('Error answering conversion query')
		}
	}


})