'use strict'

 var prompt = require("prompt");
 prompt.start();

console.log("Enter a noun, verb, adjectve, adverb")
prompt.get(['noun', 'verb', 'adjective', 'adverb'], function(err, result){
	console.log('Noun: '+result.noun + ',' +' '+ 'Adjective: ' + result.adjective + ',' +' '+ 'Verb: ' + result.verb + ',' +' '+ 'Adverb: ' + result.adverb)
})

//Node specific standard is to have err first in your function. If you decide to make your own tool then you'd have to include the err term.
