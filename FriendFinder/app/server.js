//Declaring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlroutes = require('./routing/htmlroutes.js');

//Setting up the express app
var app = express();
var PORT = 3000;
require("./routing/apiroutes.js")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
app.use('/', htmlroutes);

// Starts the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});