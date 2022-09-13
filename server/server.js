const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.EXPRESS_PORT || 3000;

//routers
const api = require('./routes/apiRouter');
const db = require('./routes/shopRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

//handle api calls
app.use('/api', apiRouter);

//handle user db calls
app.use('/user', shopRouter);

//handle shop db calls
app.use('/shop', shopRouter);

//serve index.html
app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
);

//default 404 handler
app.use((req, res) => res.status(404).send('Page not found.'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    status: 400,
    log: 'Unknown middleware error',
    message: { err: 'An error has occured' },
  };
  const errorObj = { ...defaultErr, err };
  res.status(errorObj.status).send(errorObj.message);
});

//execute
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
