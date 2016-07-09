/*
    * The transactions possible are:
        * `total` - this should tally up all of the money in the bank balance and display it for the user.
        * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)
        * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)
        * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
    * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.
    * HINT: Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).
    * Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.
*/

const fs = require('fs');

var total = 0;
var userInput = process.argv[2];
var userInputValue = Number(process.argv[3]);
var textFile = 'bank.txt';
for (i = 0; i < 1; i++) {
  if (userInputValue > 0 && userInput === 'deposit') {
    console.log('positive number!');
    total = total + userInputValue;
    console.log(total);
  } else if (userInputValue > 0 && userInput === 'withdrawl') {
    console.log('negative number!');
    total = total = total - userInputValue;
    console.log(total);
  }
}
  fs.appendFile(textFile, total + ' , ', function(err) {

})
