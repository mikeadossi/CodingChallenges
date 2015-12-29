'use strict'

var prompt = require('prompt');
prompt.start();

console.log('BMI Calculator');
prompt.get(['weight','height in inches'],function(err, result){
	var weight = parseInt(result.weight);
	var height = parseInt(result['height in inches']);
	var BMI = (weight/(height*height))*703
	checkBMI();

	function checkBMI(){
		if(BMI >= 18.5 && BMI <= 25){
			console.log('You are within the ideal weight range.')
		} else{
			console.log('you are not in the ideal weight range')
		}
	}
})