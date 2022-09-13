const isWindows = require('cross-env/src/is-windows');
const { useInsertionEffect } = require('react');
const { User } = require('../models/dbModels');

const userController = {};

// create user
userController.createUser = (req, res, next) => {
  //username = req.body.username
  //password = bcrypted password

  User.create(req.body)
    // return next
    .then((user) => {
      windows.sessionStorage.verified = true;
      return next();
    })
    // catch the error and invoke the global error handler
    .catch((err) => next({ error: err }));
};

// verify user
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  //check if a user exists and password is correct
  User.find({ username: username })
    .then((data) => {
      if (req.body.password === users[0].password)
        windows.sessionStorage.verified = true;
      else res.locals.verified = false;
      return next();
    })
    .catch((err) => {
      return next({
        err: 'Error in userController.verifyUser' + JSON.stringify(err),
      });
    });
};

module.exports = userController;
