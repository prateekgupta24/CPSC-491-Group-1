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
  const userEmail = await getParsedJwt(preference.jwt);
  delete user.jwt;
  const userID = await getID(userEmail);
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
      console.log("updated preference");
    }
  );
  res.json(userprofile);
});
// require("./app/routes/preference.routes")(app);

// set port, listen for requests
app.listen(process.env.PORT || 8080, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// matching algo
app.post("/match", async (req, res) => {
  // TODO:
  // compare distance to user
  // grab a few users with closest distance
  // get user preferences ??
  const userEmail = await getParsedJwt(req.body);
  const userID = await getID(userEmail);
  const userMatch = await db.userprofile.find({ _id: { $ne: userID } });
  //console.log(userMatch);
  const validKeys = [
    "email",
    "fname",
    "lname",
    "gender",
    "height",
    "weight",
    "gym",
  ];
  // removes unnecessary/secret information
  const newMatch = [{}];
  //console.log(userMatch);
  // for (const user in userMatch) {
  //   for (const key of validKeys) {
  //     //console.log(userMatch[user][key]);
  //     if (userMatch[user][key]) {
  //       console.log(newMatch[user][key]);
  //       newMatch[user][key] = userMatch[user][key];
  //     }
  //   }
  // }

  for (var i = 0; i < userMatch.length; i++) {
    for (const key of validKeys) {
      // console.log(user);
      // console.log(userMatch[i][key]);
      if (userMatch[i][key]) {
        newMatch[i][key] = userMatch[i][key];
      }
    }
    if (i + 1 !== userMatch.length) {
      const newObj = {};
      newMatch.push(newObj);
    }
  }
  // console.log(newMatch);
  const userInfo = await db.userprofile.findOne({ email: userEmail });
  const userGym = userInfo.gym;
  if (userGym) {
    // if user's location is in the database
    //console.log(userGym);
    // TODO:
    // loop through userMatch.gym and calculate distance between userGym and userMatch.gym
    // return a list of all gyms in sorted order from closest to furthest
    res.json(newMatch);
  } else {
    res.json("input location");
  }

  // console.log(userMatch);
  // find distance between user and everone in userMatch
});
