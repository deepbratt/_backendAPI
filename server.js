const express = require ('express');
require ('express-async-errors');
const cors = require ('cors');
const app = express ();
const bodyParser = require ('body-parser');
const morgan = require ('morgan');

require ('./config/db');

//Models
require ('./models/users');
require ('./models/posts');
require ('./models/comments');

//Middleware
app.use (bodyParser.json ()).use (morgan ());
app.use ('/public', express.static (__dirname + '/public'));
app.use (cors ());


//Routes
app.use ('/api/users', require ('./controllers/users'));
app.use ('/api/posts', require ('./controllers/posts'));
app.use ('/api/comments', require ('./controllers/comments'));

//Not Found Route
app.use ((req, res, next) => {
  req.status = 404;
  const error = new Error ('404! Routes not found');
  next (error);
});

//error handler
if (app.get ('env') === 'production') {
  app.use ((error, req, res, next) => {
    res.status (req.status || 500).send ({
      message: error.message,
    });
  });
}

app.use ((error, req, res, next) => {
  res.status (req.status || 500).send ({
    message: error.message,
    stack: error.stack,
  });
});

var port = process.env.PORT || 4000;

app.listen (port , function () {
  console.log ('Server is running on port: '+ port);
});
