//This file apprend (= add ) more content to the file
var fileSystem = require('fs');

fileSystem.appendFile('myfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved');
});