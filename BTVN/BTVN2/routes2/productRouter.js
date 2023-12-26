const express = require('express')
const router = express.Router() //gọi đến function Router chỉ phục vụ mỗi file này
const ProductController = require('../../../controllers/ProductController')
const verifyToken = require('../../../middlewares/VerifyToken')
const Joi = require('joi');
 
const customerValidationSchema = Joi.object({
    productName: Joi.string().alphanum().required().messages({
      'any.required': `"productName" không được bỏ trống !`
    }),
    manufacturer: Joi.string().required(),
    productionYear: Joi.string().required(),
    
    quantity:Joi.number()
        .integer()
        .min(1)
        .required(),
        price: Joi.number().required(),
  });
  
  // Middleware kiểm tra và xác thực dữ liệu
  const validateCustomerData = (req, res, next) => {
      const { error, value } = customerValidationSchema.validate(req.body, {abortEarly: false}); 
      console.log(error)
      if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
      }
    
      req.body = value;
      next();
  };

router.get('/', ProductController.getAll)

router.post('/',validateCustomerData,verifyToken,ProductController.create)

router.put('/:id', ProductController.update)

router.delete('/:id', ProductController.delete)

module.exports = router // xuất ra thì file khác ms import vào đc