//npm requires
var url = require('url');
var http = require('http');
//port(s)
var port = 8080;
//server
var server = http.createServer(handleRequest);
//server listen to port to make sure it's listening/working.
server.listen(port, function() {
  console.log('Server listenind on port: ' + port);
});

//handle reqs for each path related to the port established above
function handleRequest(req, res) {
  var url_parts = url.parse(req.url);
  //switch case for the pathnames for each url part
  switch(url_parts.pathname) {
    case "/":
      display_root(url_parts.pathname, req, res);
      break;
    case "/portfolio":
      display_portfolio(url_parts.pathname, req, res);
      break;
    case "/edit":
      //sys.puts displays whatever is written inside it, similarly to console.log
      sys.puts("display edit");
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}
//function that creates display for root folder
function display_root(url, req, res) {
  var myHTML = '<html>';
  //+= operator adds the content on the right to the variable on the left
  myHTML += '<body><h1>Home Page</h1>';
  myHTML += '<a href ="/portfolio">Portfolio</a>';
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(myHTML);
}

function display_portfolio(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>portfolio</h1>';
  //since index is not defined it will go to the 404 page
  myHTML += '<a href ="/index">Go home</a>';
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(myHTML);
}

function display_404(url, req, res) {
  //writes in the header
  res.writeHead(404, {'Content-Type':'text/html'});
  //writes in the body
  res.write('<h1>404</h1>');
  res.write('<h1>Page Not Found</h1>');
  //writes at the end
  res.end('The page you are looking for is not found.');
}
