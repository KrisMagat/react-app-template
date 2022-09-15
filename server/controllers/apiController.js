const fetch = require('node-fetch');

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
      // console.log('RES.LOCALS', res.locals.shops);
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
// apiController.getFavorite = (req, res, next) => {
//   // business ID in req.params

//   const url = `https://api.yelp.com/v3/businesses/${req.params.id}`;
//   console.log(url);
//   fetch(url, {
//     headers: { Authorization: `${apiKey}` },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       res.locals.shopInfo = {
//         shopId: data.id,
//         name: data.name,
//         rating: data.rating,
//         is_closed: data.is_closed ? 'Closed' : 'Open',
//         location: data.location.display_address,
//         phone: data.display_phone,
//         url: data.url,
//       };
//       return next();
//     })
//     .catch((err, req, res, next) => {
//       return next({
//         log: 'apiController.getFavorite middleware error',
//         message: {
//           err: 'An error has occured in apiController.getFavorite middleware',
//         },
//       });
//     });
// };

module.exports = apiController;
