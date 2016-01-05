'use strict'

var prompt = require('prompt-sync').prompt;
console.log('Picking a winner Program')
console.log('Enter a series of names and once you\'re done leave the last name blank, a winner will be chosen at random.')
var array = []

while(true){
	console.log('Enter a name')
	var name = prompt()
	if(name === ''){ // Remember to use the triple equals when using if statements!
		break;
	}
	array.push(name)
}

console.log('The randomly chosen winner is... ' +(array[getRandomInt(0,array.length-1)]))

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

