module.exports = (mongoose) => {
  const User = mongoose.model(
    "User",
    mongoose.Schema(
      {
        fName: String,
        lName: String,
        age: String,
        gender: String,
        weight: String,
        city: String,
        gym: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
