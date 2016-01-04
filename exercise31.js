'use strict'

var prompt = require('prompt-sync').prompt;
console.log('Karvonen Heart Rate Program')

console.log('Enter resting pulse')
var RHR = parseInt(prompt())
console.log('Enter age')
var age = parseInt(prompt())

for(var i=55;i<=95;i+=5){ // you just learned how to INCREMENT by 5 digits
	var result = (((220 - age)-(RHR))*i)+RHR
	console.log(i+'% = rate of: '+result)
}