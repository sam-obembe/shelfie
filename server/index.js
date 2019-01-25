require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const control = require('./controller');



//process.env.CONNECTION_STRING not working for some odd reason. Tried setting process.env.CONNECTION_STRING  to a variable and that did not work either. Need to hard code it in
const app = express();

const port = 5000;


app.use(bodyParser.json());
//const databaseURL = process.env.CONNECTION_STRING;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  console.log("database connected")
  
}).catch(err => console.log(err))

app.get("/api/inventory",control.getProducts);
app.post("/api/product", control.addProduct);


app.listen(port, ()=>{console.log(`listening on port ${port}`)})