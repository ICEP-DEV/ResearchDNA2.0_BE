const catchAsync  = require('../utils/catchAsync');
const Feedback = require("../models/feedbackmodel");
const sequelize = require('../config/db');


exports.sendFeedback = catchAsync(async(req,res,next) =>{
 req.body.userId = req.user.id
 const feedback = await Feedback.create(req.body)
 if(!feedback) return next(new Error("sorry, check the connection"))
 res.status(200).json({
     status: "success",
     message: "Feedback successfully sent.",
     feedback
 })


})

exports.updateFeedback = catchAsync(async(req, res, next)=>{
    const feedback = await Feedback.update(req.body, {where: {id: req.params.id}});
    if(!feedback) return next(new Error('something is went wrong'));
    res.status(200).json({
        status: "success",
        message: "feedback successfully updated",
        feedback
    });
});

exports.getFeedback = catchAsync(async(req,res, next) =>{
    
    const feedback = await Feedback.findAll({where: {goalId: req.params.id}, order: ['createdAt', ASC]})
    
    if(!feedback) return next(new Error("no documents"))
    
    res.status(200).json({
        status: "success",
        message: "welcome to the feedback page",
        feedback
    })

})

exports.getAllStudentProjectNotifications = catchAsync(async(req, res, next)=>{
    
    const line = ('SELECT * FROM feedback WHERE  feedback_id = ?, use_id = ?, status = ? ');
    const notifications = await sequelize.query(line, {
        nest:true,
        type: sequelize.QueryTypes.SELECT
    });
    console.log(line);

    
    res.status(200).json({
        status: "success",
        results: notifications.length,
        notifications
    });
});


exports.getAllSupervisorProjectNotifications = catchAsync(async(req, res, next)=>{
    
    const line = ('SELECT * FROM feedback WHERE  feedback_id = ?, use_id = ?, status = ? ');
    
    const notifications = await sequelize.query(line, {
        nest:true,
        type: sequelize.QueryTypes.SELECT
    });
    console.log(line);
    
    res.status(200).json({
        status: "success",
        results: notifications.length,
        notifications
    });
});



