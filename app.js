//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');

const app = express();

// REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)

const loginRoute = require('./routes/loginRoute');



// APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());


// CREATE API URL

app.use('/api/login', loginRoute);




app.use(globalErrHandler);
module.exports = app;