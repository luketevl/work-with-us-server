'use strict';

// Creating base routes
const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');

// Creating APP
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// STATIC FILES
app.use(express.static(path.join(__dirname, 'uploads/files/')));

// Allow CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};
app.use(allowCrossDomain);

const route = require('./js/routes/route.js')(app);

app.set('port', process.env.PORT | 3002);

app.set('DOMAIN_VALID', 'tagplus.com.br');

// Creating and Listening the SERVER
app.listen(app.get('port'), () => console.log('Listen http://localhost:'+app.get('port')));
