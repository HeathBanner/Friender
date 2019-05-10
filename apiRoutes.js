var express = require('express');
var path = require('path');
var app = express();

module.exports = {
    get: function(app, friends) {
        app.get("/api/friends", function(req, res) {
            res.send(friends);
        });        
    },
    post: function(app, friends) {
        app.post("/api/friends", function(req, res) {
            var newFriend = req.body;
            var friendScores = [];
            var newFriendScore;
            var winnerLog = [];
            newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
            
             for (var index in newFriend.scores) {
                if(typeof newFriendScore == 'undefined') {
                    newFriendScore = parseInt(newFriend.scores[index]);
                } else {
                    newFriendScore += parseInt(newFriend.scores[index])
                }
            }
            for (var buddy in friends) {
                var score = 0
                for (var num in friends[0].scores) {
                    score += parseInt(friends[buddy].scores[num]);
                }
                friendScores.push(score);
                winnerLog.push(Math.abs(newFriendScore - friendScores[buddy]));
            }
            var winnerVal = Math.min.apply(null, winnerLog);
            var winnerIndex = winnerLog.indexOf(winnerVal);
            var winner = {
                name: friends[winnerIndex].name,
                photo: friends[winnerIndex].photo
            };
            friends.push(newFriend);
            res.json(winner);
            res.end();
        });
    }
};