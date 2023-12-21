var express = require('express');
var router = express.Router();
const passport = require('passport');

// Home page route
// GET - /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Google OAuth login route
// GET - /auth/google
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    prompt: "select_account"
  }
));

// Google OAuth callback route
// GET - /oauth2callback
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // TODO - Decide where to route
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// OAuth logout route
// GET - /logout
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/movies');
  });
});

module.exports = router;
