const router = require('express').Router();

const projectController = require('../controller/projectController');

router
    .route("/")
    .post(projectController.upload,projectController.createProject)
    .get(projectController.getAllProject)
    
router
    .route("/:id")
    .get(projectController.getProject)
    .put(projectController.updateProject)
    .delete(projectController.deleteProject)


module.exports = router;