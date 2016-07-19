//npm requires
var url = require('url');
var http = require('http');
var fs = require('fs');

//port(s)
var port = 8080;

//server
var server = http.createServer(handleRequest);

function handleRequest(req, res){
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case "/":
      display_root(url_parts.pathname, req, res);
      break;
    case "/faveFood":
      display_faveFood(url_parts.pathname, req, res);
      break;
    case "/faveMovies":
      display_faveMovies(url_parts.pathname, req, res);
      break;
    case "/faveCSS":
      display_faveCSS(url_parts.pathname, req , res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
};

function display_root(url, req, res) {
  fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function display_faveFood(url, req, res) {
  fs.readFile("faveFood.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function display_faveMovies(url, req, res) {
  fs.readFile("faveMovies.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function display_faveCSS(url, req, res) {
  fs.readFile("faveCSS.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function display_404(url, req, res) {
  fs.readFile("404.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}



//server listen to port to make sure it's listening/working.
server.listen(port, function() {
  console.log('Server listenind on port: ' + port);
});
