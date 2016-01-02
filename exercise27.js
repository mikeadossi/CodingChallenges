 'use strict'

 var prompt = require("prompt");
 prompt.start();

 function getInfo(){
 	console.log('Fill out form by entering the following:')
 	prompt.get(['first name','last name','employeeID','zipcode'], function(err, result){
 	var firstName = result['first name']
 	var lastName = result['last name']
 	var fullName = firstName+''+lastName
 	var zipcode = parseInt(result.zipcode)
 	
 	var firstNameIsGood = twoCharacters(firstName);
 	var lastNameIsGood = twoCharacters(lastName);
 	var employeeIDIsGood = checkFormat(result.employeeID);
 	var zipcodeIsGood = isNumber(zipcode);
 	
 	if(firstNameIsGood && lastNameIsGood && employeeIDIsGood && zipcodeIsGood){
 		console.log('Complete. There are no errors found')
 		} else{
 			getInfo(); // recursive function (function that calls itself)!
 		}

 })
}
getInfo();


 function twoCharacters(x){
 	if(x.length < 2){
 		console.log(x+' is too short, need at least two characters.')
 		return false;
 	} else if(x.length >= 2){
 		return true
 	}
 }

 function checkFormat(y){
 	var regExFormat= /^[A-Za-z]{2}-\d{4}$/
 	if(!regExFormat.test(y)){
 		console.log('type data in proper format ex: "AA-2222"')
 		return false;
 	}else{
 		return true
 	}
 }

 function isNumber(a){
 	if(isNaN(a)){
 		console.log('your zip code must be a number')
 		return false;
 	}
 	return true;
 }







