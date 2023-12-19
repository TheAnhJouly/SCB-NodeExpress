const CustomerService = require("../services/CustomerService");

class CustomerController{
    
    create = async (req, res, next) => { 
        try {
            const {fullName, phone , email , address ,DoB,gender} = req.body 
            let data = {
                fullName, phone , email , address ,DoB,gender
            }
            const customer = await CustomerService.create(data)
            
            res.status(200).json({
                customer
            })  
        } catch (error) { 
            throw error;
        }
    }

    getAll = async (req, res, next) => {
        try {
            const customers = await CustomerService.getAll() 
            res.status(200).json({
                customers 
            })
        } catch (error) { 
            throw error;
        }
    }

    update = async (req, res, next) => {
        try {
            const {fullName, phone , email , address ,DoB,gender} = req.body
            const {id} = req.params;
            //Goi den tang service 
            let data = {
                fullName, phone , email , address ,DoB,gender
            }
            const result = await CustomerService.update(id,data) // dựa vào id cập nhật cho ai 
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
            const result = await CustomerService.delete(id) // dựa vào id xóa ai 
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

module.exports = new CustomerController();