//Declaring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();


router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../survey.html"));
});

module.exports = router;