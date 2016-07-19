
//require http npm module
var http = require('http');

//establish ports to be used
var port01 = 7000;
var port02 = 7500;

//function that handles requests and displays response
function handleRequest1(request, response) {
  response.end('You rock');
}

function handleRequest2(request, response) {
  response.end('You suck');
}

//create server(s)
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//start server(s)
server1.listen(port01, function() {
  //log when port is listening
  console.log('----------------------------------------------------------------');
  console.log('port ' + port01 + ' connected.');
  console.log('----------------------------------------------------------------');
});

server2.listen(port02, function() {
  console.log('----------------------------------------------------------------');
  console.log('port ' + port02 + ' connected.');
  console.log('----------------------------------------------------------------');
});
