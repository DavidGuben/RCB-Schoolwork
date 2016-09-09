//inside of the Terminal
//npm install mysql --save

// Making an Express server available
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'seinfeld_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//* Create a Node Application with Express, MySQL, and Body Parser with three Express routes...

  //* Create a '/cast' route that will display all the actors and their data ordered by their id

  //* Create a '/coolness-chart' route that will display all the actors and their data ordered by their coolness points

  //* Create a '/attitude-chart/:att' route that will display all the actors for a specific type of attitude

  app.get('/cast', function(req, res){
    connection.query('SELECT * FROM actors', function(err, result) {
      var html = '<h1> Actors </h1>';
      html += '<ul>';
      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> Name: ' + result[i].name + '</p></li>';
        html += '<li><p>Coolness: ' + result[i].coolness_points + ' </p></li>';
        html += '<li><p>Attitude: '+ result[i].attitude + '</p></li>';
      };

      html += '</ul>'
      // Send the html to the browser
      res.send(html);
  });
});

  app.get('/coolness-chart', function(req, res){
    //res.sendFile(path.join(__dirname, 'view.html'));
  });

  app.get('/attitude-chart/:att', function(req, res){
    //res.sendFile(path.join(__dirname, 'view.html'));
  });





var port = 3000;
app.listen(port);
