const express = require('express');
const authCustomerController = require('../../../controllers/AuthController');
const router = express.Router();

//username and password Định nghĩa router và gọi đến controller
router.post('/loginCustomer', authCustomerController.login);

module.exports = router 