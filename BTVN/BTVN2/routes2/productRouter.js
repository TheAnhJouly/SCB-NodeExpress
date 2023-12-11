const express = require('express')
const router = express.Router() //gọi đến function Router chỉ phục vụ mỗi file này
const ProductController = require('../../../controllers/ProductController')

router.get('/', ProductController.get)

router.post('/', ProductController.create)

router.put('/', ProductController.put)

router.delete('/:id', ProductController.delete)

module.exports = router // xuất ra thì file khác ms import vào đc