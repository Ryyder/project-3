const express = require('express');
/* const cookieParser = require('cookie-parser'); */
const logger = require('morgan');
const mongoose = require('mongoose');


const passport = require("./passport");
const cookieSession = require('cookie-session');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const newsAPI = require("./routes/api");
/* const googleRouter = require("./routes/google"); */
const PORT = process.env.PORT || 3001;

const app = express();
mongoose.connect('mongodb://localhost/authentication', {useNewUrlParser: true});

// Use newsAPI
app.use("/api", newsAPI);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* app.use(cookieParser()); */
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());
app.use('/authentication', usersRouter);
app.use('/', indexRouter);
//app.use('/google', googleRouter);





app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})

module.exports = app;
