const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
    let userDetails = req.body
    let userCreated = await userModel.create(userDetails)
    res.send({data: userCreated})
}

// Login + generate JWT token
const login = async function (req, res) {
    userName = req.body.name
    userPassword = req.body.password

    let user = await userModel.findOne({name: userName, password: userPassword, isDeleted: false})
    if(user) {
        const generatedToken = jwt.sign({userId: user._id}, "radium-secret")
        res.header('x-auth-token',generatedToken )


        res.send({status: true, data: user._id})
    } else {
        res.send({status: false, message: 'Invalid credentials'})
    }
}

const getDetails = async function (req, res) {
    let userId = req.params.userId
    let userDetails = await userModel.findOne({_id: userId, isDeleted: false})
    if(userDetails) {
        res.send({status: true, data: userDetails})
    } else {
        res.send({status: false, message: 'User not found'})
    }
}

const updateUser = async function (req, res) {
    let userId = req.params.userId
    let newEmail = req.body.email
    let user = await userModel.findOneAndUpdate({_id: userId}, {email: newEmail}, {new: true})
    if(user) {
        res.send({status: true, data: user})
    } else {
        res.send({status: false, message: 'No such user exist'})
    }
}

module.exports.createUser = createUser
module.exports.login = login
module.exports.getDetails = getDetails
module.exports.updateUser = updateUser