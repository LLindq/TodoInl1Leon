const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router.js');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const app = express();

dotenv.config({ path: './config/.env' });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(router)


const port = process.env.PORT || 3100;
const options ={
      useUnifiedTopology: true, 
      useNewUrlParser: true
  }
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-1lxdq.mongodb.net/test`, options).then(()=> {
    console.log("Successful")  
    app.listen(port);
})
