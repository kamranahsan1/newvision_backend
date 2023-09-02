const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactModel = require("../models/ContactModel");

const saveContact = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, email, phone, reason, message } = req.body;

    if (!name || !email || !phone || !reason || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const newContact = new ContactModel({
      name,
      email,
      phone,
      reason,
      message,
    });

    const validationError = newContact.validateSync();
    if (validationError) {
      const errors = {};
      for (const field in validationError.errors) {
        errors[field] = validationError.errors[field].message;
      }
      return res.status(400).json({ errors });
    }

    await newContact.save();

    res.status(200).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  saveContact,
};
