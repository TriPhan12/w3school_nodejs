var fs = require('fs');

fs.writeFile('myfile.txt', 'New content', function (err) {
    if (err) throw err
    console.log("Saved!");
});