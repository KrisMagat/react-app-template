const fetch = require('node-fetch');
const { Shop } = require('../models/dbModels');

const shopController = {};

shopController.getFavorites = (req, res, next) => {
  Shop.find().catch((err, req, res, next) => {
    return next({
      log: 'dbController.getFaves middleware error',
      message: {
        err: 'An error has occured in dbController.getFaves middleware',
      },
    });
  });
};

module.exports = shopController;
