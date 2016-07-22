// Dependencies
// Required npm packages
var express = require('express');
var bodyParser = require('body-parser');

// Attaches express to the "app" variable designates the port to "3000"
var app = express();
var PORT = 3000;

// Body parser is used to create middleware connecting two other applications or functions.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Data
// Create an object containing statistics for each character
var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000
}

var darthmaul = {
	name: "Darth Maul",
	role: "Sith Lord",
	age: 200,
	forcePoints: 1200
}

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character

var obiWan = {
	name: "Obi Wan Kenobi",
	role: "Jedi Master",
	age: 60,
	forcePoints: 1880
}

// Routes
// ===========================================================
app.get('/', function(req, res){
	res.send("Welcome to the Star Wars Page!");
})

app.get('/yoda', function(req, res){
	res.json(yoda);
});

app.get('/darthmaul', function(req, res){
	res.send(darthmaul);
})

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes

app.get('/darthmaul', function(req, res){
	res.send(obiWan);
})



// Listener
// ===========================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
