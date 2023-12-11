const express = require('express')
const router = express.Router() // chỉ phục vụ mỗi file này
const userRouter = require('./userRouter')

router.get('/status', (req,res) =>{
    res.status(200).json({msg : 'API are ready ! '})
})
router.use('/users',userRouter)

module.exports = router // xuất ra thì file khác ms import vào đc