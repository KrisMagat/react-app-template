const { useInsertionEffect } = require('react');
const { User } = require('../models/dbModels');

const userController = {};

// create user
userController.createUser = (req, res, next) => {
  //username = req.body.username
  //password = bcrypted password

  db.User.create(req.body)
    // return next
    .then((user) => next())
    // catch the error and invoke the global error handler
    .catch((err) => next({ error: err }));
};

// verify user
userController.verifyUser = (req, res, next) => {
  // write code here
  //req.body
  // console.log(req.body.username);
  const { username, password } = req.body;
  //check if a user exists and password is correct
  User.find({ username: username }, (err, users) => {
    console.log(users);
    if (err)
      return next({
        err: 'Error in userController.verifyUser' + JSON.stringify(err),
      });
    // console.log('Login Successful');
    // console.log(users);
    //check if password is correct
    const password = users[0]._doc.password;
    if (req.body.password === password) res.locals.match = true;
    else res.locals.match = false;
    return next();
  });
};

module.exports = userController;
