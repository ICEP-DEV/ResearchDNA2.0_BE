module.exports = app => {
    const listpages = require("../controllers/listpage.controller.js");
  
    var router = require("express").Router();
  
    // Create a new listpage
    router.post("/", listpages.create);
  
    // Retrieve all listpages
    router.get("/", listpages.findAll);
  
    // Retrieve all published listpages
    router.get("/published", listpages.findAllPublished);
  
    // Retrieve a single listpage with id
    router.get("/:id", listpages.findOne);
  
    // Update a listpage with id
    router.put("/:id", listpages.update);
  
    // Delete a listpage with id
    router.delete("/:id", listpages.delete);
  
    // Delete all listpages
    router.delete("/", listpages.deleteAll);
  
    app.use("/api/listpages", router);
  };
  