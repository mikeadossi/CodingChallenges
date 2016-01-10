'use strict'

var prompt = require('prompt-sync').prompt;
var fs = require('fs'); // file system
var _ = require('lodash');

console.log('Word frequency finder');
console.log('')

//for webserver look into express and http server  take a look at socket.io for realtime stuff.
 // take a look at udemy. //for mobile developement take a look at ionic a framework for mobile apps (angularjs).

//in production you should use async readfile
var content = fs.readFile('ex46word.txt', { encoding : 'utf8'}, function(err,data){
	if(err){
		return console.error(err); //stop here if no file or other error
	}

	console.log('read', data);
	var words = data.split(' ');
	var wordList = [];

	/*[ //wordlist future content : an array of word objects
		{ text : red, cunot : 5 },
		{ text : blue, count : 1 }
	]*/

	//count the words
	_.each(words,function(word){

		var foundWord = _.find(wordList,{ text : word});
		

		if(foundWord){// word exists
			foundWord.count += 1;
		}else{//first time we see the word create it and set to one
			var newWord = { text : word, count : 1};
			wordList.push(newWord);//add the word to list
		}
	})

	//sort the list of words 
	var sortedWordList = _.sortBy(wordList,function(word){
		return -1 * word.count; //property we are sorting on
	});

	//printing words
	_.each(sortedWordList,function(word){
		console.log(word.text + ' ' + word.count);
	});

})