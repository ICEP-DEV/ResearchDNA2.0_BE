//CRUD - Create, Read, Update Delete
const SignupModel = require('../models/signupModel');
const catchAsync = require('../utils/catchAsync');
const User = SignupModel.user

exports.createSignup = catchAsync(async (req, res, next) => {
    const signup = await SignupModel.create(req.body);

 //Add user

  res.status(200).json({
    status: "success",
    message: "user added",
    signup
  });
});
exports.getSignup = catchAsync(async(req, res, next)=>{
  const signup  = await SignupModel.findAll()
})
