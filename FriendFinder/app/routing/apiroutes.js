//Declaring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");

app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
       return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});