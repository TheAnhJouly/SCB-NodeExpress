class ProductController{
    
    create = (req, res, next) => { 
        try {
            const {productName} = req.body 
            abc() 
            res.status(200).json({
                    productName
            })   
        } catch (error) { 
            throw error;
        }
    }

    get = (req, res, next) => {
        try {
            const {page,sort} = req.query;
            res.status(200).json({msg : `Get products ${page,sort}`})
        } catch (error) { 
            throw error;
        }
    }

    put = (req, res, next) => {
        try {
            const {newProductname} = req.body 
            res.status(200).json({
                newProductname,
            }) 
        } catch (error) { 
            throw error;
        }
    }

    delete = (req, res, next) => {
        try {
            let id = req.params.id
            res.status(200).json({
                msg : `Delete ${id}`
            }) 
        } catch (error) { 
            throw error;
        }
    }

}

module.exports = new ProductController();