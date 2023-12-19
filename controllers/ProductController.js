const ProductService = require("../services/ProductService")

class ProductController{
    
    create = async (req, res, next) => { 
        try {
            const {productName, manufacturer , productionYear , quantity ,price} = req.body 
            let data = {
                productName, manufacturer , productionYear , quantity ,price
            }
            const product = await ProductService.create(data)
            
            res.status(200).json({
                product
            })  
        } catch (error) { 
            throw error;
        }
    }

    getAll = async (req, res, next) => {
        try {
            const products = await ProductService.getAll() 
            res.status(200).json({
                products 
            })
        } catch (error) { 
            throw error;
        }
    }


    update = async (req, res, next) => {
        try {
            const {productName, manufacturer , productionYear , quantity ,price} = req.body
            const {id} = req.params;
            //Goi den tang service 
            let data = {
                productName, manufacturer , productionYear , quantity ,price
            }
            const result = await ProductService.update(id,data) // dựa vào id cập nhật cho ai 
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
            const result = await ProductService.delete(id) // dựa vào id xóa ai 
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

module.exports = new ProductController();