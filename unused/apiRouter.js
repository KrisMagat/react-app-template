const express = require('express');
const router = express.Router();
const apiController = require('../server/controllers/apiController');

//Yelp api get request for specific shop (req.params.id)
// router.get('/:id', apiController.getFavorite, (req, res) => {
//   res.status(200).json(res.locals.shopInfo);
// });

//Yelp api get request for search results
router.get('/', apiController.getShops, (req, res) => {
  res.status(200).json(res.locals.shops);
});

module.exports = router;
