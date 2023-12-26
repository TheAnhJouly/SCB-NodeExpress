const jwt = require("jsonwebtoken");

verifyToken =  (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    // nếu không có token  
    if (!token) {
        // sẽ chặn k cho gọi API và gửi ra lỗi 401: k xác thực 
        return res.status(401).send({error: true, message: "Token không được cung cấp"});
    }

    //khi đã có token thì replace Bearer, Bearer ở trong postman 
    //Phần Login user/create: Authorization -> Type:  Bearer token và vứt token đang có vaof 
    //Khi sử dụng token này thì luôn kèm từ Bearer ở trước + chuỗi token 
    //Khi gửi lên thì bắt buộc phải replace ( bỏ đoạn Bearer đi ) lấy chuỗi token để xác thực 
    token = token.replace(/^Bearer\s+/, "");

    jwt.verify(token, process.env.SECRET_KEY_JWT, async (err, decoded) => {
        if (err) {
            return res.status(401).send({error: true, message: "Từ chối truy cập"});
        }
        // nếu xác thực thành công, biến decoded có thông tin của username 
        // Thông tin username ở lúc mã hóa kí tạo ra cái đó 
		// và khi verify sẽ có username ở đây nhờ biến decoded 
        req.username = decoded.username;
        next();
    });
};


module.exports = verifyToken;