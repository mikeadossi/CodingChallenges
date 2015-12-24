'use strict';
var prompt = require('prompt-sync').prompt;

var firstItemPrice; 
var firstItemQuantity;
var secondItemPrice;
var secondItemQuantity;
var thirdItemPrice;
var thirdItemQuantity;
var subTotal;
var taxAmt;
var totalCost;

//THE FOLLOWING IS A LESSON IN REFACTORING! (find alternative way to solve problem in selfcheckout assignment)
function getNumericValue(query){
		var numberValue;

		while(isNaN(numberValue)){
		console.log(query);
	    numberValue = parseInt(prompt());
	    if(isNaN(numberValue)){
	   	console.log("invalid input");
	    }
	} 
 return numberValue
}

firstItemPrice = getNumericValue('Enter the price of your first checkout item')
firstItemQuantity = getNumericValue('Enter the quantity of your first checkout item')
secondItemPrice = getNumericValue('Enter the price of your second checkout item')
secondItemQuantity = getNumericValue('Enter the quantity of your second checkout item')
thirdItemPrice = getNumericValue('Enter the price of your third checkout item')
thirdItemQuantity = getNumericValue('Enter the quantity of your third checkout item')



subTotal = firstItemPrice + secondItemPrice + thirdItemPrice
taxAmt = 0.05 * subTotal
totalCost = taxAmt + subTotal

console.log('the subtotal of your items is: '+'$'+subTotal.toFixed(2));
console.log('the cost in taxes will be: '+'$'+taxAmt.toFixed(2));
console.log('the cost overall is: '+'$'+totalCost.toFixed(2));