//CRUD - Create, Read, Update Delete
const express = require('express');
const LoginModel = require('../models/userModel');
const Supervisor = require('../models/supervisorModel');
const catchAsync = require('../utils/catchAsync');
const { token } = require("morgan");
//const jwt= require("jsonwebtoken")

const router =express.Router();





exports.compareLogin = catchAsync(async (req, res, next) => {

    const {userId,password}=req.body;

    const userWithId = await LoginModel.findOne({where: { userId}}).catch((err) =>{
        console.log("Error: ",err);
    });
 

    if(!userWithId)
    return res.json({message: "Student number or password does not match!"})
 
    if(userWithId.password !==password)
    return res.json({message: "Student number or password does not match!"})
    else{
        return res.json({message: "Login was succeful!"})
       
    }

    
});

//Supervisor


exports.login = catchAsync(async (req, res, next) => {

    const {supervisorId,password}=req.body;

    const userWithId = await Supervisor.findOne({where: { supervisorId}}).catch((err) =>{
        console.log("Error: ",err);
    });
    

    if(!userWithId)
    return res.json({message: "Supervisor number or password does not match!"})
 
    if(userWithId.password !==password)
    return res.json({message: "Supervisor number or password does not match!"})
    else{
        return res.json({message: "Login was succeful!"})
       
    }

    
});


