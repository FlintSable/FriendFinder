// dependencies express, router, burger obj which has methods
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = express.Router();
const burger = require('../models/burger');

// redirect to the /burgers route
router.get('/', function(req, res){
	res.redirect('/burgers');
});

// communicate with get requests from client
router.get('/burgers', function(req, res){
	// use method selectAll from burger obj
	burger.selectAll(function(data){
		var viewObj = {
			burgers: data
		};
		// receive that data from model and put into view
		res.render('index', viewObj);
	});
});

// post can add
router.post('/burgers/create', function(req, res){
	// again using the method in the model called insertOne
	burger.insertOne('burger_name', req.body.name, function(){
		// once insert has completed take user back to /burgers
		res.redirect('/burgers');
	});
});

// update route
router.put('/burgers/update/devour/:id', function(req, res){
	burger.updateOne('burgers', 'devoured', req.params.id, function(){
		res.redirect('/burgers');
	});
});


router.delete('/burgers/delete/:id', function(req, res){
	burger.deleteOne('burgers', req.params.id, function(){
		res.redirect('/burgers');
	});
});

module.exports = router;