// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3030;


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// set up listener
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
})