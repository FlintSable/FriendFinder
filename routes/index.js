var express = require('express');
var router = express.Router();
var poke = require('../api/data.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    // the seccond paramter could be a function
    indexData = {
        title: 'JUNGLE',
        message: 'the Jungle'
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



router.get('/results', function(req, res, next) {


});

router.get('/api/data', function(req, res, next) {

});

router.get('/api/new-data', function(req, res, next) {

});

// router.get('/survey', function(req, res, next) {

    
//     surveyData = {
//         title: 'Survey',
//         message: 'Find a friend',
//         digits: [1, 2, 3, 4, 5]
//     };

//     res.render('survey', surveyData);
// });



module.exports = router;
