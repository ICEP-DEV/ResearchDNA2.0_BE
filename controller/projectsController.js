//CRUD - Create, Read, Update Delete
const ProjectsModel = require('../models/projectsModel');
const catchAsync = require('../utils/catchAsync');
const User = ProjectsModel.user

exports.createProjects = catchAsync(async (req, res, next) => {
    const projects = await ProjectsModel.create(req.body);

 //Add a Project

  res.status(200).json({
    status: "success",
    message: "user Project added",
    projects
  });
});
exports.getProjects = catchAsync(async(req, res, next)=>{
  const projects  = await SignupModel.findAll()
})
