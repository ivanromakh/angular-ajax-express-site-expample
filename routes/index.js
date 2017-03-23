var express = require('express');
var passport = require('passport');
var path = require('path')
var User = require('../models/user');
var router = express.Router();

var views = __dirname + '/../views';


router.get('/', function (req, res) {
	
	res.sendFile(path.join(views + '/index.html'));
});

router.get('/reg', function (req, res){
    res.sendFile(path.join(views + '/regist.html'));
})

router.get('/auth', function (req, res){
	res.sendFile(path.join(views + '/auth.html'));
})

router.post('/authdata', function (req, res){

	var user = new User({login: req.body.log, password: req.body.pass});
	user.save(function (error, user, err) {
        if(error){
            if (error.name === 'MongoError' && error.code === 11000)
                res.send(JSON.stringify({success: false, error:'loginNotEvailable'}));
            else
        	    res.send(JSON.stringify({success: false, error:'error'}));
        }
        else
        	res.send(JSON.stringify({success: true, error: false}));
    });
});



module.exports = router;

	/*
	User.find({req.body.log: '111'}, function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    });*/