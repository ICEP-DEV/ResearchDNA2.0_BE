const express = require('express');
const GetUserInfo = require('../models/signupModel');
const catchAsync = require('../utils/catchAsync');

const router =express.Router();


exports.getUserInfo = catchAsync(async (req, res, next) => {

    const userId = req.params.userId
    const userInfo= await GetUserInfo.findOne({where: {userId: userId}})
    res.status(200).send(userInfo)

})
exports.getUser = catchAsync(async(req, res, next)=>{
    const user  = await SignupModel.findOne()
})