'use strict'

 var prompt = require("prompt");
 prompt.start();

console.log('Give the following information')
prompt.get(['Length','Width'],function(err,result){
	var Length = parseInt(result.Length)
	var Width = parseInt(result.Width)
	var oneGallon = 350
	var totalSquareFootage = Length * Width
	var gallonsNeeded = Math.ceil(totalSquareFootage / oneGallon) <-- NEW!!! Use of ceil

	console.log( totalSquareFootage+' '+gallonsNeeded)
})

