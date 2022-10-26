module.exports = app => {
    const userprofiles = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", userprofiles.create);
  
    // Retrieve all users
    router.get("/", userprofiles.findAll);
  
    // Retrieve all published user
    router.get("/published", userprofiles.findAllPublished);
  
    // Retrieve a single user with id
    router.get("/:id", userprofiles.findOne);
  
    // Update a user with id
    router.put("/:id", userprofiles.update);
  
    // Delete a user with id
    router.delete("/:id", userprofiles.delete);
  
    // Create a new user
    router.delete("/", userprofiles.deleteAll);
  
    app.use("/server/user", router);
  };