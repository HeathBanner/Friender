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
            friends.push(newFriend);
            var friendScores = [];
            var winnerScore = 50;
            var winner = [];
            function FriendScore(name) {
                this.name = name
                this.score;
            };
        
            newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
            for (var index in newFriend.scores) {
                newFriend.scores[index] = parseInt(newFriend.scores[index])
            }
            for (var buddy in friends) {
                friendScores[buddy] = new FriendScore(friends[buddy].name)
                for (var num in friends[0].scores) {
                    
                    if(typeof friendScores[buddy].score == 'undefined') {
                        friendScores[buddy].score = friends[buddy].scores[num] % newFriend.scores[num]
                    } else {
                        friendScores[buddy].score += friends[buddy].scores[num] % newFriend.scores[num]
                    }
                }
                if (friendScores[buddy].score < winnerScore) {
                    winnerScore = friendScores[buddy].score;
                    winner.push(friendScores[buddy].name);
                    winner.push(newFriend.photo);
                }
            }
            res.json(winner);
            res.end();
        });
    }
};