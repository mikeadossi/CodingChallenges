'use strict'

 var prompt = require("prompt");
 prompt.start();
 console.log('Enter in three inputs: ')
 prompt.get(['principal','ROI','#ofYrs'], function(err, result){
 	var p = parseInt(result.principal)
 	var r = parseInt(result.ROI)
 	var t = parseInt(result['#ofYrs'])
 	var SI = p*(1+(r*t))
 	console.log('Your simple interest is '+ SI)
 })