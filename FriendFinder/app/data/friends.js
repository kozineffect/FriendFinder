//Declaring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = [{
        "name": "Johnny Fairbanks",
        "photo": "https://i.ytimg.com/vi/0f1VVhdKaXA/maxresdefault.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Walter White",
        "photo": "http://media.salon.com/2013/09/breaking_bad_people2.jpg",
        "scores": [
            5,
            4,
            3,
            3,
            4,
            1,
            4,
            5,
            4,
            1
        ]
    },
    {
        "name": "Donald Trump",
        "photo": "http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1190/5/1195843.jpg",
        "scores": [
            1,
            4,
            5,
            1,
            5,
            1,
            1,
            1,
            3,
            5
        ]
    },
    {
        "name": "Jane Withers",
        "photo": "https://s-media-cache-ak0.pinimg.com/736x/2f/a0/6f/2fa06f54cedda213d6b1aefae26e3c3c.jpg",
        "scores": [
            5,
            3,
            3,
            4,
            5,
            2,
            1,
            3,
            5,
            3
        ]
    },
    {
        "name": "Emma Forsberg",
        "photo": "https://b-i.forbesimg.com/glassheel/files/2013/09/15243072_m.jpg",
        "scores": [
            5,
            3,
            3,
            2,
            4,
            3,
            5,
            2,
            4,
            1
        ]
    },
    {
        "name": "Theodore Fiddle",
        "photo": "https://ichef.bbci.co.uk/news/660/media/images/81032000/jpg/_81032707_lonely1_thinkstock.jpg",
        "scores": [
            3,
            1,
            1,
            3,
            1,
            5,
            5,
            3,
            4,
            1
        ]
    },
    {
        "name": "Nichole Breyer",
        "photo": "http://static6.businessinsider.com/image/51cdf71aeab8ea6b6000000a/10-real-people-who-are-winning-their-fight-with-debt.jpg",
        "scores": [
            4,
            5,
            5,
            4,
            5,
            1,
            3,
            1,
            4,
            5
        ]
    },
    {
        "name": "Steve McDaniel",
        "photo": "http://www.spring.org.uk/images/psychopath.jpg",
        "scores": [
            5,
            5,
            4,
            4,
            5,
            4,
            1,
            1,
            4,
            3
        ]
    },
    {
        "name": "Victor Stevens",
        "photo": "https://i.ytimg.com/vi/eKfvkIAdyAY/maxresdefault.jpg",
        "scores": [
            1,
            5,
            4,
            4,
            5,
            5,
            1,
            2,
            5,
            3
        ]
    },
    {
        "name": "Britney Adams",
        "photo": "http://www.barnesandnoble.com/blog/barnesy/wp-content/uploads/2013/10/girlbookstore.jpg",
        "scores": [
            5,
            5,
            2,
            5,
            5,
            5,
            5,
            3,
            5,
            1
        ]
    }
];

module.exports = friends;