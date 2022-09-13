const { User, Cookie } = require('../models/userModel');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  //if res.locals.match is false
  if (!res.locals.match) {
    //return next
    next();
  }
  const { username, password } = req.body;
  //query mongoose for the user object that matches
  User.find({ username: username }, (err, users) => {
    if (err)
      return next(
        'Error in cookieController.setSSIDcookie' + JSON.stringify(err)
      );
    const id = users[0]._doc._id;
    res.cookie('ssid', id);
    return next();
  });

  // res.cookie('ssid');
  //generate and send a cookie now with a id of 'ssid' and value equal to user id
  //users[0]._doc.password
};

module.exports = cookieController;
