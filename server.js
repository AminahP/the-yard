
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

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

const app = express();

connection()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRouter);
app.use('/', indexRouter);


// view engine setup im using jade
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


app.get('/posts*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
});


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`chillen on port ${port}`)
});

module.exports = app;