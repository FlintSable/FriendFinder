// not routing

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/survey', function(req, res, next) {

	
    surveyData = {
        title: 'Survey',
        message: 'Find a friend',
        digits: ['choose your option',1, 2, 3, 4, 5]
    };

    res.render('survey', surveyData);
});
module.exports = router;
