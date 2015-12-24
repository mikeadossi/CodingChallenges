'use strict'

 var prompt = require("prompt");
 prompt.start();

console.log('Enter two numbers (we\'ll add and multiply both)')
prompt.get(['number1','number2'],function(err,result){

	var resultNumber1 = parseInt(result.number1) // <-- the value returned from an input box is always in string form, you have to change it to an integer if you need to use it as a number.

	var resultNumber2 = parseInt(result.number2)

	var sum = resultNumber1 + resultNumber2
	var multiplication = resultNumber1 * resultNumber2
	console.log(resultNumber1 +' '+'+'+' '+ resultNumber2 +' '+ '=' +' '+ sum )
	console.log(resultNumber1 +' '+'*'+' '+ resultNumber2 +' '+ '=' +' '+ multiplication )
})