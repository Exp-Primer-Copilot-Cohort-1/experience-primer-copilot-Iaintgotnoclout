// Create web server
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');

var comments = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var newComment = {
        id: Date.now(),