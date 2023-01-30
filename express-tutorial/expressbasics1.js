const express =  require ('express');
const app = express();


app.get('/' , (req,res) => {

   console.log('User accessed the resource ')
   res.status(200).send('Home page');
})

app.get('/about' , (req,res) => {

   res.status(200).send('Our about  page');
})

app.all('*' , (req,res) => {
   res.status(404).send('<h1>resorce not found </h1>')
})

app.listen(5000 , ()=>{
   console.log('Server listening to port 5000');
})

//methods to use 

//app.get()
//app.post()
//app.put()
//app.dellete()
//app.all()
//app.use()
//app.listen()
