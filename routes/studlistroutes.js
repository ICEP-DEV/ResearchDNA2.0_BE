const router = require('express').Router();

const userController = require('../controller/studlistController');
  
   
    router
    
    .route("/")
    .post(studlistController.createUser)
    .get(studlistController.getAllUser)

    router

    .route("/:userId")
    router.post("/", student.create);
  
    router.put("/:id", student.update);
  
    router.delete("/:id", student.delete);
  
    app.use('/api/student', router);

    module.exports = router;
  

 