const express = require('express');
const authProductController = require('../../../controllers/AuthController');
const router = express.Router();

//username and password Định nghĩa router và gọi đến controller
router.post('/loginProduct', authProductController.login);

module.exports = router 