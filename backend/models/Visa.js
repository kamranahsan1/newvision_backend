const mongooes = require("mongoose");
const priceOptionSchema = require("./Price");

const VisaSchema = mongooes.Schema({
  category: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  NumberOfStay: {
    type: Number,
    default: 0,
  },
  NumberOfStayName: {
    type: String,
    default: "Days",
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
  price: [priceOptionSchema],
  country: {
    type: String,
    default: "United Arab Emirates",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Visa = mongooes.model("Visa", VisaSchema);

module.exports = Visa;
