const express = require('express')
const router = express.Router() // chỉ phục vụ mỗi file này
const customerRouter = require('./customerRouter')


router.use('/customers',customerRouter)

module.exports = router // xuất ra thì file khác ms import vào đc