'use strict'

var prompt = require('prompt-sync').prompt;
var http = require("http");
console.log('Creating your own time service')


var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(new Date().toString())
  response.end();
});

server.listen(8888);
console.log("Server is listening");