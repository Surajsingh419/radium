const mongoose = require('mongoose')
//const ObjectId = mongoose.Schema.Types.ObjectId

const coinSchema = new mongoose.Schema({

    symbol: {
        type: String
        // unique:true
    },
    name: { type: String }, //Unqiue:true

    marketCapUsd: { type: String },

    priceUsd: { type: String }


}, { timestamps: true })

module.exports = mongoose.model('Coin', coinSchema)