'use strict'

var prompt = require('prompt-sync').prompt;
var fs = require('fs');

console.log('Word Finder');

console.log('What is the name of the file?')
var fileName = prompt();



console.log("Give a sentence");
var sentence = prompt();
var replaced = sentence.replace(/utilize/ig, 'use');

fs.writeFileSync(fileName, replaced);



console.log(replaced);