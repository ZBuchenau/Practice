var express = require('express');
var router = express.Router();

/* GET users listing. */

//upon login, set req.session.user to an object, and send a response of "you are now logged in"
router.get('/login', function(req, res, next) {
  var user = {'id': 1, 'name':'zach'};
  //use username & password to lookup user in db
  //set the session to data from the record returned
  req.session.user = user;
  res.send('You are now logged in');
});

//upon logout, set entire req.session to null in order to get rid of the cookie.
router.get('/logout', function(req, res, next) {
  req.session = null;
  res.send('You are now logged out');
});


//upon visiting /info, have the response reveal the user.name
router.get('/info', function(req, res, next) {
  res.send(req.session.user.name);
});

module.exports = router;
