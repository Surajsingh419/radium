const authorModel = require("../models/authorModel");
const bookModel = require('../models/bookModel')

const createBook = async function (req, res) {
  let data = req.body;
  let authorId = req.body.author
  let authorFromRequest = await authorModel.findById(authorId)
  if(authorFromRequest) {
    let bookCreated = await bookModel.create(data)
    res.send({data: bookCreated})
  } else {
    res.send('The author Id provided is not valid.')
  } 
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author')
  res.send(allBooks)
}

module.exports.createBook = createBook;
module.exports.getBooks = getBooks