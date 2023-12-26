// src/controllers/AuthController

const jwt = require('jsonwebtoken');
class AuthController {

    login = async (req, res, next) =>{ 
        try {
            
            const {username, password} = req.body;
            
            // check username and password in database 
            // if true (tồn tại user) => create jwt token
            //K tôn tại user => trả về lỗi user not found 
            
            //khi đã check có username + passwword -> tạo ra token
            // dùng hàm sign của jwt -> tạo ra 1 token và trả về cho client 
            const token = jwt.sign({ username }, process.env.SECRET_KEY_JWT);
                                    //payload   , private key, lưu ý phải viết vào file env để bảo mật
            
            //response về 
            res.status(200).json({
                token: token
            })

        } catch (error) {
            throw error 
        }
    }
    
}

module.exports = new AuthController();