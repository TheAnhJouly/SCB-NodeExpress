const express = require('express')
const router = express.Router() // chỉ phục vụ mỗi file này
const userRouter = require('./userRouter')
const authRouter = require("../v1/authRoutes")

router.get('/status', (req,res) =>{
    res.status(200).json({msg : 'API are ready ! '})
})
router.use('/users',userRouter)
router.use('/auth',authRouter)

module.exports = router // xuất ra thì file khác ms import vào đc