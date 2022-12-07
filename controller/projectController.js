//CRUD - Create, Read, Update Delete
const ProjectModel = require('../models/projectModel');
const catchAsync = require('../utils/catchAsync');
const User = require("../models/userModel");


//CREATE Project

exports.createProject = catchAsync(async(req, res, next)=>{
    const project = await ProjectModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Project Created Successfully",
        project
    })
});


exports.getAllProject = catchAsync(async(req, res, next)=>{
    const project  = await ProjectModel.findAll({
   
});
    res.status(200).send(project)
})

exports.getProject = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const project= await ProjectModel.findOne({where: {id: id}})
    res.status(200).send(project)

})
exports.updateProject = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const updateProject = await ProjectModel.update({where: {id: id}})
    res.status(200).send("Project information updated!")

})
exports.deleteProject = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const deleteProject = await ProjectModel.destroy({where: {id: id}})
    res.status(200).send("Project delete !")

})

