'use strict'

var prompt = require('prompt-sync').prompt;
require('array.prototype.find');

console.log('Product Search');

var products = [{
	name: 'Widget',
	price: '25.00',
	quantity: '5'
},
{
	name: 'Thing',
	price: '15.00',
	quantity: '5'
},
{
	name: 'Doodad',
	price: '5.00',
	quantity: '10'
}];

console.log('What is the product name?')
var productName = prompt()

var product = products.find(function(obj) {
	var match = obj.name.indexOf(productName);

	return (match != -1);
});

if (!product) {
	console.log("Not found");
} else {
	console.log("Name: " + product.name);
	console.log("Price: $"+ product.price);
	console.log("quantity: " + product.quantity);
}