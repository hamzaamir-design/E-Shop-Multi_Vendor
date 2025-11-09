const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// Middleware to parse cookies
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload({useTempFiles: true}));

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

// Middleware for error handling
const errorMiddleware = require('./middleware/Error');
const { trusted } = require('mongoose');
app.use(errorMiddleware);

module.exports = app;