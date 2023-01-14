const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("Home Page")
        res.end()
    }

    if(req.url === '/about'){
        //Blocking code
        for(let i=0 ; i < 10 ; i++){
            for(let j=0 ; j < 10 ; j++){
                console.log(`${j} ${i}`)
            }
        }
        res.write("Here is the infomation about us ")
        res.end()
    }else{
        res.write("We cant find the page you are looking for")
     res.end()
    }
    

})

server.listen(5000 , () =>{
    console.log('Server listening to port 5000');
})