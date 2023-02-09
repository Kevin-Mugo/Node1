const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

//app.use([ logger, authorize])

app.use(morgan('tiny'));

 app.get('/',(req,res) => {
  res.send("Home page");
})

app.get('/about',(req,res) => {
  res.send("Our about page");
})

app.get('/api/products',(req,res) => {
  res.send("Products");
})

app.get('/api/items',(req,res) => {
  console.log(req.user);  
  res.send("Items");
})
app.listen(5000 , ()=>{
  console.log("Server listening to port 5000...")
})