//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');
const bodyparser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');

const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const supervisorRoute = require('./routes/supervisorRoute');
const announcementRoute = require('./routes/announcementRoute'); 
const feedbackRoute = require('./routes/feedbackRoute'); 
const userRoute = require('./routes/userRoute');  
const loginRoute = require('./routes/loginRoute');
const toolsRoute = require('./routes/toolsRoute'); 
const docToolsRoute = require('./routes/docToolsRoute'); 
const chatRoute = require('./routes/chatRoute');
const chatGroupRoute = require('./routes/chatGroupRoute');
const disciplineRoute = require('./routes/disciplineRoute');  
const projectRoute = require('./routes/projectRoute');                    

//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//app.use(fileupload());

const oneDay = 1000*60*60*24;

app.use(session({
    secret:'thisismysecret_keysadhasdkjasdh',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: oneDay }
}));


//4 CREATE API URL
app.use('/api/supervisor', supervisorRoute);
app.use('/api/announcement', announcementRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/user', userRoute);
app.use('/api/login', loginRoute);
app.use('/api/tools', toolsRoute);
app.use('/api/docTools', docToolsRoute);
app.use('/api/chats', chatRoute);
app.use('/api/chatGroups', chatGroupRoute);
app.use('/api/discipline', disciplineRoute);
app.use('/api/project', projectRoute);

//static files folder
app.use('/files',express.static('./files'))


app.use(globalErrHandler);
module.exports = app;