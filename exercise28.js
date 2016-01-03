'use strict'

var prompt = require("prompt-sync").prompt;
console.log('Adding Numbers Program')
console.log('You\'ll be required to type in 5 numbers.')
var number = 0;
var array = []

for(var i = 0;i<5;i++){
	console.log('Enter a number: ')
	var promptedNum = parseInt(prompt())
	array.push(promptedNum)
	number += promptedNum
}

for(var i = 0;i<5;i++){
	console.log('your array line by line: '+array[i])
}

console.log('The 5 numbers you gave in one line: '+array)
console.log('The sum of your 5 numbers is: '+number)