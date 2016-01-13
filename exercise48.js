'use strict'

var prompt = require('prompt-sync').prompt;
var http = require('http'); // https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request

console.log('Grabbing the Weather')

console.log('Which city (in the UK) would you like to check?')
var city = prompt()

var options = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q='+city+'&appid=2de143494c0b295cca9337e1e96b00e0'
};

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
    var weatherInfo = JSON.parse(str) // JSON is built into Node.js and useable whenever needed.
    console.log(weatherInfo)
    console.log('The weather now: '+weatherInfo.weather[0].description)
  });
}

http.request(options, callback).end();