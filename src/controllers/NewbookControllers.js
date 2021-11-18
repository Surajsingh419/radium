const Book2Model = require("../models/NewbookModels")
const authorMdal = require("../models/authorsModal")
const mongoose = require("mongoose")

const createBook2 = async function (req, res) {
    const Book2 = req.body
    let savedBook2 = await Book2Model.create(Book2)
    res.send({ msg: savedBook2 })
}

const priceUpdate = async function (req, res) {
    let priceUpdateBook = await authorMdal.findOneAndUpdate({ name: "Two states" }, { "price": 100 })
    res.send({ msg: priceUpdateBook })
}

const findByName = async function (req, res) {
    let findName = await Book2Model.find({ sales: { $in: [50, 100] } }).select({ name: 1, _id: 0 })
    res.send({ msg: findName })
}


const getBookByAuthorName = async function (req, res) {
    let authorDetaels = await authorMdal.findOne({ author_name: "Chetan Bhagat" })
    let authorId = authorDetaels.author_id
    let authorsBook = await Book2Model.find({ author_id: authorId }).select({ name: 1, _id: 0 })
    res.send({ msg: authorsBook })
}


const FindByName = async function (req, res) {
    let FindName = await Book2Model.find({ sales: { $in: [50, 100,] } }).select({ Name: 1 })
    res.send({ msg: FindName })
}

module.exports.getBookByAuthorName = getBookByAuthorName
module.exports.createBook2 = createBook2
module.exports.priceUpdate = priceUpdate
module.exports.FindByName = FindByName
module.exports.findByName=findByName