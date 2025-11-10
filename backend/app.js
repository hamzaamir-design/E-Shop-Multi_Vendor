const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

// Middleware to parse cookies
app.use(express.json());
app.use(cookieParser());
app.use('/', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// test route
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

// config
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path : "backend/config/.env"
  });
}

// Importing routes
const user = require('./controller/user-controller');
app.use('/api/v2', user);

// Middleware for error handling
const errorMiddleware = require('./middleware/Error');
const { trusted } = require('mongoose');
app.use(errorMiddleware);

module.exports = app;