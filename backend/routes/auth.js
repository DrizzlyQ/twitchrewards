const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/callback',
  passport.authenticate('discord', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('http://localhost:3000'); // or your frontend domain
  });

module.exports = router;