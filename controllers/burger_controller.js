var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var viewObj = {
			burgers: data
		};
		res.render('index', viewObj);
	});
});

module.exports = router;