//CRUD - Create, Read, Update Delete
const ToolsModel = require('../models/toolsModel');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer')
const path = require('path')

//CREATE Tools
exports.createTools = catchAsync(async(req, res, next)=>{

    let info = {
        video: req.file.path
        
        
    }
  console.log(info)
    const tools = await ToolsModel.create(info);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "tools Created Successfully",
        tools
    })
});


exports.getAllTools = catchAsync(async(req, res, next)=>{
    const tools  = await ToolsModel.findAll()
    res.status(200).send(tools )
})

exports.getTools  = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const tools = await ToolsModel.findOne({where: {id: id}})
    if(!tools )
    return res.json({message: "Document does not exit"})
    res.status(200).send(tools )
    

})
exports.updateTools  = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const updateTools  = await ToolsModel.update({where: {id: id}})
    res.status(200).send("Feedback information updated!")

})
exports.deleteTools  = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const deleteTools = await ToolsModel.destroy({where: {id: id}})
    res.status(200).send("Feedback delete !")

})

// 8. Upload video Controller

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
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('video')

