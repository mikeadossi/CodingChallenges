// ask user for balance
// ask user for APR 
// ask user for monthly 
// calculate APR x balance forumula
// return the number of months needed

var prompt = require('prompt-sync').prompt
console.log('What is your credit card balance?')
var b = parseInt(prompt())
console.log('What is your credit card APR?')
var APR = parseInt(prompt())
console.log('How much would you like to pay monthly?')
var p = parseInt(prompt())
var i = APR/365
calculateMonthsUntilPaidOff();
//console.log('b,i,p = '+b,i,p)

function calculateMonthsUntilPaidOff(){ 
var numOfMonths;
var x = -1/30
var y = Math.log(1+((b/p)*(1-((1+i)^30))))
var denominator = Math.log(1+i)
console.log('x,y,denominator: '+x,y,denominator)
numOfMonths = x*(y/denominator)
console.log('numOfMonths: '+numOfMonths);


//console.log('If you made monthly payments of $'+p+' you would be out of debt in '+numOfMonths+' months.')

}