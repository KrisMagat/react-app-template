const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

//db get favorites
router.get('/', dbController.getFavorites, (req, res) => {
  res.status(200).json(res.locals.faveShops);
});

//db add to favorites
router.get('/', apiController.getShops, (req, res) => {});

//db update favorite

//db delete favorite

module.exports = router;
