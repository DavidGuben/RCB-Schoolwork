var mysql = require('mysql');
var inquirer = require('inquirer');


// TO DO
// It is your task to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist's song and album made it into the charts at the time of their release.
//HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?


inquirer.prompt([
  // questions

]).then(function (answers) {
    // user feedback
});

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'TopSongsDB'
});

SELECT user.name, course.name
FROM `user`
INNER JOIN `course` on user.course = course.id;
