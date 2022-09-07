//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');
const bodyparser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)

const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');
const getUserRoute = require('./routes/getUserRoute');
const updateUserRoute = require('./routes/updateUserRoute');



//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use|(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const oneDay = 1000*60*60*24;

app.use(session({
    secret:'thisismysecret_keysadhasdkjasdh',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: oneDay }
}));


//4 CREATE API URL

app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/user', getUserRoute);
app.use('/api/update', updateUserRoute);





app.use(globalErrHandler);
module.exports = app;