'use strict'

var prompt = require('prompt');
prompt.start();

console.log('Legal Driving Age Program')
prompt.get(['age','legal driving age'],function(err, result){
	var age = result.age
	var legalDrivingAge = result['legal driving age']
	checkAge();

function checkAge(){
	if(age >= legalDrivingAge){
		console.log('you are of age to drive')
	} else {
		console.log('you are not of age to drive')
	}
}

})