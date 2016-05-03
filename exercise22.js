'use strict'

var prompt = require('prompt');
prompt.start()

console.log('Comparing Numbers')
console.log('enter three numbers')
prompt.get(['number1','number2','number3'], function(err, result){
	var arrayOfNum = []
	arrayOfNum[0] = parseInt(result.number1)
	arrayOfNum[1] = parseInt(result.number2)
	arrayOfNum[2] = parseInt(result.number3)
	var largest;
	checkGreatest()
	console.log('The largest number given from your list is: '+largest)

	function checkGreatest(){
		if(arrayOfNum[0] == arrayOfNum[1] && arrayOfNum[0] == arrayOfNum[2]){
			console.log('All numbers are equal, none is greater than the other')
			process.exit()
		} else {
			largest = Math.max.apply(null, arrayOfNum);
		}
	}
})