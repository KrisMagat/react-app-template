const fetch = require('node-fetch');
const { User, Shop } = require('../models/dbModels');

const shopController = {};

// get shops
shopController.getFavorites = (req, res, next) => {
  //req.params to include username
  //user db call to get list of favorites
  //shop db call to get all shops in user favorites list
};

// add shop
shopController.getFavorites = (req, res, next) => {
  //req.body to include username and shop information
  //user db call to add shopID to user favorites
  //shop db call to add shop information to shops
};

// delete shop
shopController.getFavorites = (req, res, next) => {
  //req.query (or req.body) to include username and shop information
  //user db call to remove shop form user favorites
  //shop db call to remove shop information from shops.
};

module.exports = shopController;
