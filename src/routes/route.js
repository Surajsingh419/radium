const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController')
const bookController = require('../controllers/bookController')

// Author api
router.post('/authors', authorController.createAuthor)

// Book api
router.post('/books', bookController.createBook)
router.get('/books', bookController.getBooks)

module.exports = router;