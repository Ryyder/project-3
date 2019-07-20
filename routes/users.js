const express = require('express');
const router = express.Router();
const passport = require("../passport");

//custom passport callback
router.post('/signup', (req, res, next) => {
  passport.authenticate("local-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "oops, something happened"
      });
    }
    /* return res.json(user); */
    //persistent login
    req.logIn(user, (error) => {
      if (error) {
        return res.status(500).json({
          message: error || "oops, something happened"
        });
      }
      user.isAuthenticated = true;
      //todo
      //don't send user password to client
      return res.json(user); 
    });
  })(req, res, next);

});

router.post('/signin', function (req, res, next) {

  passport.authenticate("local-signin", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "oops, something happened"
      });
    }
    /* return res.json(user); */
    //persistent login
    req.logIn(user, (error) => {
      if (error) {
        return res.status(500).json({
          message: error || "oops, something happened"
        });
      }
      user.isAuthenticated = true;
      //todo
      //don't send user password to client
      return res.json(user); 
    });
  })(req, res, next);
});

router.get("/api", (req, res) => {
  //const email = req.user.email; //req.session.passport.session
  //const email = req.session.passport.session;
  res.json({
    message: "hello world "
  });
});

module.exports = router;
