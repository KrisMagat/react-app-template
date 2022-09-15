const fetch = require('node-fetch');
const Favorite = require('../models/dbModels');

const apiController = {};

const apiKey =
  'Bearer xVQBTAt_wGaGSBHnT3zmpj8BddMXlpveGhoLSbWFgBvy_CvzgA8QbWlef362bl2_IdhKMmBKLk5dpxyMjyusR_LNUIIptIO38kqzhyV9nMwsWzOFSudhyDLKuwUcY3Yx';

//getShops
apiController.getShops = (req, res, next) => {
  const { location, radius } = req.query;
  console.log(req.query);
  const url = `https://api.yelp.com/v3/businesses/search?categories=bubbletea&location=${location}&radius=${radius}&limit=12`;

  console.log(url);
  fetch(url, {
    headers: { Authorization: `${apiKey}` },
  })
    .then((response) => response.json())
    .then((data) => {
      const apiShops = data.businesses;
      res.locals.shops = apiShops.map((el) => {
        const { name, is_closed, rating, location, display_phone, url } = el;
        return {
          name: name,
          status: is_closed ? 'Currently Closed' : 'Currently Open',
          rating: rating,
          street_add: location.display_address[0],
          city_state: location.display_address[1],
          phone: display_phone,
          url: url,
        };
      });

      return next();
    })
    .catch((err, req, res, next) => {
      return next({
        log: 'apiController.getShops middleware error',
        message: {
          err: 'An error has occured in apiController.getShops middleware',
        },
      });
    });
};

// check if favorite
apiController.checkFavorite = (req, res, next) => {
  // shop name in req.params
  console.log(req.params);
  Favorite.find({ name: req.params.name })
    .then((data) => {
      res.locals.favorite = data[0].name;
      return next();
    })
    .catch((err, req, res, next) => {
      return next({
        log: 'apiController.checkFavorite middleware error',
        message: {
          err: 'An error has occured in apiController.checkFavorite middleware',
        },
      });
    });
};

//add to favorite
apiController.addFavorite = (req, res, next) => {
  console.log(req.body);
  Favorite.create(req.body)
    .then((data) => {
      console.log('Favorite added', data);
      res.locals.favorite = data.name;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'userController.createUser middleware error',
        message: { err: 'An error has occured in userController.createUser' },
      });
    });
};

module.exports = apiController;
