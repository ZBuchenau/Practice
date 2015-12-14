var http = require('http');
var routes = require('./route');
// create an http server, and every time it receives a request id invokes a callback Function
var server = http.createServer(function(req, res){
  res.setHeader('Content-Type', 'application/json');
  routes[req.url](req, res);
});
//start the server on port 9001
//with a host name of localhost
//when the server starts, invoke the callback function
server.listen(9001, 'localhost', function(){
  console.log('{"message": "hello internet"}');
});

if(route[req.url] !== undefined){
  route[req.url](req, res);
} else {
  res.write('404 route not found');
  res.end();
}
