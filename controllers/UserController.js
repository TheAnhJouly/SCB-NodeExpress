const UserService = require("../services/UserService");

class UserController{
    //Cac ham ma ta xu ly (arrow func)
    create = async (req, res, next) => { // xử lý cả lỗi nữa > try catch 
        try {
            const {username, email,phone,age} = req.body
            //Goi den tang service 
            let data = {
                username, email,phone,age
            }
            const user = await UserService.create(data) // chạy xong lệnh thì ms đi tiếp code ở dưới -> await 
            
            res.status(200).json({
                user 
            })  
        } catch (error) { // xay ra loi se ... , res cho postman/client
            throw error;
        }
    }

    getAll = async (req, res, next) => {
        try {
            //Gọi đến file Service 
            const users = await UserService.getAll() 
            res.status(200).json({
                users // 1 mảng json 
            })  
        } catch (error) { 
            throw error;
        }
    }

    update = async (req, res, next) => {
        try {
            const {username, email,phone,age} = req.body
            const {id} = req.params;
            //Goi den tang service 
            let data = {
                username, email,phone,age
            }
            const result = await UserService.update(id,data) // dựa vào id cập nhật cho ai 
            if(result){
                res.status(200).json({'msg': 'Updated'})  
            }else{
                throw new Error('Update fail')
            }
            
        }  catch (error) { 
            throw error;
        }
    }

    delete = async (req, res, next) => {
        try {
            const {id} = req.params
            //Goi den tang service 
            const result = await UserService.delete(id) // dựa vào id xóa ai 
            if(result){
                res.status(200).json({'msg': 'deleted'})  
            }else{
                throw new Error('Delete fail')
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new UserController();