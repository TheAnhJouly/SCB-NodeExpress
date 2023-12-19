const User = require("../models/User");

class UserService{
    
    create = async (dataUser) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const user = new User(dataUser);
            await user.save()
            return user;
        } catch (error) {
            throw error;
        }
    }


    getAll = async () => { // lấy ra k cần phải tham số đầu vào, vì trong csdl có sẵn r
        try {
            //Gọi đến model 
            const users = await User.find(); // phương thức tìm tất cả thông tin trong user, thêm ts thì sẽ tìm nó ( dạng json ) trong mảng 
            return users
        } catch (error) {
            throw error;
        }
    }

    update = async (id, data) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const result = await User.updateOne({_id: id}, {username: data.username})//ts1 : dkien, ts2: cái ta muốn đổi 
            return true 
        } catch (error) {
            throw error;
        }
    }

    delete = async (id) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const user = await User.findById(id)
            
            await user.deleteOne();
            return true 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService()