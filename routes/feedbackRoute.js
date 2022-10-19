const router = require('express').Router();

const feedbackController = require('../controller/feedbackController');

router
    .route("/")
    .post(feedbackController.createFeedback)
    .get(feedbackController.getAllFeedback)
    
router
    .route("/:id")
    .get(feedbackController.getFeedback)
    .put(feedbackController.updateFeedback)
    .delete(feedbackController.deleteFeedback)


module.exports = router;