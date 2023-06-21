const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const app=express();

app.use(bodyParser.urlencoded({extended:true}))



// Routes
app.use('/',require('./routes/index'));


app.listen(PORT, () => {
  console.log("Server is running : " + PORT);
})