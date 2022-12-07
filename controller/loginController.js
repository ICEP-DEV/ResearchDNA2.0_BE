//CRUD - Create, Read, Update Delete
const express = require('express');
const LoginModel = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
//const { token } = require("morgan");
//const jwt= require("jsonwebtoken")

const router =express.Router();





exports.compareLogin = catchAsync(async (req, res, next) => {

    const {userId,password}=req.body;

    const userWithId = await LoginModel.findOne({where: { userId},limit:1}).catch((err) =>{
        console.log("Error: ",err);
    })
 

    if(!userWithId)
    return res.json({message: "Student number or password does not match!"})
 
    if(userWithId.password !==password)
    return res.json({message: "Student number or password does not match!"})
    else{
        if(req.body.userId == userWithId.userId && req.body.password == userWithId.password){
            session=req.session;
            session.userId=req.body.userId;
            console.log(req.session)
            res.send(`Hey there, welcome to Research`);
 
         }
          else{
           res.send('Invalid Student number or password');
         }
     
 }
 
 
 });
 
 exports.getlogin = catchAsync(async(req, res, next)=>{
  const loginData  = await LoginModel.findAll()
 });


