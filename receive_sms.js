const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql')

//mysql
const pool = mysql.createPool({

    connectionLimpopo: 10,
    host: 'localhost',
    user:'root',
    password:'',
    database:'chatbox'

})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, response, next) {
    response.contentType('application/xml');
    next();
});
app.set('port', (process.env.PORT || 5000));
app.all('/receive_sms/', function (request, response) {
    let from_number = request.body.From || request.query.From;
    let to_number = request.body.To || request.query.To;
    let message = request.body.message || request.query.message;

    //Print the message
    console.log('Message received - From: ' + from_number + ', To: ' + to_number + ', message: ' +message);
});
app.listen(app.get('port'), function () {

    console.log('Node app is running on port', app.get('port'));

});