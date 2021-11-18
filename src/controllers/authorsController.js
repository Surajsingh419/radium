const AuthorModel= require("../models/authorsModal.js")
const mongoose  = require("mongoose")

const createAuthor = async function (req, res) {
    const Author= req.body
    let savedAuthor= await AuthorModel.create(Author)
        res.send({msg: savedAuthor})
         }  
const ChetanBhagat= async function (req, res) {
    let ChetanBhagatBook= await AuthorModel.find( { author_name: "Chetan Bhagat" }).select( { name: 1 } )
    res.send({msg: ChetanBhagatBook})
     }  

module.exports.createAuthor= createAuthor
module.exports.ChetanBhagat= ChetanBhagat