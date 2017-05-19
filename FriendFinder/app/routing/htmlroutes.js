//Declaring dependencies
var express = require("express");
var path = require("path");
var router = express.Router();

// Routing function for the root page
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
});

// Routing funtion for the survey page
router.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "../survey.html"));
});

module.exports = router;