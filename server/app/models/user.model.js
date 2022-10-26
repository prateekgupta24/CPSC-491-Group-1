module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          age: String,
          gender: String,
          weight: String,
          city: String,
          gym: String
        },
        { timestamps: true }
      )
    );
  
    return User;
  };