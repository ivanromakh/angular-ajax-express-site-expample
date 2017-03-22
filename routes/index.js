var express = require('express');
var passport = require('passport');
var path = require('path')
var Account = require('../models/account');
var router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

module.exports = router;
