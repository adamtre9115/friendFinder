// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('app/public'));

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// set up listener
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
})