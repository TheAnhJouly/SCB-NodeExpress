class UserController{
    //Cac ham ma ta xu ly (arrow func)
    create = (req, res, next) => { // xử lý cả lỗi nữa > try catch 
        try {
            const {username, password} = req.body
            res.status(200).json({
                username,
                password
            })  
        } catch (error) { // xay ra loi se ... , res cho postman/client
            throw error;
        }
    }

    get = (req, res, next) => {
        try {
            const {page,sort} = req.query;
            res.status(200).json({msg : `Get users ${page,sort}`})
        } catch (error) { // xay ra loi se ... , res cho postman/client
            throw error;
        }
    }

    put = (req, res, next) => {
        try {
            const {newUsername, newPassword} = req.body 
            res.status(200).json({
                newUsername,
                newPassword
            })  
        } catch (error) { // xay ra loi se ... , res cho postman/client
            throw error;
        }
    }

    delete = (req, res, next) => {
        try {
            let id = req.params.id
            res.status(200).json({
                msg : `Delete ${id}`
            })   
        } catch (error) { // xay ra loi se ... , res cho postman/client
            throw error;
        }
    }

}

module.exports = new UserController();