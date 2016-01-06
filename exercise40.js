'use strict'

var prompt = require('prompt-sync').prompt;
var Table = require('cli-table');

console.log('Filtering Records');

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

console.log('Enter a search string')
var entry = prompt();

var answers = dataSet.filter(function(obj) {
	var fname_matches = obj.fname.indexOf(entry);
	var lname_matches = obj.lname.indexOf(entry);

	return ( fname_matches != -1 || lname_matches != -1 );
});

console.log(answers);