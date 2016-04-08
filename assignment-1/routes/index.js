var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/pets', function(req, res, next) {
  Pet.find(function(err, pets){
    if(err){ return next(err); }
    res.json(pets);
  });
});
