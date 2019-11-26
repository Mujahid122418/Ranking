
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var errorClass= require("./utils/errClass")

var prodectRouter = require('./routes/food');



var usersRouter = require('./routes/users');
var globelError= require("./controllers/errorContollers")
var reviewRouter= require("./routes/review")

var app = express();
var config = require("./config");
var cors = require('cors')
app.use(cors())
// app.use(cors({
//   credentials: true,
// }));

const mongoose = require("mongoose")



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

mongoose.connect(config.myDburi,
   { useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true },
    err => {
  if (err) return console.log(err);
  console.log("DB connected");
});
app.use(express.json())
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/uploads')));
app.use('/images', express.static(__dirname + 'public/uploads'));
app.get("/",(req,res,next)=>{
  res.send("hello from server. server working fine")
})
app.use('/api/users', usersRouter);
app.use('/api/product', prodectRouter);
app.use('/api/reveiw', reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(new errorClass(`Your desire route is not found ${req.originalUrl}`, 404));
});

// error handler
app.use(globelError);

module.exports = app;
