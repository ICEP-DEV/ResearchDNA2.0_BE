const router = require('express').Router();

const loginController = require('../controller/loginController');

router
    .route("/")
    .post(loginController.compareLogin)
    .post(loginController.login)

module.exports = router;