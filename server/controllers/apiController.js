const fetch = require('node-fetch');

const apiController = {};

const apiKey =
  'Bearer xVQBTAt_wGaGSBHnT3zmpj8BddMXlpveGhoLSbWFgBvy_CvzgA8QbWlef362bl2_IdhKMmBKLk5dpxyMjyusR_LNUIIptIO38kqzhyV9nMwsWzOFSudhyDLKuwUcY3Yx';

//getShops
apiController.getShops = (req, res, next) => {
  const { location, radius } = req.query;
  console.log(req.query);
  const url = `https://api.yelp.com/v3/businesses/search?categories=bubbletea&location=${location}&radius=${radius}`;

  console.log(url);
  fetch(url, {
    headers: { Authorization: `${apiKey}` },
  })
    .then((res) => res.json())
    .then((data) => {
      res.locals.yelpShops = data;
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

//getFavorite
apiController.getFavorite = (req, res, next) => {
  // business ID in req.params

  const url = `https://api.yelp.com/v3/businesses/${req.params.id}`;
  console.log(url);
  fetch(url, {
    headers: { Authorization: `${apiKey}` },
  })
    .then((res) => res.json())
    .then((data) => {
      res.locals.shopInfo = data;
      return next();
    })
    .catch((err, req, res, next) => {
      return next({
        log: 'apiController.getFavorite middleware error',
        message: {
          err: 'An error has occured in apiController.getFavorite middleware',
        },
      });
    });
};

module.exports = apiController;
