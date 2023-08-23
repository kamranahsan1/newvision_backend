const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
  viewType: {
    type: String,
    enum: ["quick", "detail"],
    default: "quick",
  },
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
