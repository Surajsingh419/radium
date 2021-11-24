const jwt = require('jsonwebtoken')

const authenticate = function(req, res, next){
    let authToken = req.headers['x-auth-token']

    if(!authToken) {
        res.send({message: 'Mandatory authentication header missing'})
    } else {
        let decodedToken = jwt.verify(authToken, 'radium-secret')
        if(decodedToken) {
            next()
        } else {
            res.send({message: 'The authentication token is invalid'})
        }
    }
}

module.exports.authenticate = authenticate