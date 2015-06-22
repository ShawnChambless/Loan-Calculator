'use strict';
var express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));


app.get('/interest_rate', function(req, res) {
    res.json(Math.random()*2)/1000;
});





app.listen(8080, function() {
    console.log('Listening!!!');
});
