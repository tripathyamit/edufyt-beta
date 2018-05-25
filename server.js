var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express()
var passport=require('passport')
var nunjucks=require('nunjucks')

var port=3000
var secret = require('./config/secret');

// database
mongoose.connect(secret.edufyt_dev_conn, function(err) {
    if (err) {
      console.log("DB Connection:"+err);
    } else {
      console.log("Connected to the database");
    }
  });

// templating engine
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.use(passport.initialize)
// app.use(passport.session)
app.use(express.static(__dirname+'/public'));

app.get('/', function (req, res,next) {
    msg='Hello World mexico'
    res.render('homepage.html')
  })

 
app.listen(port,function(err){
    if(err){
        console.log("error")
    }else{
        console.log("running on port:"+port)
    }
})