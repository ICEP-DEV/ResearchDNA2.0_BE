const router = require('express').Router();

const docToolsController = require('../controller/docToolsController');

router
    .route("/")
    .post(docToolsController.upload,docToolsController.createDocTools)
    .get(docToolsController.getAllDocTools)
    
router
    .route("/:id")
    .get(docToolsController.getDocTools)
    .put(docToolsController.updateDocTools)
    .delete(docToolsController.deleteDocTools)


module.exports = router;