const router = require("express").Router();
const chatGroupController = require("../controller/chatGroupController");
const authController = require("../controller/loginController");

router
  .route("/discipline/:id")
  .get( chatGroupController.viewChatGroups)
  .post(chatGroupController.createChatGroup)

  router
  .route("/:id")
  .get(chatGroupController.viewChatGroup)
  .delete(chatGroupController.deleteChatGroup)
  .patch(chatGroupController.updateChatGroup)

module.exports = router;
