'use strict'

var prompt = require('prompt-sync').prompt

console.log('Guess the Number Game')
console.log('Pick a difficulty level 1,2 or 3')
var difficultyLevel = prompt();
var randomNum;
var numOfGuesses = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // math.random()
}

if(difficultyLevel == 1){
	randomNum = getRandomInt(1,10)
}
if(difficultyLevel == 2){
	randomNum = getRandomInt(1,100)
}
if(difficultyLevel == 3){
	randomNum = getRandomInt(1,1000)
}
console.log('What\'s your guess?')
while(true){
	var usersGuess = parseInt(prompt());
	numOfGuesses++
	if(usersGuess == randomNum){
		console.log('you solved it in '+numOfGuesses+' guesses')
		break;
	} 
	if(usersGuess > randomNum){
		console.log('it\'s too high')
	}
	if(usersGuess < randomNum){
		console.log('it\'s too low')
	}
}