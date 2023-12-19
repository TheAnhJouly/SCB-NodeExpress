const express = require('express')
const router = express.Router() 
const userController = require('../../controllers/UserController')


router.get('/', userController.getAll)

router.post('/',userController.create) // gọi hàm từ file UserController vào

router.put('/:id', userController.update)

router.delete('/:id', userController.delete)


module.exports = router