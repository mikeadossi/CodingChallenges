'use strict'
var prompt = require('prompt');
prompt.start();

console.log('We\'ll be evenly divying up a pizza, complete following entries:')
prompt.get(['number of people eating','number of pizzas','even number of slices per pizza'],function(err, result){
	var numOfPpl = result['number of people eating']
	var numOfPizzas = result['number of pizzas']
	var numOfSlices = result['even number of slices per pizza']
	var totalSlices = numOfPizzas * numOfSlices
	var pizzaPerPerson = totalSlices / numOfPpl

	console.log('There are '+ numOfPpl +' people with '+ numOfPizzas +' pizzas.')
	evenSlices(numOfSlices);
	console.log('Each person gets '+ pizzaPerPerson +' pieces of pizza.')
})


function evenSlices(x){
	if(x%2 > 0){ // we use modulus here!
		console.log('your need an even number of slices')
	}
}