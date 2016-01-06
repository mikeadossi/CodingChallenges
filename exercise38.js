'use strict'

var prompt = require('prompt-sync').prompt;

console.log('Filtering values');
console.log('Type in a list of no more than 5 numbers seperated by spacing');

var inputData = prompt();
//console.log("> Res", inputData);

// Process the input (which is a string)
var seperatedNumbers = inputData
                        // Split by space
                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
                        .split(" ")
                        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
                        .slice(0, 5) // take only the first five elements in the array
                        // Convert the strings into numbers
                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                        .map(Number)
                        // ES6
                        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
                        //.filter(current => current % 2 === 0)
                        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                        .filter(function (current) {
                           return current % 2 === 0; // filter the even numbers
                        })
                        ;

// output the result
console.log(seperatedNumbers);