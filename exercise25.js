'use strict'

var prompt = require('prompt-sync').prompt

console.log('Password Strength Indicator')
console.log('Type in a password')
var password = prompt()
passwordValidator()

function passwordValidator(){
	if(){
		console.log("The password '"+password+"' is a very weak password.")
	}
	if(){
		console.log("The password '"+password+"' is a weak password.")
	}
	if(){
		console.log("The password '"+password+"' is a strong password.")
	}
	if(){
		console.log("The password '"+password+"' is a very strong password.")
	}
}
/*
'use strict';

var prompt = require ('prompt-sync').prompt;
var password;

console.log('Enter a password' );
password = (prompt());

if(password.length < 8 && !isNaN(parseInt(password)) ){
	console.log('The password '+password+' is a very weak password.'); 
	return; // stops the entire program
} 

if(password.length < 8 && /^[a-zA-Z]+$/.test(password) ){ // http://stackoverflow.com/questions/3073176/javascript-regex-only-english-letters-allowed , http://mzl.la/1W7qNo9 (.test regEx MDN) , There is NO other way to quickly validate whether a string contains a letter or a number!!!
	console.log('The password '+password+' is a weak password.'); 
	return; 
} 

if(password.length >= 8){ // http://stackoverflow.com/questions/3073176/javascript-regex-only-english-letters-allowed 
	if(/[a-zA-Z]/.test(password) && /\d/.test(password) && /[^a-zA-Z\d]/.test(password) ){ // regEx uses .test, we're applying our regEx code to test the variable
		console.log('The password '+password+' is a very strong password.');
	return;
	}
	if(/[a-zA-Z]/.test(password) && /\d/.test(password) ){ 
		console.log('The password '+password+' is a strong password.');
	return;
	}

} 

