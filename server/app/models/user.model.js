module.exports = (mongoose) => {
  const User = mongoose.model(
    "users",
    new mongoose.Schema(
      {
        email: String,
        pword: String,
        fname: String,
        lname: String,
        age: Number,
        gender: String,
        height: String,
        weight: Number,
        state: String,
        address: String
        //city: String,
        //gym: String,

        workoutstyle: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
