const User = require('../models/dbModels');

const userController = {};

// create user //this works!!
userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  User.create({ username, password, favorites: [] })
    .then((user) => {
      console.log('User created at', user);
      return next();
    })
    // catch the error and invoke the global error handler
    .catch((err) => {
      if (err.code == 11000)
        return next({
          log: 'userController.createUser middleware error',
          message: { err: 'Duplicate username' },
        });
      else
        return next({
          log: 'userController.createUser middleware error',
          message: { err: 'An error has occured in userController.createUser' },
        });
    });
};

// verify user // this works!!
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.query;
  //check if a user exists and password is correct
  User.find({ username: username })
    .then((data) => {
      console.log('password type is:', typeof data[0].password);
      if (password !== data[0].password)
        res.locals.verified = 'Username or password does not match';
      else res.locals.verified = 'User verified';
      return next();
    })
    .catch((err) => {
      return next({
        log: 'userController.verifyUser middleware error',
        message: { err: 'An error has occured in userController.verifyUser' },
      });
    });
};

module.exports = userController;
