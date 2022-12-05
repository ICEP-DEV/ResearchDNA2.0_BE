//CRUD - Create, Read, Update Delete
const Admin = require('../models/adminModel');
const catchAsync = require('../utils/catchAsync');

//CREATE USER
exports.createAdmin = catchAsync(async(req, res, next)=>{
    const admin = await Admin.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Admin Created Successfully",
        Admin
    })
});


