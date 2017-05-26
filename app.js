var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/routes');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:32768/ctc'); // connect to our database


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);



module.exports = app;
