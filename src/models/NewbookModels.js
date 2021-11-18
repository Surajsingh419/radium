const mongoose = require('mongoose')

const Book2Schema = new mongoose.Schema({

    author_id: {
        type: Number,
        required: true
    },
    name: String,
    Price: Number,
    Rating: Number,
},

    { timestamps: true })



module.exports = mongoose.model('book2', Book2Schema)