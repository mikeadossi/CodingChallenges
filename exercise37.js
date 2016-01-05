'use strict'

var prompt = require('prompt-sync').prompt;
console.log('Password Generator Program')
console.log('What\'s the minimum password character length')
var length = parseInt(prompt())
console.log('How many special characters?')
var characters = parseInt(prompt())
console.log('How many numbers?')
var numOfNumbers = parseInt(prompt())

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var specialCharacters = ['#','@','$','%','^','&']
getRandomInt()
var generatedPassword = ''

for(var i = 0; i<characters; i++){
	getRandomInt(0,specialCharacters.length-1)

	var randomValue = specialCharacters[getRandomInt(0,specialCharacters.length-1)]
	generatedPassword = generatedPassword + randomValue
}

for(var i = 0; i<numOfNumbers; i++){

	generatedPassword += getRandomInt(0,9)
}

var lettersArray = ['a','b','c','d','e','f','g','h','i'] // make this a global var

for(var i = generatedPassword.length; i<length; i++){
	var randomValue = lettersArray[getRandomInt(0,lettersArray.length-1)]
	generatedPassword += randomValue
}

console.log('Your generated password is: '+generatedPassword)






