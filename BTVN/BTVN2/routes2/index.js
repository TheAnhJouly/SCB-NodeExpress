const express = require('express')
const router = express.Router() // chỉ phục vụ mỗi file này
const productRouter = require('./productRouter')


router.use('/products',productRouter)

module.exports = router // xuất ra thì file khác ms import vào đc