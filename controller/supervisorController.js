//CRUD - Create, Read, Update Delete
const SupervisorModel = require('../models/supervisorModel');
const catchAsync = require('../utils/catchAsync');

//CREATE Supervisor
exports.createSupervisor = catchAsync(async(req, res, next)=>{
    const supervisor = await SupervisorModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Supervisor Created Successfully",
        supervisor
    })
});


exports.getAllSupervisor = catchAsync(async(req, res, next)=>{
    const supervisor  = await SupervisorModel.findAll()
    res.status(200).send(supervisor)
})

exports.getSupervisor = catchAsync(async (req, res, next) => {

    const supervisorId = req.params.supervisorId
    const supervisor= await SupervisorModel.findOne({where: {supervisorId: supervisorId}})
    res.status(200).send(supervisor)

})
exports.updateSupervisor = catchAsync(async (req, res, next) => {

    const supervisorId = req.params.supervisorId
    const updateSupervisor = await SupervisorModel.update({where: {supervisorId: supervisorId}})
    res.status(200).send("User information updated!")

})
exports.deleteSupervisor = catchAsync(async (req, res, next) => {

    const supervisorId = req.params.supervisorId
    const deleteSupervisor = await SupervisorModel.destroy({where: {supervisorId: supervisorId}})
    res.status(200).send("Supervisor delete !")

})