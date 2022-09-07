const router = require('express').Router();

const getUserController = require('../controller/getUserController');

router
    .route("/:userId")
    .get(getUserController.getUserInfo)

module.exports = router;