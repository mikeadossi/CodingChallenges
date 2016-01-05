'use strict'

var prompt = require('prompt-sync').prompt;
console.log('Computing statistics Program')
console.log('Enter a list of numbers and type in "done" when you\'re finished.')

var array = []

while(true){
	console.log('Enter a number')
	var number = prompt()
	if(number === 'done'){ 
		break;
	}
	number = parseInt(number)
	array.push(number)
}

var sum = 0;
var minimum = Math.min.apply(null,array);
var maximum = Math.max.apply(null,array);

array.forEach(function(x){ // x represents the number on each loop
	sum = sum + x
})

console.log('The number(s) you gave: '+array)
console.log('The average is '+(sum/array.length)+'!')
console.log('The minimum is '+(minimum))
console.log('The maximum is '+(maximum))