//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');

const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const supervisorRoute = require('./routes/supervisorRoute');
const announcementRoute = require('./routes/announcementRoute'); 
const feedbackRoute = require('./routes/feedbackRoute'); 
const userRoute = require('./routes/userRoute');                      

//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());


//4 CREATE API URL
app.use('/api/supervisor', supervisorRoute);
app.use('/api/announcement', announcementRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/user', userRoute);


app.use(globalErrHandler);
module.exports = app;