const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  reason: String,
  message: String,
});

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
