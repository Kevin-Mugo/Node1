const {readFile , writeFile } = require('fs');

readFile('./content/first.txt' , 'utf-8',(error,result) => 
{if (error){
    console.log(error)
}else{
 const first = result;

 readFile('./content/second.txt' ,'utf-8', (error,result) => {
    if (error){
        console.log(error)
    }else{
     const second = result;


writeFile('./content/resultAsync.txt',`Here is my result: ${first} , ${second}` , (error,result) => {
    if(error){
        console.log(error);
    }else{
        console.log(result);
    }
})     
 }})

}})
