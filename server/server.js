const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const ObjectID = require("mongodb").ObjectId;

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
const { json } = require("body-parser");
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

// gets token and returns the parsed JWT
async function getParsedJwt(token) {
  // decode jwt and get email
  console.log("in getParsedJwt");
  parsedJwt = jwt.decode(token.accessToken);
  console.log(parsedJwt);
  return parsedJwt;
}

// get mongodb id from email
async function getID(email) {
  console.log(email);
  const userID = await db.userprofile.findOne({ email: email });
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
  if (!user.google) {
    db.userprofile.findOne({ email: user.email }, function (err, result) {
      if (err) throw err;
      // console.log(result);
      if (result) {
        //console.log("exists");
        const accessToken = jwt.sign(
          result.email,
          "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09"
        );
        res.json({ accessToken: accessToken });
      } else {
        res.json("");
      }
    });
  } else if (user.google) {
    // if google sign in
    db.userprofile.findOne({ email: user.email }, async function (err, result) {
      // checks if email exists
      // check if email exists in database
      if (err) throw err;
      if (result) {
        // console.log(result); // outputs result if exists
        const accessToken = jwt.sign(
          result.email,
          "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09"
        );
        res.json({ accessToken: accessToken });
      }
      if (!result) {
        console.log("test");
        // if email doesn't exist, add to database
        const newUser = new db.userprofile(user);
        await newUser.save(); // saves to mongodb
        res.json(newUser);
      }
    });
  }
});

// user profile settings
app.post("/userprofile", async (req, res) => {
  // removes first and last name from body
  const user = req.body;
  console.log("in userprofile");

  // this removes height if user inputted it as empty because userprofile.js will assign it as '"
  if (user.height === "'\"") {
    delete user.height;
  }
  // updates userprofile/adds with user
  console.log(user);
  const userEmail = await getParsedJwt(user.jwt);
  const userID = await getID(userEmail);
  delete user.jwt;
  // loop through each name and if key exists, update it.
  for (const key in user) {
    if (!user[key]) {
      delete user[key];
    }
  }
  db.userprofile.updateOne({ _id: userID }, { $set: user }, function (err) {
    if (err) throw err;
    console.log("updated profile");
  });

  res.json(user);
});
require("./app/routes/user.routes")(app);

app.put("/preferences", async (req, res) => {
  // update the preferences
  const preference = req.body;
  const userID = await getParsedJwt(preference["email"]);
  delete preference.email;
  //console.log(preferenceID);
  // loop through each name and if key exists, update it.
  for (const key in preference) {
    if (!preference[key]) {
      delete preference[key];
    }
  }
  db.userprofile.updateOne(
    { _id: userID },
    { $set: preference },
    function (err) {
      if (err) throw err;
      console.log("updated profile");
    }
  );
  res.json(userprofile);
});
// require("./app/routes/preference.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// matching algo?
app.post("/match", async (req, res) => {
  console.log("in match");
  // TODO:
  // get entire database
  // compare distance to user
  // grab a few users with closest distance
  const userEmail = await getParsedJwt(req.body);
  const userID = await getID(userEmail);
  console.log(userID);
  // db.userprofile.find({ _id: { $not: userID } }, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   res.json(result);
  // });
});
