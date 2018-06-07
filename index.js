// write your code here
var http = require('http');
//var http = require('http');
//import { createServer } from "http";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
  }).listen(3030, "127.0.0.1");
console.log('is this server working on port 3030');

