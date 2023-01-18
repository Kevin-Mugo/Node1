const http = require('http');


/*const server = http.createServer((req,res) =>{
    res.end("Welcome");
}*/

//using event emitter API option
const server = http.createServer();

//emit request event
//subscribe to it /listen and respond
// .on method takes the event name and callback function as its arguments

server.on('request', (req,res) => {
    res.end("Welcome");

})


server.listen(5000);