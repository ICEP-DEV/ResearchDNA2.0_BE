//CRUD - Create, Read, Update Delete
const AnnouncementModel = require('../models/announcementModel');
const catchAsync = require('../utils/catchAsync');

//CREATE Announcement
exports.createAnnouncement = catchAsync(async(req, res, next)=>{
    const announcement = await AnnouncementModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Announcement Created Successfully",
        announcement
    })
});


exports.getAllAnnouncement = catchAsync(async(req, res, next)=>{
    const announcement  = await AnnouncementModel.findAll()
    res.status(200).send(announcement)
})

exports.getAnnouncement = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const announcement= await AnnouncementModel.findOne({where: {id: id}})
    res.status(200).send(announcement)

})
exports.updateAnnouncement = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const updateAnnouncement = await AnnouncementModel.update({where: {id: id}})
    res.status(200).send("Announcement information updated!")

})
exports.deleteAnnouncement = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const deleteAnnouncement = await AnnouncementModel.destroy({where: {id: id}})
    res.status(200).send("Announcement delete !")

})