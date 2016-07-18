
// * The one listening on port 7000 will always tell the user something good about themselves.

// * The one listening on 7500 will always tell the user something bad about themselves.

//require http npm module
var http = require('http');


//establish ports to be used
var port01 = 7000;

var port02 = 7500;


//function that handles requests and displays response
function handleRequest(request, response) {
  response.end('It works!!');
}

//create a server
var server = http.createServer(handleRequest);

//start server
server.listen(port01, function() {
  //log when port is listening
  console.log('You are awesome only because you are on the ' + port01 + ' port.');
});

//start server
server.listen(port02, function() {
  //log when port is listening
  console.log('You are dumb only because you are on the ' + port02 + ' port.');
});
