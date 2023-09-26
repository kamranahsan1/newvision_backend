const mongooes = require("mongoose");
const priceOptionSchema = require("./Price");

const PackageSchema = mongooes.Schema({
  name: {
    type: String,
    require: true,
  },
  mainImage: {
    type: String,
    default: "",
  },
  multipleImages: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
    require: true,
  },
  price: [priceOptionSchema],
  attractions: {
    type: [String],
    default: [],
  },
  inclusionsList: {
    type: [String],
    default: [],
  },
  country: {
    type: String,
    default: "United Arab Emirates",
  },
  countryCode: {
    type: String,
    default: "uae",
  },
  category: {
    type: mongooes.Schema.Types.ObjectId,
    ref: "Category",
  },
  featured: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Package = mongooes.model("Package", PackageSchema);

module.exports = Package;
