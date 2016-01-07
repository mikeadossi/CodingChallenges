'use strict'

var prompt = require('prompt-sync').prompt;
var Table = require('cli-table');

console.log('Parsing a Data File');

var dataFile = [
	'Ling,Mai,55900',
	'Johnson,Jim,56500', 
	'Zarnecki,Sabrina,46000',
	'Jones,Chris,34500',
	'Swift,Geoffrey,14200',
	'Xiong,Fong,65000',
	'Jones,Aaron,46000'
]

//last First Salary

var table = new Table({
	head: ['Last', 'First', 'Salary'],
	colWidths: [20, 20, 20]
});

dataFile.forEach(function(data) {
	var cols = data.split(',');
	// [Ling, Mai, 55900]
	table.push(cols);
});

console.log(table.toString());