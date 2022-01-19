var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs')
const session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets');
var servicesRouter = require('./routes/services');
var contatoRouter = require('./routes/contato');
var sobreRouter = require('./routes/sobre');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin')

var app = express();

const logRequest = (req, res, next) => {
  let log = `${new Date()} - ${req.path} - ${req.method} \n`
  fs.appendFileSync('log.txt', log)
  next()
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logRequest)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {secret: "PETEXP"}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/servicos', servicesRouter);
app.use('/contato', contatoRouter);
app.use('/sobre', sobreRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);

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

module.exports = app;
