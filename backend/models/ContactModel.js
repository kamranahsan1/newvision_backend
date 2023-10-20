const mongoose = require("mongoose");

const attachmentSchema = new mongoose.Schema({
  filename: String,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  reason: String,
  message: String,
  attachments: [attachmentSchema],
  createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
