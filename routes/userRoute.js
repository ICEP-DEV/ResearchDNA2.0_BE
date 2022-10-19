const router = require('express').Router();

const userController = require('../controller/userController');

router
    .route("/")
    .post(userController.createUser)
    .get(userController.getAllUser)
    
router
    .route("/:userId")
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router;