const router = require('express').Router();

const loginController = require('../controller/loginController');

router
    .route("/")
    .post(loginController.createlogin)

module.exports = router;