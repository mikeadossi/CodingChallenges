'use strict'

 var prompt = require("prompt");
 prompt.start();
 console.log('Enter the following:')
 prompt.get(['principal','ROI','n','t'], function(err, result){
 	var p = parseInt(result.principal)
 	var r = parseInt(result.ROI)
 	var n = parseInt(result.n)
 	var t = parseInt(result.t)
 	var A = p*( 1+(r/n)^(n*t) )
 	console.log('Answer: '+A)
 })