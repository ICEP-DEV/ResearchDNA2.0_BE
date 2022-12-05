//CRUD - Create, Read, Update Delete
const ProjectModel = require('../models/projectModel');
const catchAsync = require('../utils/catchAsync');
const User = require("../models/userModel");
const multer = require('multer')
const path = require('path')

//CREATE Project
exports.createProject = catchAsync(async(req, res, next)=>{
    let info = {
        text: req.body.text,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        document: req.file.path
        
    }
  console.log(info)
    const project = await ProjectModel.create(info);
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

// 8. Upload document Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storage,
    limits: { fileSize: '100000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /pdf|docx|doc|txt/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('document',)