const express = require('express')
const router = express.Router() //gọi đến function Router chỉ phục vụ mỗi file này
const ProductController = require('../../../controllers/ProductController')

router.get('/', ProductController.getAll)

router.post('/', ProductController.create)

router.put('/:id', ProductController.update)

router.delete('/:id', ProductController.delete)

module.exports = router // xuất ra thì file khác ms import vào đc