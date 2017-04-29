// not routing

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/survey', function(req, res, next) {
  res.render('survey', { title: 'Date Survey' , message: 'ONLINE DATING'});
});

module.exports = router;
