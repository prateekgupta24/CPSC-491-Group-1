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

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fitbud application." });
});

// user sign up
app.post("/signup", async (req, res) => {
  // check if email exists in database
  const user = req.body;
  console.log(user);
  const newUser = new db.userprofiles(user);
  //await newUser.save(); // saves to mongodb
  res.json(newUser);
});

app.post("/login", async (req, res) => {
  // check if email exists in database
  const user = req.body;
  const accessToken = jwt.sign(
    user,
    "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09"
  );
  res.json({ accessToken: accessToken });
});

// user profile settings
app.put("/userprofile", async (req, res) => {
  // update the userprofile
  const user = req.body;
  res.json(userprofile);
});
require("./app/routes/user.routes")(app);

app.put("/preferences", async (req, res) => {
  // update the preferences
  const preference = req.body;
  res.json(userprofile);
});
require("./app/routes/preference.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function authToken(req, res, nex) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(
//     token,
//     "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09",
//     (err, user) => {
//       if (err) return res.sendStatus(403); // don't have access
//       req.user = user;
//       next();
//     }
//   );
// }
