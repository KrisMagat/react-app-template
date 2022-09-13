const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

// get favorites
router.get('/:username', shopController.getFavorites, (req, res) => {
  res.status(200).json(res.locals.faveShops);
});

// add to favorites
router.post('/', shopController.addShop, (req, res) => {});
//req.body to include shopID

// delete favorite
router.delete('/', shopController.deleteShop, (req, res) => {});
//req.body to include shopID

module.exports = router;
