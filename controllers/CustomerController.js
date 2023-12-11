class CustomerController{
    
    create = (req, res, next) => { 
        try {
            const {customerName, password} = req.body 
            res.status(200).json({
                    customerName,
                    password
                })  
        } catch (error) { 
            throw error;
        }
    }

    get = (req, res, next) => {
        try {
            const {page,sort} = req.query;
            res.status(200).json({msg : `Get customers ${page,sort}`}) 
        } catch (error) { 
            throw error;
        }
    }

    put = (req, res, next) => {
        try {
            const {newCustomername, newPassword} = req.body 
            res.status(200).json({
                newCustomername,
                newPassword
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

module.exports = new CustomerController();