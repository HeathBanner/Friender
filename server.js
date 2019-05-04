var express = require('express');
var fs = require('fs');
var path = require('path');

var routes = require('./htmlRoutes');
var api = require('./apiRoutes.js');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var friends = [
    {
        name: 'Brody',
        photo: 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-03-27-16-45/sekiro_boss_guide_walkthrough1.jpg',
        scores: [
            5,
            2,
            3,
            2,
            4,
            5,
            2,
            4,
            2,
            5
        ]
    },
    {
        name: 'Stan',
        photo: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Masters_of_the_universe.jpg',
        scores: [
            1,
            4,
            3,
            5,
            2,
            4,
            1,
            2,
            4,
            4
        ]
    }
];

routes.home(app);

routes.survey(app);

api.get(app, friends);

api.post(app, friends);

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});