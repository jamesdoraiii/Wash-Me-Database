require('dotenv').config();
var express = require('express');
var app = express(); 

var user = require('./controllers/usercontroller');
var contact = require('./controllers/contactcontroller');
var review = require('./controllers/reviewcontroller');
var detailer = require('./controllers/detailercontroller');

var sequelize = require('./db');
var bodyParser = require('body-parser');

app.use(require('./middleware/headers'));


sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(bodyParser.json());

//setup routes
app.use('/user', user)


/*************************
 * PROTECTED ROUTES BELOW
**************************/

app.use(require('./middleware/validate-session'));
app.use('/contact', contact);
app.use('/review', review);
app.use('/detailer', detailer);

app.listen(process.env.PORT, function(){
    console.log(`App is listening on ${process.env.PORT}.`) 
});