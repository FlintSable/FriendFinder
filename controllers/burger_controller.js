var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.ger('/', function(req, res){
	burger.selectAll(function(data){
		var viewObj = {
			burgers = data
		};
		res.render('index', viewObj);
	});
});

module.exports = router;