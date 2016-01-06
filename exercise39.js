'use strict'

var prompt = require('prompt-sync').prompt;
var Table = require('cli-table');

console.log('Sorting Records');

var dataSet = [{
	fname: 'John',
	lname: 'Johnson',
	position: 'manager',
	sep_date: '2016-12-31'
},
{
	fname: 'Tou',
	lname: 'Xiong',
	position: 'software Engineer',
	sep_date: '2016-10-15'
},
{
	fname: 'Michaela',
	lname: 'Michaelson',
	position: 'district manager',
	sep_date: '2015-12-19'
},
{
	fname: 'Jake',
	lname: 'Jacobson',
	position: 'programmer'
},
{
	fname: 'Jacquelyn',
	lname: 'Jackson',
	position: 'DBA'
},
{
	fname: 'Sally',
	lname: 'Weber',
	position: 'web developer',
	sep_date: '2015-12-18'
}];

dataSet.sort(
	function(obj1, obj2) {
		return obj1.lname.localeCompare(obj2.lname); // localeCompare is a function of strings that is used to sort characters alphabetically.
	}
);

var table = new Table({
	head: ['First name', 'Last name', 'Position', 'Separation date'],
	colWidths: [16, 16, 10, 16]
});

dataSet.forEach(function (data) {
	table.push([ data.fname, data.lname, data.position, data.sep_date || '' ]);
});

console.log(table.toString());
