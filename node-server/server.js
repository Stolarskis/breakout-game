var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('../breakout-game/dist'))

// viewed at http://localhost:8080
// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     //res.sendFile(path.join(__dirname ,  'dist'));
//     //res.sendFile(path.join(__dirname + '/../breakout-game/dist/main.js'));
// });

app.listen(8080);