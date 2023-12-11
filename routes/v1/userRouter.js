const express = require('express')
const router = express.Router() 
const userController = require('../../controllers/UserController')


router.get('/', userController.get)

router.post('/',userController.create) // gọi hàm từ file UserController vào

router.put('/', userController.put)

router.delete('/:id', userController.delete)


module.exports = router