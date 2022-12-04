module.exports = (mongoose) => {
  const Preference = mongoose.model(
    "preference",
    new mongoose.Schema(
      {
        city: String,
        workoutstyle: String,
        age: Number,
        gender: String,
        height: String,
        weight: Number,
        distance: Number,
        gym: String,
      },
      { timestamps: true }
    )
  );

  return Preference;
};
