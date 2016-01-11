'use strict'
// making a web call in Node.js

var prompt = require('prompt-sync').prompt;
var http = require('http'); // https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request

console.log('Who\'s in Space')
//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'api.open-notify.org',
  path: '/astros.json' // Note this API doesn't require a key, unlike exercise48s website.
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
    JSON.parse(str) // JSON is built into Node.js and useable whenever needed.
  });
}

http.request(options, callback).end();