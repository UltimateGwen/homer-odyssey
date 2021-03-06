// declare all the necessary libraries
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const authRouter = require('./routes/auth/auth');

// set up the application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/auth/signup', authRouter);

// implement the API part
app.get('/auth/signup', (req, res) => {
  res.send('I am in POST signup');
});
// /// in case path is not found, return the 'Not Found' 404 code
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
