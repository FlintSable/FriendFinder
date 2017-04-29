var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // the seccond paramter could be a function
    indexData = {
        title: 'Friend Finder',
        message: 'And to the Jungle'
    };
    res.render('index', indexData);
});


// create post requests from the client to test
router.post('/', function(req, res, next) {
    // post encodes
    // find out what that means
    // action='/'
    // html has the method='POST'
    // action="/?method=PUT"

    res.redirect('/');
    res.json();
});


router.get('/survey', function(req, res, next) {
	surveyData = {
		title: 'Date Survey',
		message: 'ONLINE DATING',
		digits: [1, 2, 3, 4, 5]
	};

    res.render('survey', surveyData);
});


router.get('/results', function(req, res, next){


});

module.exports = router;
