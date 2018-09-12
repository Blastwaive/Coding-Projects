//require EXPRESS
var express = require('express');

//create router object
var router = express.Router();

//export Router as module
module.exports = router;

// route for Homepage
router.get('/', function(req, res) {
  res.send('hello world!');
});

//Route for about page
router.get('/about', function(req, res) {
  res.send('hello world, I am the about page');
});

//Route for contact page


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contacts' });
});

//router.get('/contact.html');
//router.post('/contact.html');
