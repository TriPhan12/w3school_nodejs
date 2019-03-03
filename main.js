var http = require('http');
var dt = require('./myfirstmodule');

//create server object
http.createServer(function (req,res){
    res.write('Hello World!');  //Write a response to the client
    res.write("The date and time now are: "+ dt.myDateTime());
    res.end();
}).listen(8080);    //Thr server objecr listens on port 8080
//log.respone("Go to htttps://localhost:8080");                                                                                     