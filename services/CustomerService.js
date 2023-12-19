const Customer = require("../models/Customer");

class CustomerService{
    
    create = async (dataCustomer) => {
        try {
            const customer = new Customer(dataCustomer);
            await customer.save()
            return customer;
        } catch (error) {
            throw error;
        }
    }


    getAll = async () => { 
        try {
            const cusomers = await Customer.find();
            return cusomers
        } catch (error) {
            throw error;
        }
    }

    update = async (id, data) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const result = await Customer.updateOne({_id: id}, {fullName: data.fullName})//ts1 : dkien, ts2: cái ta muốn đổi 
            return true 
        } catch (error) {
            throw error;
        }
    }

    delete = async (id) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const customer = await Customer.findById(id)
            
            await customer.deleteOne();
            return true 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerService()