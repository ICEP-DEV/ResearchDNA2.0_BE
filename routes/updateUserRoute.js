const router = require('express').Router();

const updateUserController = require('../controller/updateUserController');

router
    .route("/:userId")
    .put(updateUserController.updateUserInfo)

module.exports = router;