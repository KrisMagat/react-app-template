const isWindows = require('cross-env/src/is-windows');
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

//sign up form
router.get('/signup', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../dist/signup.html'));
});

// create user
router.post('/signup', userController.createUser, (req, res) => {
  // what should happen here on successful sign up?
  //insert userID in auth URL req.params
  res.redirect('/auth');
});

// login
router.post('/login', userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
  //insert userID in auth URL req.params
  res.redirect('/auth');
});

// handle authorized route
router.get('/auth:id', (req, res) => {
  if (Windows.sessionStorage.verified)
    //display favorites and yelp search results in auth.html
    res.status(200).sendFile(path.resolve(__dirname, '../dist/auth.html'));
  else res.redirect('/signup');
});
