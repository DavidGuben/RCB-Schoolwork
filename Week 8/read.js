
//require the fs NPM for reading and writing daya
const fs = require('fs');
//read file function for node
fs.readFile('movies.txt', 'utf8', (err, data) => {
// if error occurs throw an error
   if (err) throw error;
//log the data in the txt file
   console.log(data);
//split the data onto the next line
   var output = data.split(',');
//for loop looping the length of the output
   for (i = 0; i < output.length; i++) {
//output the data as an array
     console.log(output[i]);

   }
})
