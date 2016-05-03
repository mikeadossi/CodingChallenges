'use strict'

var response;
var prompt = require('prompt-sync').prompt;
console.log('Answer with "Y" or "N"')
var object1 = {}
object1.text = 'Is the car silent when you turn the key?'


var object2 = {}
var object3 = {}
var object4 = {}
var object5 = {}
var object6 = {}
var object7 ={}
var object8 = {}
var object9 = {}
var object10 = {}
var object11 = {}
var object12 = {}

object2.text = 'Are the battery terminals corroded?'
object3.text = 'Does the car make a clicking noise?'
object4.text = 'Clean terminals and try starting again' 
object5.text = 'Replace cables and try again'
object6.text = 'Replace the battery'
object7.text = 'Does the car crank up but fail to start?'
object8.text = 'Check spark plug connections'
object9.text = 'Does the engine start and then die?'
object10.text = 'Does your car have fuel injection?'
object11.text = 'Check to ensure the choke is opening and closing'
object12.text = 'Get it in for service'

object1.yes = object2; // "Are the battery..."
object1.no = object3; // "Does the car make ..."

object2.yes = object4; // Replace the battery...
object2.no = object5; // Does the car crank ...

object3.yes = object6; // Clean terminals ...
object3.no = object7; // Replace cables and ... 

//object4  is a LEAF (has no y/n, leaf in a tree)
// object5 is a LEAF (has no y/n, leaf in a tree)
// object6 is a LEAF (has no y/n, leaf in a tree)

object7.yes = object8; // check spark plug...
object7.no = object9; // Does the engine...

// object8 is a LEAF (has no y/n, leaf in a tree)

object9.yes = object10; // Does your car have ...

object10.yes = object12  // Get it in ...
object10.no = object11   // Check to ensure

// object11 is a LEAF (has no y/n, leaf in a tree)
// object12 is a LEAF (has no y/n, leaf in a tree)

// METHOD 2: OF WRITING A BREAK, give your objects a leaf property and then check for them in your if statement:  object4.leaf = true;


var currentObject = object1;
while(true){
	console.log(currentObject.text) // text NEW
	/* METHOD 1 */ if(!currentObject.yes && !currentObject.no){
		break;
	}
	// METHOD 2: if(currentObject.leaf){break;}
	var response = prompt();
	if(response == 'Y'){
		currentObject = currentObject.yes
	} 
	if(response == 'N'){
		currentObject = currentObject.no
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
