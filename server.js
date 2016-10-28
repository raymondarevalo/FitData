var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));
/*
app.get('/', function(req, res){
    res.send("hahaha");
});
*/

app.listen(3000, function() {
    console.log("HEREERERE");
});
