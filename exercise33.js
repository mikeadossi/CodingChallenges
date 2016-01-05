'use strict'

var prompt = require('prompt-sync').prompt;
console.log('Magic 8 Ball Program')

var array = []
array.push('Yes','No','Maybe','Ask again later')
console.log('What is your question')
var getQuestion = prompt()
var result = array[getRandomInt(0,3)];

console.log(result)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}