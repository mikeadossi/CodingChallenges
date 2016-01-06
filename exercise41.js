'use strict'

var prompt = require('prompt-sync').prompt;
var Table = require('cli-table');

console.log('Name Sorter');

var listOfNames = [
	'Ling, Mai',
	'Jim, Johnson', 
	'Zarnecki, Sabrina',
	'Jones, Chris',
	'Swift, Geoffrey',
	'Xiong, Fong'
]
console.log('This is your original list: ',listOfNames)

listOfNames.sort(
	function(obj1, obj2) {
		return obj1.localeCompare(obj2); // localeCompare is a function of strings that is used to sort characters alphabetically.
	}
);

console.log('This is your edited list: ',listOfNames)