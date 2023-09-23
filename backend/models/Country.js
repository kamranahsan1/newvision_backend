const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: {
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
  featured: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  issue: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  issueReson: {
    type: String,
    default: "",
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 1,
  },
});

const Category = mongoose.model("Country", CountrySchema);
module.exports = Category;
