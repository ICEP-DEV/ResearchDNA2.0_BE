//CRUD - Create, Read, Update Delete
const express = require('express');
const LoginModel = require('../models/signupModel');
const catchAsync = require('../utils/catchAsync');
//const jwt= require("jsonwebtoken")

const router =express.Router();

exports.compareLogin = catchAsync(async (req, res, next) => {

    const {userId,password}=req.body;

    const userWithId = await LoginModel.findOne({where: { userId}}).catch((err) =>{
        console.log("Error: ",err);
    });
    //LoginModel.query(userWithId, function(err, result) {

    if(!userWithId)
    return res.json({message: "Student number or password does not match!"})
 
    if(userWithId.password !==password)
    return res.json({message: "Student number or password does not match!"})
    else{
        return res.json({message: "Login was succeful!"})
       /* Object.keys(result).forEach(function(key) {
            var row = result[key];
            const userSession = {
                
                userId: row.id,
                firstname: row.name,
                lastname: row.surname,
                email: row.email,
                password: row.password
            }
            req.session.user = userSession;
            //code to display on postman
            return res.status(200).send("Log in was succeful!\n" + JSON.stringify(req.session));

        })*/
    }
//});

    
    //const jwtToken= jwt.sign({email: userWithId.email, userId: userWithId.userId},process.env.JWT_SECRET);
    
   // res.json({message: "Welcome Back!", token: jwtToken});
    
});

exports.getLogin = catchAsync(async(req, res, next)=>{
    const login  = await SignupModel.findOne()
})