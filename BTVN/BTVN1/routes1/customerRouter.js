const express = require('express')
const router = express.Router() //gọi đến function Router chỉ phục vụ mỗi file này
const CustomerController = require('../../../controllers/CustomerController')
const verifyToken = require('../../../middlewares/VerifyToken')
const Joi = require('joi');

const customerValidationSchema = Joi.object({
    fullName: Joi.string().alphanum().required().messages({
      'any.required': `"fullName" không được bỏ trống !`
    }),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    address: Joi.string().required(),
    DoB:Joi.number()
        .integer()
        .min(1900)
        .max(2010),
    gender: Joi.string().required(),
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

router.post('/',validateCustomerData,verifyToken,CustomerController.create)

router.get('/', CustomerController.getAll)

router.put('/:id', CustomerController.update)

router.delete('/:id', CustomerController.delete)


module.exports = router // xuất ra thì file khác ms import vào đc