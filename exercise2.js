'use strict'

 var prompt = require("prompt");
 prompt.start();

console.log('Enter a string');
prompt.get(['string'], function(err, result){
	console.log('you have this many characters in your string: ' + result.string.length)
})

//NOTE: result.string; string is the property of result. Whatever you type into get will play this role. We're making LABELS inside our first array.
