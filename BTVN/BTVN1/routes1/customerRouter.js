const express = require('express')
const router = express.Router() //gọi đến function Router chỉ phục vụ mỗi file này
const CustomerController = require('../../../controllers/CustomerController')

router.get('/', CustomerController.get)

router.post('/', CustomerController.create)

router.put('/', CustomerController.put)

router.delete('/:id', CustomerController.delete)


module.exports = router // xuất ra thì file khác ms import vào đc