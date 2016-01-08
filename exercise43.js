'use strict'

var prompt = require('prompt-sync').prompt;
var Table = require('cli-table');
var fs = require('fs');

console.log('Website Generator');
console.log('You will be creating a website and entering in necessary info')
console.log('What is the name of the website?')
var nameOfSite = prompt()
console.log('Who is the author of he site?')
var author = prompt()
console.log('Is the folder for your JavaScript files? Y/N')
var JSfile = prompt()
console.log('Do you want a folder for CSS files? Y/N')
var CSSfile = prompt()
console.log()

fs.mkdirSync(nameOfSite);
console.log("Created ./" + nameOfSite);

fs.writeFileSync(nameOfSite + "/index.html",
"<html>" +
"<head>" +
"<title>" + nameOfSite + "</title>" +
"<meta name='author' content='" + author + "'>" +
"</head>" +
"</html>");

console.log ("Created ./" + nameOfSite + "/index.html");

if (JSfile == 'y') {
	fs.mkdirSync(nameOfSite + "/js");
	console.log("Created ./" + nameOfSite + "/js");
}

if (CSSfile == 'y') {
	fs.mkdirSync(nameOfSite + "/css");
	console.log("Created ./" + nameOfSite + "/css");
}


