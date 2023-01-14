const {readFile , writeFile} = require('fs').promises;
/*const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
//const { resolve } = require('path'); */

/*const getText = (path) => {
    return new Promise ((resolve,reject) =>{
        readFile(path,'utf-8',(error,data) =>{
            if(error){
                reject(error);
            } else{
                resolve(data);
            }
        })
    })
}*/
  
const start = async() => {
  try{
     const first = await readFile('./content/first.txt' , 'utf-8');
     const second = await readFile('./content/second.txt' , 'utf-8');
    console.log(first);
    console.log(second);

    await writeFile('./content/result.txt' , `THIS IS  GREAT :${first} ${second}` , {flag:'a'})
}
catch(error){

    console.log(error)

}
}
 
start();

//getText('./content/first.txt')
//.then((result) => console.log(result))
//.catch((error) => console.log(error)); 

