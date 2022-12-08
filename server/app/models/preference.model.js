module.exports = (mongoose) => {
  const Preference = mongoose.model(
    "preference",
    new mongoose.Schema(
      {
        id: String,
        workoutstyle: String,
        age: Number,
        gender: String,
        height: String,
        weight: Number,
        gym: String,
        state: String,
        city: String,
      },
      { timestamps: true }
    )
  );

  return Preference;
};
