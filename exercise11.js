'use strict'

 var prompt = require("prompt");
 prompt.start();
 console.log('Enter euro amount and currency exchange rate')
 prompt.get(['euroAmt','currExcRate'], function(err, result){
 	var euroAmt = parseInt(result.euroAmt) 
 	var currExcRate = parseFloat(result.currExcRate)
 	var currUsER = 0.91
 	var amt = (euroAmt * currExcRate) / (currUsER)

 	console.log('How many euros are you exchanging? '+ amt.toFixed(2) );
 })

