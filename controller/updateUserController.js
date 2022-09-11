const express = require('express');
const UpdateUserInfo = require('../models/signupModel');
const catchAsync = require('../utils/catchAsync');

const router =express.Router();


exports.updateUserInfo = catchAsync(async (req, res, next) => {

    const userId = req.params.userId
    const updateUserInf = await UpdateUserInfo.update(req.body,{where: {userId: userId}})
    res.status(200).send("User information updated!")

})
exports.updateUser = catchAsync(async(req, res, next)=>{
    const updateUserInf  = await SignupModel.findOne()
})