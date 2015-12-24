'use strict'

 var prompt = require("prompt");
 prompt.start();

console.log("Enter a quote and its authors name")
prompt.get(['quote', 'author'], function(err, result){
	console.log('"'+result.quote+'"'+ ' was written by ' + result.author)
})