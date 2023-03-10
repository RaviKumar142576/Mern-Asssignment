var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const AuthenticationMiddleware = require('./middleware/authentication');
const AuthorizationMiddleware = require('./middleware/authorization');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//localhost:3000/*
app.use('/employee', AuthenticationMiddleware, indexRouter);

app.use('/auth', authRouter);

//localhost:3000/users/*
app.use('/users',AuthenticationMiddleware, usersRouter);
app.use('/users',AuthorizationMiddleware, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
