const express = require('express')
const router = express.Router() // chỉ phục vụ mỗi file này
const customerRouter = require('./customerRouter')
const authCustomerRouter = require("../routes1/authCustomerRoutes")

router.use('/customers',customerRouter)
router.use('/authCustomers',authCustomerRouter)

module.exports = router // xuất ra thì file khác ms import vào đc