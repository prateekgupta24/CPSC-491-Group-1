module.exports = app => {
    const userprofiles = require("../controllers/preference.controller.js");
  
    var router = require("express").Router();
  
    // Create a new preferences
    router.post("/", userprofiles.create);
  
    // Retrieve all preferences
    router.get("/", userprofiles.findAll);
  
    // Retrieve all published preferences
    router.get("/published", userprofiles.findAllPublished);
  
    // Retrieve a single preferences with id
    router.get("/:id", userprofiles.findOne);
  
    // Update a preferences with id
    router.put("/:id", userprofiles.update);
  
    // Delete a preferences with id
    router.delete("/:id", userprofiles.delete);
  
    // Create a new preferences
    router.delete("/", userprofiles.deleteAll);
  
    app.use("/server/preference", router);
  };