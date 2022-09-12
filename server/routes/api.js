const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

//Yelp api get request  (req.body object includes the request details)
router.get('/', apiController.getShops, (req, res) => {
  res.status(200).json(res.locals.shops);
});

module.exports = router;
