var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/books', function(req, res, next){
  knex.select().from("book_info")
    .then(function(data) {
      // console.log(info);
      res.render('books', {id: data[0].id, bookName: data[0].book_title});
    });
});

router.post('/books/edit', function(req, res, next){
  res.send('Edit Book Page');

  res.render('editBook');
});

router.post('/books/delete', function(req, res, next){
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
