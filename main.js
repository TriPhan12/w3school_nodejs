var http = require('http');
var dt = require('./myfirstmodule');

//create server object
http.createServer(function (req,res){
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');  //Write a response to the client
    res.write("The date and time now are: " + dt.myDateTime());
    res.end();
}).listen(8080);    //The server objecr listens on port 8080

console.log("Server dang chay o cong localhost:8080, nhan Ctrl + C de stop server");
