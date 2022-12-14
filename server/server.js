const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require('path');
const route = require("./app/routes/route.js")
var axios = require("axios");
const ObjectID = require("mongodb").ObjectId;
const { Client } = require("@googlemaps/google-maps-services-js");
const googleMapsKey = "AIzaSyAuiHqFBBIAHGvYnuBMbAAZRhs76V4ncrk";

const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '/build')));

route(app);

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
  parsedJwt = jwt.decode(token.accessToken);
  return parsedJwt;
}

// get mongodb id from email
async function getID(email) {
  const user = await db.userprofile.findOne({ email: email });
  return user._id;
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
    if (result) {
      //console.log("exists");
      const accessToken = await jwt.sign(
        result.email,
        "a47755667d1907f6e92e0de8b13e313232d23c791e8c3c7ffe1508942bdaeab6933d15c9eb8db75ccade9a18a2bbdd030b6cb0914cd1fbdd1c2bfffa9619ee09"
      );
      res.json({ accessToken: accessToken });
    }
    if (!result) {
      const newUser = new db.userprofile(user);
      await newUser.save(); // saves to mongodb
      res.json(newUser);
    }
  });
});

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

// app.put("/preferences", async (req, res) => {
//   // update the preferences
//   const preference = req.body;
//   const userEmail = await getParsedJwt(preference.jwt);
//   delete user.jwt;
//   const userID = await getID(userEmail);
//   delete preference.email;
//   //console.log(preferenceID);
//   // loop through each name and if key exists, update it.
//   for (const key in preference) {
//     if (!preference[key]) {
//       delete preference[key];
//     }
//   }
//   db.userprofile.updateOne(
//     { _id: userID },
//     { $set: preference },
//     function (err) {
//       if (err) throw err;
//       console.log("updated preference");
//     }
//   );
//   res.json(userprofile);
// });
// // require("./app/routes/preference.routes")(app);

// set port, listen for requests
app.listen(PORT || function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// matching algo
app.post("/match", async (req, res) => {
  // gets users email
  const userEmail = await getParsedJwt(req.body);
  // gets users id
  const userID = await getID(userEmail);
  // gets an array of objects (users) that isn't the user
  const userMatch = await db.userprofile.find({ _id: { $ne: userID } });

  // array of non sensitive information
  const validKeys = [
    "email",
    "fname",
    "lname",
    "gender",
    "height",
    "weight",
    "gym",
  ];

  const matchedUsers = [];
  // fills and array of objects with other user's non sensitive information
  for (var i = 0; i < userMatch.length; i++) {
    const newObj = {};
    matchedUsers.push(newObj); // jank way to push an empty object to an array
    for (const key of validKeys) {
      if (userMatch[i][key] && userMatch[i]["gym"]) {
        matchedUsers[i][key] = userMatch[i][key];
      }
    }
  }

  // all of current user's information
  const userInfo = await db.userprofile.findOne({ email: userEmail });
  // user's gym location
  const userGym = userInfo.gym;

  // jank way to get rid of empty object in array
  const newMatch = matchedUsers.filter(
    (value) => Object.keys(value).length !== 0
  );
  // console.log(newMatch);
  // if user's location is in the database
  if (userGym) {
    var i = 0;
    // gets distance of all gyms from the user's gym
    for (user of newMatch) {
      const matchGym = user.gym;
      // console.log(user);
      const client = new Client({});
      await client
        .distancematrix({
          params: {
            origins: [userGym],
            destinations: [matchGym],
            key: googleMapsKey,
          },
          timeout: 1000, // milliseconds
        })
        .then((r) => {
          // distance in meters
          const meters = r.data.rows[0].elements[0].distance.value;
          // converts meters to miles
          const miles = meters / 1609.344;
          // rounds to nearest decimal
          const roundedMiles = Math.round(miles * 10) / 10;
          newMatch[i].distance = roundedMiles;
        })
        .catch((e) => {
          console.log(e);
        });
      i++;
    }

    newMatch.sort(function (a, b) {
      var keyA = new Date(a.distance),
        keyB = new Date(b.distance);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    // console.log(newMatch);
    res.json(newMatch);
  } else {
    res.json("");
  }
});
