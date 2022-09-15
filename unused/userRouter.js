const isWindows = require('cross-env/src/is-windows');
const express = require('express');
const router = express.Router();
const userController = require('./models/userController');

// create user //this works!!!
// router.post('/login', userController.createUser, (req, res) => {
//   // what should happen here on successful sign up?
//   //insert userID in auth URL req.param
//   res.sendStatus(200);
// });

// login //signup //this works
router.post('/login', userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
  if (sessionStorage.username) res.redirect('/client/index.html');
  else res.redirect('/client/login.html');
});

// getFavorite
router.get('/shop/:username', userController.getUserFavorite, (req, res) => {
  // what should happen here on successful log in?
  //insert username in auth URL req.param
  res.status(200).json(res.locals.favorites);
});

// addFavorite
router.put('/shop', userController.addUserFavorite, (req, res) => {
  // what should happen here on successful log in?
  //insert username in auth URL req.param
  res.status(200).json(res.locals.favorites);
});

// removeFavorite
router.delete('/shop', userController.deleteUserFavorite, (req, res) => {
  // what should happen here on successful log in?
  //insert userID in auth URL req.param
  res.status(200).json(res.locals.favorites);
});

module.exports = router;
