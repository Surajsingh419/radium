const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')
const appMiddleware = require('../middlewares/appMiddleware')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/users', appMiddleware.validateAppType, userController.createUser);
router.post('/products', productController.createProduct);
router.post('/orders', appMiddleware.validateAppType, orderController.createOrder);

module.exports = router; 