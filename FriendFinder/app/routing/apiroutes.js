//Declaring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");
var score = 0;
var score_array = [];
module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

    app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    for (var i = 0; i < friends.length; i++)
    {
      for (var x = 0; x < 10; x++)
      {
        score+=friends[i].scores[x];
      }
      score_array.push(score);
      score = 0;
    }
    
  });

};