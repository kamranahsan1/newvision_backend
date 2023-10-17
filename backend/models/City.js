const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: "Country",
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 1,
  },
});

const City = mongoose.model("City", CitySchema);
module.exports = City;
