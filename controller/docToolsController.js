//CRUD - Create, Read, Update Delete
const DocToolsModel = require('../models/docToolsModel');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer')
const path = require('path')

//CREATE Tools
exports.createDocTools = catchAsync(async(req, res, next)=>{

    let info = {
        document: req.file.path
       
        
    }
  console.log(info)
    const docTools = await DocToolsModel.create(info);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Document Created Successfully",
        docTools
    })
});


exports.getAllDocTools = catchAsync(async(req, res, next)=>{
    const docTools  = await DocToolsModel.findAll()
    res.status(200).send(docTools )
})

exports.getDocTools  = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const docTools = await DocToolsModel.findOne({where: {id: id}})
    if(!docTools )
    return res.json({message: "Document does not exit"})
    res.status(200).send(docTools )
    

})
exports.updateDocTools  = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const updateDocTools  = await DocToolsModel.update({where: {id: id}})
    res.status(200).send("Document information updated!")

})
exports.deleteDocTools  = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const deleteDocTools = await DocToolsModel.destroy({where: {id: id}})
    res.status(200).send("Document delete !")

})

// 8. Upload Document Controller

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
        const fileTypes = /pdf|docx|txt/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('document')
