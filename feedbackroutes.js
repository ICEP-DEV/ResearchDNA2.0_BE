const router = require('express').Router();
const feedbackController = require('../controllers/feedbackcontroller');



router
  .route("/:feedback_id")
  .get(authController.checkUser, feedbackController.getFeedback)
  .patch(authController.checkUser, feedbackController.updateFeedback)
  .post(authController.checkUser, feedbackController.sendFeedback);

router
  .route("/studentprojectnotifications/:feedback_id")
  .get(authController.checkUser,feedbackController.getAllStudentProjectNotifications);

router
  .route("/CountFeedbacksForAGivenGoal/:feedback_id")
  .get(authController.checkUser,feedbackController.CountFeedbacksForAGivenGoal);



module.exports = router;