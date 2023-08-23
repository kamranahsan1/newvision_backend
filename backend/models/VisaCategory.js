const mongoose = require("mongoose");

const VisaCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
  parent: {
    type: String,
    default: "",
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 1,
  },
});

const VisaCategory = mongoose.model("VisaCategory", VisaCategorySchema);
module.exports = VisaCategory;
