'use strict'

var prompt = require("prompt");
prompt.start();

console.log("Give the following information:")
prompt.get(['length','width'],function(err,result){
	var length = parseInt(result.length);
	var width = parseInt(result.width);
	var area = length * width
	var squareMeters = area * 10.7639104
	console.log('What is the length of the room in feet? '+ length)
	console.log('What is the width of the room in feet? '+ width)
	console.log('You entered dimensions of '+length+' feet by '+width+' feet.')
	console.log('The area is:')
	console.log(area +' square feet')
	console.log(squareMeters+' square meters')
})

