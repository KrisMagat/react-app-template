const express = require('express');
const path = require('path');
const app = express();
const apiController = require('./controllers/apiController');

const PORT = process.env.EXPRESS_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use('/', express.static(path.resolve(__dirname, '../src')));

//serve index.html
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'))
);

// api call to check favorite
app.get('/api/:name', apiController.checkFavorite, (req, res) => {
  res.status(200).json(res.locals.favorite);
});

// api call to add favorite
app.post('/api', apiController.addFavorite, (req, res) => {
  res.sendStatus(200);
});

//api call to get all shops
app.get('/api', apiController.getShops, (req, res) => {
  res.status(200).json(res.locals.shops);
});

//default 404 handler
app.use((req, res) =>
  res.status(404).send('Default 404 handler. Page not found.')
);

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    status: 400,
    log: 'Unknown middleware error',
    message: { err: 'An error has occured in unknown middleware' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj);
  res.status(errorObj.status).send(errorObj.message);
});

//execute
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
