const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const {
  useInRouterContext,
  UNSAFE_NavigationContext,
} = require("react-router-dom");
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

// get mongodb id?
function getID(email) {
  const userID = db.userprofile.findOne({ email: email });
  console.log(userID._id);
  return userID._id;
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fitbud application." });
});

// user sign up
app.post("/signup", async (req, res) => {
  const user = req.body;
  db.userprofile.findOne({ email: user.email }, async function (err, result) {
    // check if email exists in database
    if (err) throw err;
    // console.log(result); // outputs result if exists
    if (!result) {
      const newUser = new db.userprofile(user);
      await newUser.save(); // saves to mongodb
      res.json(newUser);
    } else {
      res.json("");
    }
  });
});
// app.post("/logout", async (req, res) => {
//   const user = req.body;
//   req.body["email"] = "";
//   req.body["pword"] = "";
//   //console.log(user);

//   res.json({ user });
// });

app.post("/login", async (req, res) => {
  // check if email exists in database
  const user = req.body;
  console.log("log in");
  console.log(user.email);
  db.userprofile.findOne({ email: user.email }, function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result) {
      console.log("exists");
      const accessToken = jwt.sign(
        user,
        "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09"
      );
      res.json({ accessToken: accessToken });
      console.log(result._id);
    } else {
      res.json("");
    }
  });
});

// user profile settings
// does not check if user exists
app.post("/userprofile", async (req, res) => {
  // removes first and last name from body
  const user = req.body;
  // updates userprofile/adds with user
  const userID = getID(user["email"]);
  db.userprofile.updateOne({ user }, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  res.json(user);
});
require("./app/routes/user.routes")(app);

app.put("/preferences", async (req, res) => {
  // update the preferences
  const preference = req.body;
  db.userprofile.updateOne({ preference }, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  res.json(userprofile);
});
require("./app/routes/preference.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
