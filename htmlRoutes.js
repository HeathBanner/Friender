var express = require('express');
var path = require('path');
var app = express();

module.exports = { 
    home: function(app){
            app.get("/", function(req, res) {
                console.log(req.body);
                res.sendFile(path.join(__dirname, "index.html"));
            })
            },
    survey: function(app){
                app.get("/survey", function(req, res) {
                    res.sendFile(path.join(__dirname, "survey.html"));
                })      
            }    
};