'use strict'

var prompt = require('prompt-sync').prompt

console.log('Employee List Removal')
var ourArray = []
ourArray[0] = 'joshua'
ourArray[1] = 'cage'
ourArray[2] = 'Arsenial'
ourArray[3] = 'cloud'

function loop(){
	for(var i = 0;i<ourArray.length;i++){
		console.log(ourArray[i]);
	}
}

console.log('Your list includes:')
loop();
console.log('What name would you like to remove?')
var removeName = prompt();

// There's a built in (and faster) way to match name to index this instead of using an if statement. See below:

var resultOfIndex = ourArray.indexOf(removeName);

// Now we want to remove our indexed value from the array
ourArray.splice(resultOfIndex , 1)

console.log('you removed '+removeName+' and now have the following:')
loop()

