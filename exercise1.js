'use strict'

 var prompt = require("prompt");
 prompt.start();

console.log('Enter your name')
prompt.get(['name'], function(err, result){
	console.log('Your name is: ' + result.name);
})