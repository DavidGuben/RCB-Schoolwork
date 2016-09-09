var mysql = require('mysql');
var inquirer = require('inquirer');

//TO DO
//A query which returns all data for songs sung by a specific artist
//A query which returns all artists who appear within the top 5000 more than once
//A query which returns all data contained within a specific range
//A query which searches for a specific song in the top 5000 and returns the data for it

var inquirer = require('inquirer');
inquirer.prompt([


]).then(function (answers) {
    // Use user feedback for... whatever!!
});

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'TopSongsDB'
});

// Every method you invoke on a connection is queued and executed in sequence.

connection.connect();
  if (err) throw err;

});


connection.end();

// Closing the connection is done using end() which makes sure all remaining queries are executed before sending a quit packet to the mysql server.
