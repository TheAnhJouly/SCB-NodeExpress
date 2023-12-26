const express = require('express');
const AuthController = require('../../controllers/AuthController');
const router = express.Router();

//username and password Định nghĩa router và gọi đến controller
router.post('/login', AuthController.login);

module.exports = router 