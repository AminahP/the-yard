const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const CONNECTION_STRING = process.env.CONNECTION_STRING;
require('dotenv').config()
require('./config/databconfig')
const port = process.env.PORT || 3001



const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setup  to mongo
// mongoose.connect(CONNECTION_STRING);
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

app.use(logger('dev'));
app.use(express.json({extended:true}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/posts', postsRouter);
// app.use('/register', require('./routes/register'))
// app.use('/auth', require('./routes/auth'))

// Returns to client
app.get('/posts*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
});

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

module.exports = app;