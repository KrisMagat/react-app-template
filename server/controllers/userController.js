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
      if (password !== data[0].password)
        res.locals.verified = 'User or password does not match';
      else {
        res.locals.verified = 'User verified';
        res.locals.favorites = data[0].favorites;
      }
      return next();
    })
    .catch((err) => {
      return next({
        log: 'userController.verifyUser middleware error',
        message: { err: 'An error has occured in userController.verifyUser' },
      });
    });
};

// add user favorite // this works!!
userController.addUserFavorite = (req, res, next) => {
  const { username, shopId } = req.body;
  User.findOneAndUpdate(
    { username: username },
    { $addToSet: { favorites: [shopId] } },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res.locals.favorites = data.favorites;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'userController.addUserFavorite middleware error',
        message: {
          err: 'An error has occured in userController.addUserFavorite',
        },
      });
    });
};

// remove user favorite // this works!!
userController.deleteUserFavorite = (req, res, next) => {
  const { username, shopId } = req.body;
  User.findOneAndUpdate(
    { username: username },
    { $pull: { favorites: shopId } },
    { new: true }
  )
    .then((data) => {
      console.log('record deleted');
      res.locals.favorites = data.favorites;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'userController.deleteUserFavorite middleware error',
        message: {
          err: 'An error has occured in userController.deleteUserFavorite',
        },
      });
    });
};

module.exports = userController;
