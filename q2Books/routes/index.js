var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/books', function(req, res, next){
  res.send('Book Page');
  res.render('books');
});

router.get('/books/edit', function(req, res, next){
  res.send('Edit Book Page');

  res.render('editBook');
});

router.get('/books/delete', function(req, res, next){
  res.send('Delete Book Page');

  res.render('deleteBook');
});

router.get('/author', function(req, res, next){
  res.send('Author Page');

  res.render('author');
});

router.get('/author/edit', function(req, res, next){
  res.send('Edit Author Page');

  res.render('editAuthor');
});

router.get('/author/delete', function(req, res, next) {
  res.send('Delete Author Page');

  res.render('deleteAuthor');
});


module.exports = router;
