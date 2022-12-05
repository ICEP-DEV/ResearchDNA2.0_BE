//CRUD - Create, Read, Update Delete
const UserModel = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

//CREATE USER
exports.createUser = catchAsync(async(req, res, next)=>{
    const user = await UserModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "User Created Successfully",
        user
    })
});


exports.getAllUser = catchAsync(async(req, res, next)=>{
    const user  = await UserModel.findAll()
    res.status(200).send(user)
})

exports.getUser = catchAsync(async (req, res, next) => {

    const userId = req.params.userId
    const user= await UserModel.findOne({where: {userId: userId}})
    res.status(200).send(user)

})
exports.updateUser = catchAsync(async (req, res, next) => {

    const userId = req.params.userId
    const updateUser = await UserModel.update({where: {userId: userId}})
    res.status(200).send("User information updated!")

})
exports.deleteUser = catchAsync(async (req, res, next) => {

    const userId = req.params.userId
    const deleteUser = await UserModel.destroy({where: {userId: userId}})
    res.status(200).send("USER delete !")

})