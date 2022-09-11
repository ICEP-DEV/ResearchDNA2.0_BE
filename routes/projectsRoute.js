const router = require('express').Router();

const projectsController = require('../controller/projectsController');

router
    .route("/")
    .post(projectsController.createProjects)

   

module.exports = router;