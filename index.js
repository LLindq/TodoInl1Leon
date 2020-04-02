const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router.js');
// const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const app = express();
// const jquery = require('jquery');
const config = require('./config/config')


//Static file location
app.use(express.static(__dirname + '/public'));

// dotenv.config({ path: './config/.env' });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(router)

/// Animation 

// // jquery transit is used to handle the animation
// $('input').focusin(function() {
//   $('label').transition({x:'80px'},500,'ease').next()
//   .transition({x:'5px'},500, 'ease');
// //setTimeout needed for Chrome, for some reson there is no animation from left to right, the pen is immediately present. Slight delay to adding the animation class fixes it
//    setTimeout(function(){
//   $('label').next().addClass('move-pen');
//   },100);

// });

// $('input').focusout(function() {
//     $('label').transition({x:'0px'},500,'ease').next()
//      .transition({x:'-100px'},500, 'ease').removeClass('move-pen');
// });

/// Animation end
const port = process.env.PORT || 3100;
const options ={
      useUnifiedTopology: true, 
      useNewUrlParser: true
  }
  mongoose.connect(config.databaseURL, options).then(()=> {
    console.log("Successful")  
    app.listen(port);
    //test
})
