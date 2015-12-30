'use strict'

var prompt = require('prompt-sync').prompt

console.log('Anagram Checker')
console.log('Enter your first string')
var firstString = prompt()
console.log('Enter your second string')
var secondString = prompt()
var answer = isAnagram(firstString, secondString);
console.log('Is your first string an anagram of the second string: '+answer);

function isAnagram(x,y){
	// change string into an array of letters
	var splitArrayX = x.split('')
	var splitArrayY = y.split('')
	// then sort the letters (will be sorted alphabetically)
	splitArrayX.sort()
	splitArrayY.sort()
	// then turn the sorted array back into a string (because you cannot compare two arrays, so you couldn't say splitArrayX === splitArrayY even if they have same contents)
	splitArrayX.join('')
	splitArrayY.join('')
	// if they are anagrams of each other they should equal each other.
	var stringX = splitArrayX.join('')
	var stringY = splitArrayY.join('')

	return stringX === stringY // this tells user whether this is true or false

}