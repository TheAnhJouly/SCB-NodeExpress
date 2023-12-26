const express = require('express')
const router = express.Router() // chỉ phục vụ mỗi file này
const productRouter = require('./productRouter')
const authProductRouter = require("../routes2/authProductRoutes")

router.use('/products',productRouter)
router.use('/authProducts',authProductRouter)

module.exports = router // xuất ra thì file khác ms import vào đc