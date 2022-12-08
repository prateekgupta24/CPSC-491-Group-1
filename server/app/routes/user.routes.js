module.exports = (app) => {
  const userprofile = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", userprofile.create);

  // Retrieve all users
  router.get("/", userprofile.findAll);

  // Retrieve all published user
  router.get("/published", userprofile.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", userprofile.findOne);

  // Update a user with id
  router.put("/:id", userprofile.update);

  // Delete a user with id
  router.delete("/:id", userprofile.delete);

  // Create a new user
  router.delete("/", userprofile.deleteAll);

  app.use("/server/user", router);
};
