const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  country: {
    type: mongoose.Schema.ObjectId,
    ref: "Country",
  },
  name: {
    type: String,
    default: "",
  },
  Day: {
    type: Number,
    default: 1,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  mainImage: {
    type: String,
    default: "",
  },
});

const Tours = mongoose.model("Tours", TourSchema);
module.exports = Tours;
