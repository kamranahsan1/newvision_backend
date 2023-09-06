const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema({
  email: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "active",
  },
});

const Subscriber = mongoose.model("Subscriber", SubscriberSchema);

module.exports = Subscriber;
