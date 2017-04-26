var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing Express' , message: 'And to the Jungle'});
});

router.get('/survey', function(req, res, next) {
  res.render('survey', { title: 'Date Survey' , message: 'ONLINE DATING'});
});


module.exports = router;
