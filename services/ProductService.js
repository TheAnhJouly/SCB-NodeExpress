const Product = require("../models/Product");

class ProductService{
    
    create = async (dataProduct) => {
        try {
            const product = new Product(dataProduct);
            await product.save()
            return product;
        } catch (error) {
            throw error;
        }
    }


    getAll = async () => { 
        try {
            const products = await Product.find();
            return products
        } catch (error) {
            throw error;
        }
    }

    update = async (id, data) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const result = await Product.updateOne({_id: id}, {productName: data.productName})//ts1 : dkien, ts2: cái ta muốn đổi 
            return true 
        } catch (error) {
            throw error;
        }
    }

    delete = async (id) => {
        try {
            //Xử lý các nghiệp vụ liên quan 
            // Gọi đến tầng model 
            const product = await Product.findById(id)
            
            await product.deleteOne();
            return true 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductService()