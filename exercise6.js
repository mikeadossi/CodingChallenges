'use strict'

 var prompt = require("prompt");
 prompt.start();
console.log('This program will calculate your time till retirement...')
console.log(' It will also give your year of retirement.')
console.log('Give the following information')
prompt.get(['age','retiring age'],function(err,result){

	var resultAge = parseInt(result.age)
	var retiringAge = parseInt(result['retiring age']) // <---- NEW! Whenever you have spacing you need to target that object using square brackets rather than dot notation. Bracket notation is necessary for dealing with variables that have spacing.

	var currentYear = new Date().getFullYear(); // <-- look into Date keyword
	var timeTillRetirement = retiringAge - resultAge
	var retirementYear = currentYear + timeTillRetirement

	console.log("You have "+timeTillRetirement+" years till retirement.");
	console.log("It's "+currentYear+", so you can retire in "+retirementYear)
})