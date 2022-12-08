module.exports = (mongoose) => {
  const User = mongoose.model(
    "users",
    new mongoose.Schema(
      {
        email: String,
        pword: String,
        fname: String,
        lname: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
