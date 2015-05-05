var express = require('express');
var app = express();
var events = require('./models/event.schema');
var user = require('./models/user.schema');

mongoose.connect('mongodb://localhost/mydatabase');

app.listen(3000);
console.log('listening on port 3000');
