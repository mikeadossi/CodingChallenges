'use strict'

var prompt = require('prompt');
prompt.start();

console.log('Blood Alcohol Calculator')
prompt.get(['weight','gender','ounces consumed','hours since last drink'], function(err, result){
	
	var W = parseInt(result.weight);
	var gender = result.gender;
	var r;
	defineR();
	var H = parseInt(result['hours since last drink']);
	var A = parseInt(result['ounces consumed']);
	var BAC = ( ((A * 5.14)/(W * r)) - 0.015 * H ).toFixed(2);

	console.log('Your BAC is '+BAC)
	checkBAC();

	function defineR(){
		if(gender == 'male'){
			r = 0.73
		} else if(gender == 'female'){
			r = 0.66
		} else{
			console.log('gender must be given as either male or female')
		}
	}

	function checkBAC(x){
		if(BAC <= r){
			console.log('it is legal for you to drive')
		} else{
			console.log('it is not legal for you to drive')
		}
	}

})