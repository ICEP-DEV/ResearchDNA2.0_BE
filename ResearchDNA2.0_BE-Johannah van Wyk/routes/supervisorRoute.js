const router = require('express').Router();

const supervisorController = require('../controller/supervisorController');

router
    .route("/")
    .post(supervisorController.createSupervisor)
    .get(supervisorController.getAllSupervisor)
    
router
    .route("/:userId")
    .get(supervisorController.getSupervisor)
    

module.exports = router;