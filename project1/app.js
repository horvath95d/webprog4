var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routs = require('./routs/routs');

app.use(bodyParser.json());

app.use(express.static('assets'));

app.use('/', routs);
app.listen(8080);