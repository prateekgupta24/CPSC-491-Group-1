module.exports = (mongoose) => {
  const User = mongoose.model(
    "users",
    new mongoose.Schema(
      {
        fname: String,
        lname: String,
        age: Number,
        gender: String,
        height: String,
        weight: Number,
        state: String,
        city: String,
        gym: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
