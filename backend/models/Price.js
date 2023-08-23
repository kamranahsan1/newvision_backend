const mongoose = require("mongoose");

const priceOptionSchema = new mongoose.Schema({
  amount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  discount: {
    type: mongoose.Types.Decimal128,
    default: 0.0,
  },
  description: {
    type: String,
    default: "",
  },
  currency: {
    type: String,
    default: "aed",
  },
});

module.exports = priceOptionSchema;
