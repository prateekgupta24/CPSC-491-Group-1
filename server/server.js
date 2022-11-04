const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fitbud application." });
});

// user login
app.post("/login", async (req, res) => {
  // check if email exists in database
  const user = req.body;
  console.log(user);
  const newUser = new db.userprofiles(user);
  //await newUser.save();
  const accessToken = jwt.sign(
    user,
    "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09"
  );
  res.json({ accessToken: accessToken });
});

// user profile settings
app.post("/userCreate", async (req, res) => {
  // update the userprofile
  res.json(userprofile);
});
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
