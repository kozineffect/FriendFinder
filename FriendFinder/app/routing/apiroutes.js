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

module.exports = function(app){

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

    app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    var user = req.body;
    for (var i = 0; i < friends.length; i++)
    {
      for (var x = 0; x < 10; x++)
      {
        score+=friends[i].scores[x];
      }
      score_array.push(score);
      score = 0;
    }
    for (var y = 0; y < 10; y++)
    {
      user_score+=parseInt(user.scores[y]);
    }
    console.log(user_score);
    console.log(score_array);
    for (var q = 0; q < score_array.length; q++)
    {
      if (user_score > score_array[q])
      {
        final_num.push(user_score - score_array[q]);
      }
      else 
      {
        final_num.push(score_array[q] - user_score);
      }
    }
        console.log(final_num);
    for (var s = 0; s < final_num.length; s++)
    {
      var minIdx = s;
    for(var  j = s+1; j < final_num.length; j++){
       if(final_num[j]<final_num[minIdx]){
          minIdx = j;
       }
        temp = final_num[i];
   final_num[i] = final_num[minIdx];
   final_num[minIdx] = temp;
    }

  }
    console.log(final_num);
    console.log(minIdx);
  });

};