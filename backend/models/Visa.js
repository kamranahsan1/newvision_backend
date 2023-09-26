const mongooes = require("mongoose");
const priceOptionSchema = require("./Price");

const VisaSchema = mongooes.Schema({
  category: {
    type: mongooes.Schema.ObjectId,
    ref: "VisaCategory",
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
  type: {
    type: String,
    enum: ["quick", "detail"],
    default: "quick",
  },
  price: [priceOptionSchema],
  country: {
    type: mongooes.Schema.ObjectId,
    ref: "Country",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Visa = mongooes.model("Visa", VisaSchema);

module.exports = Visa;
