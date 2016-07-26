var express = require('express');
var handlebars = require('handlebars');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));


var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
];
app.get('/icecream/:name', function(req, res) {


});

app.get('/icecreams', function(req, res) {
  res.render('icecreams', {ics: icecreams});
});


var port = 3000;
app.listen(port);
