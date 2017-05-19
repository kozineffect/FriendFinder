//Declaring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");
var score = 0;
var score_array = [];
var final_num = [];
var user_score = 0;
var temp;
var indexTemp;
var minIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Exporting API Routes
module.exports = function (app) {

  // Load parsers for data for express
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({
    type: "application/vnd.api+json"
  }));

  // Returns the page of all friends in the API
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // Grabs user input and displays best match
  app.post("/api/friends", function (req, res) {
    var user = req.body;
    for (var i = 0; i < friends.length; i++) { // Tallies up all scores for all friends
      for (var x = 0; x < 10; x++) {
        score += friends[i].scores[x];
      }
      score_array.push(score);
      score = 0;
    }
    for (var y = 0; y < 10; y++) { // Tallies the user's total score
      user_score += parseInt(user.scores[y]);
    }
    for (var q = 0; q < score_array.length; q++) { // Subtracts the user and friends score to get the difference
      if (user_score > score_array[q]) {
        final_num.push(user_score - score_array[q]);
      } else {
        final_num.push(score_array[q] - user_score);
      }
    }

    // Takes the array of the difference between scores and sorts them with their index in the object
    var swapped;
    do {
      swapped = false;
      for (var i = 0; i < final_num.length - 1; i++) {
        if (final_num[i] > final_num[i + 1]) {
          var temp = final_num[i];
          indexTemp = minIdx[i];
          final_num[i] = final_num[i + 1];
          minIdx[i] = minIdx[i + 1];
          final_num[i + 1] = temp;
          minIdx[i + 1] = indexTemp;
          swapped = true;
        }
      }
    } while (swapped);
    var index = minIdx[0];

    // Returns the closest matched friend to survey html
    res.send(friends[index]);
  });

};