//CRUD - Create, Read, Update Delete
const loginModel = require('../models/loginModel');
const catchAsync = require('../utils/catchAsync');

exports.createlogin = catchAsync(async (req, res, next) => {
    const login = await loginModel.create(req.body);

 // user LOGIN

  res.status(200).json({
    status: "success",
    message: "user login Successful",
    login
  });
});

exports.getSignup = catchAsync(async(req, res, next)=>{
    const login  = await loginModel.findAll()
})