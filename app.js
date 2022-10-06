var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// khai bao router
var mobileRouter = require('./routes/mobile.js');
var laptopRouter = require('./routes/laptop.js');


var app = express();

// cau hinh database
var mongoose = require("mongoose");
const url = "mongodb://localhost:27017/greenwich";
// Greenwich là tên của database
//url connection string (cloud db)
//const url =
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect to db succeed !");
  }
});
// cau hinh body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// su dung router
app.use('/mobile', mobileRouter);
app.use('/laptop', laptopRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running http://localhost:3000")
});

module.exports = app;
