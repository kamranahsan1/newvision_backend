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
  type: {
    type: String,
    enum: ["general", "event-visit"],
    default: "general",
  },
  description: {
    type: String,
    default: "",
  },
  mainImage: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tours = mongoose.model("Tours", TourSchema);
module.exports = Tours;
