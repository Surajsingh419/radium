const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({

   author_id: {
      type: Number,
      required: true
   },
   author_name: {
      type: String,
      required: true
   },
   BookName: String,
   age: Number,
   Address: String,
},
// comment 1
   { timestamps: true })


module.exports = mongoose.model('author', authorSchema)