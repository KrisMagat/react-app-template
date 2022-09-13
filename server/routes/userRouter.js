const userController = require('./controllers/userController');
const cookieController = require('/controllers/cookieController');

//sign up form
app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});

// create user
app.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    // what should happen here on successful sign up?
    // redirect to /secret route
    res.sendFile(path.resolve(__dirname, '../client/secret.html'));
  }
);

/**
 * login
 */
app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    // what should happen here on successful log in?
    //check res.locals.match if true or false
    if (res.locals.match) {
      console.log('this one is true');
      res.redirect('/secret');
    }
    if (!res.locals.match) {
      console.log('this one is false');
      res.redirect('/signup');
    }
  }
);

/**
 * Authorized routes
 */
app.get('/secret', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/secret.html'));
});

app.get('/secret/users', userController.getAllUsers, (req, res) => {
  res.send({ users: res.locals.users });
});
