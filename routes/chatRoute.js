const router = require("express").Router();
const chatController = require("../controller/chatController");
const chatGroupController = require("../controller/chatGroupController");
const authController = require('../controller/loginController')

router.route("/uploadDocument/:id").post(chatController.uploadDocument,chatController.sendMessage);
router
   .route("/:id")
   .get( chatController.viewChats)
   .post(chatController.sendMessage)
   

   



module.exports = router;
