const express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = 3000;

const API_BTVN1 = require('./BTVN/BTVN1/routes1')
const API_BTVN2 = require('./BTVN/BTVN2/routes2')
const API_V1 = require('./routes/v1') // chỉ trỏ như này sẽ vào file index.js
const errorHandle = require('./middlewares/errorHandle');
const db = require('./configs/mongodb');

//Connect db 
db.connect();

//Đang xử dụng express router 
app.get('/',(req,res) =>{ 
    res.send('<h3>Hello SCB Class</h3>')
}) 

//body-parser , config 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//sử dụng app.use để sử dụng routers trong sever
app.use('/v1',API_V1)
app.use(errorHandle)

app.use('/BTVN1',API_BTVN1)
app.use('/BTVN2',API_BTVN2)

app.listen(port, ()=>{ 
    console.log(`Sever is running at http://localhost:${port}`)
})