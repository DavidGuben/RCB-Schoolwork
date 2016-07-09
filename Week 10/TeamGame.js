//DEPENDANCY FOR inquirer NPM PACKAGE
var inquirer = require('inquirer');

//---------------------------------------GOAL 01--------------------------------------------------
// Create a function which uses constructors and user input to create and manage a team of players.
//---------------------------------------GOAL 01--------------------------------------------------

//Coin flip function.
function coinFlip() {
  Math.floor((Math.random() * 2 ) + 1);
}

//Player team object that holds player information and stats.
function playerTeam(name, position, offense, defense) {
  this.name = name,
  this.position = position,
  this.offense = Math.floor((Math.random() * 10) + 1), // random offense # from 1 - 10.
  this.defense = Math.floor((Math.random() * 10) + 1), // random defense # from 1 - 10.

  //Method which increases player's offense or defense based on a coinflip.
  this.GoodGame =  function() {
    var coin = coinFlip();
    if (coin == 1) {
      this.offense++;
      console.log(this.name +"'s offense has gone up.'");
    } else {
      this.defense++;
      console.log(this.name +"'s defense has gone up.'");
    }
  },

  //Method which decreases player's offense or defense based on a coinflip.
  this.BadGame = function() {
    var coin = coinFlip();
    if (coin == 1) {
      this.offense--;
      onsole.log(this.name +"'s offense has gone down.'");
    } else {
      this.defense--;
      onsole.log(this.name +"'s defense has gone down.'");
    }
  },

  //prints all of the player's properties to the screen.
  this.PrintStats = function() {
    console.log(" Name :" + this.name + " Position: " + this.position + " Offense: " + this.offense + " Defense: " + this.defense);
  };

}

//---------------------------------------GOAL 02--------------------------------------------------
// Create a program which allows you to create 8 unique players; 5 starters and 3 subs.
//---------------------------------------GOAL 02--------------------------------------------------

var score = 0;
var playerArray = [1,2,3,4,5,6,7,8];
var starterArray = [];
var subsArray = [];

var playerCreator = function() {
  if (starterArray.length + subsArray.length <= 8) {
    inquirer.prompt([{
      name: "name",
      message: "Player's name: "
    }, {
      name: "position",
      message: "Player's position: ",
    }, {
      name: " offense"
      message: "Player's offense ability: ",
      validate: function(value) {
        if (isNAN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
          return: true;
      } else {
          return: false;
      }
    }
    }, {
      name: "defense",
      message: "Player's defense ability: ",
      validate: function(value) {
        if (isNAN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
          return: true;
      } else {
          return: false;
      }
    }
  }]).then(function(answers) {

  })
  }
}

//---------------------------------------GOAL 03--------------------------------------------------
// Create a function called "playGame" which will be run once all of your players have been
// created and will do the following:
//  -  1. Loops 10 times, Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats.
//  -  2. If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
//  -  3. If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
//  -  5. After the score has been changed, you may substitute any of your players within the starters array with any of those players within the subs array.
//  -  6. If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array.
//  -  7. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array.
//  -  8. If the score is equal to zero, then do nothing.
//  -  9. Prompt the player if they would like to play again: runs playGame from the start once more if they do and ends the program if they don't.
//---------------------------------------GOAL 03--------------------------------------------------

function playGame() {}
