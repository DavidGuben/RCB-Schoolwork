//require fs
var fs = require('fs');

//create a variable that holds the third argument
var textFile = process.argv[2];
//append the blah text to the txt file named whatever your type as the third argument
fs.appendFile(textFile, 'blah', function(err) {
//if error
if (err) {
  console.log('error');
//if success
} else {
  console.log('content added');
}

})
