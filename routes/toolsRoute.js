const router = require('express').Router();

const toolsController = require('../controller/toolsController');

router
    .route("/")
    .post(toolsController.upload,toolsController.createTools)
    .get(toolsController.getAllTools)
    
router
    .route("/:id")
    .get(toolsController.getTools)
    .put(toolsController.updateTools)
    .delete(toolsController.deleteTools)


module.exports = router;