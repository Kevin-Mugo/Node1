const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
    
        res.end("Welcome to Anzy furnitures store");
    }
    if(req.url === '/about'){
        res.end("Here is the info about us")
    }
    res.end(`
    <h1>Oops!!</h1>
    <p>We cant access the page you are looking for</>

    <a href = "/">Back home</a>
    `)
}
)
server.listen(4001);