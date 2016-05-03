'use strict'
var prompt = require('prompt')
prompt.start();

console.log('Password Validation program, hint username = alibaba, password = openSesame')
prompt.get(['username','password'],function(err, result){
	var username = result.username
	var password = result.password
	validate();


function validate(){
	if(username == 'alibaba' && password == 'openSesame'){
		console.log('Access granted!')
	} else{
		console.log('username or password is incorrect')
	}
 }

})