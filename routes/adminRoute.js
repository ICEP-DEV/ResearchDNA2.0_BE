const router = require('express').Router();

const adminController = require('../controller/adminController');

router
    .route("/")
    .post(adminController.createAdmin)
    
    



module.exports = router;