const router = require('express').Router();

const announcementController = require('../controller/announcementController');

router
    .route("/")
    .post(announcementController.createAnnouncement)
    .get(announcementController.getAllAnnouncement)
    
router
    .route("/:id")
    .get(announcementController.getAnnouncement)
    .put(announcementController.updateAnnouncement)
    .delete(announcementController.deleteAnnouncement)


module.exports = router;