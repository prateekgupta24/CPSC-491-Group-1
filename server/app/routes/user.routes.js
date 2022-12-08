module.exports = (app) => {
  const userinfo = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", userinfo.create);

  // Retrieve all users
  router.get("/", userinfo.findAll);

  // Retrieve all published user
  router.get("/published", userinfo.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", userinfo.findOne);

  // Update a user with id
  router.put("/:id", userinfo.update);

  // Delete a user with id
  router.delete("/:id", userinfo.delete);

  // Create a new user
  router.delete("/", userinfo.deleteAll);

  app.use("/server/user", router);
};
