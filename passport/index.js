const passport = require("passport");
const User = require("../models/user");

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email }).lean().exec((err, user) => {
    done(err, user); //once it finds user, can be found by req.user
  });
});

//import all the strategies
/* const GoogleStrategy = require("./GoogleStrategy"); */
const SignupStrategy = require("./SignupStrategy");
const SigninStrategy = require("./SigninStrategy");
/* const TwitterStrategy = require("./TwitterStrategy"); */

passport.use("local-signin", SigninStrategy);
passport.use("local-signup", SignupStrategy);

module.exports = passport;