const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

//Public apis : no authentication is required because these requests are sent when a user isn't logged in yet
router.post('/users', userController.createUser);
router.post('/login', userController.login)

//Restricted apis : must be authenticated(check if the request is sent for a logged-in user) before the apis are allowed to be accessed
router.get('/users/:userId', authMiddleware.authenticate, userController.getDetails)
router.put('/users/:userId', authMiddleware.authenticate, userController.updateUser)

module.exports = router;