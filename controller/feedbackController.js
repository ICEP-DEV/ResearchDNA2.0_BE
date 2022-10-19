//CRUD - Create, Read, Update Delete
const FeedbackModel = require('../models/feedbackModel');
const catchAsync = require('../utils/catchAsync');

//CREATE Announcement
exports.createFeedback = catchAsync(async(req, res, next)=>{
    const feedback = await FeedbackModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Feedback Created Successfully",
        feedback
    })
});


exports.getAllFeedback = catchAsync(async(req, res, next)=>{
    const feedback  = await FeedbackModel.findAll()
    res.status(200).send(feedback)
})

exports.getFeedback = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const feedback= await FeedbackModel.findOne({where: {id: id}})
    res.status(200).send(feedback)

})
exports.updateFeedback = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const updateFeedback = await FeedbackModel.update({where: {id: id}})
    res.status(200).send("Feedback information updated!")

})
exports.deleteFeedback = catchAsync(async (req, res, next) => {

    const id = req.params.id
    const deleteFeedback = await FeedbackModel.destroy({where: {id: id}})
    res.status(200).send("Feedback delete !")

})