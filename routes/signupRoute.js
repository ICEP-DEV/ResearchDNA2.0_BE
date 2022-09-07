const router = require('express').Router();

const signupController = require('../controller/signupController');

router
    .route("/")
    .post(signupController.createSignup)

   

module.exports = router;