const express = require('express')
const router = express.Router() //gọi đến function Router chỉ phục vụ mỗi file này
const CustomerController = require('../../../controllers/CustomerController')

router.post('/', CustomerController.create)

router.get('/', CustomerController.getAll)

router.put('/:id', CustomerController.update)

router.delete('/:id', CustomerController.delete)


module.exports = router // xuất ra thì file khác ms import vào đc