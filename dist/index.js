'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router = require('./router/router.js');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var app = express();

dotenv.config({ path: './config/.env' });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(router);

var port = process.env.PORT || 3100;
var options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0-1lxdq.mongodb.net/test', options).then(function () {
  console.log("Successful");
  app.listen(port);
});