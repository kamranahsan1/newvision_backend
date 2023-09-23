const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactModel = require("../models/ContactModel");
const Subscriber = require("../models/Subscriber");

const saveContact = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, email, phone, reason, message } = req.body;

    if (!name || !email || !phone || !message) {
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

    res.status(200).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const saveSubscriber = catchAsyncErrors(async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      existingSubscriber.status = "active";
      await existingSubscriber.save();
      return res.status(200).json({ message: "Subscriber is now active!" });
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email && !emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      const newSubscriber = new Subscriber({ email });

      const validationError = newSubscriber.validateSync();
      if (validationError) {
        const errors = {};
        for (const field in validationError.errors) {
          errors[field] = validationError.errors[field].message;
        }
        return res.status(400).json({ errors });
      }

      await newSubscriber.save();
      res.status(200).json({ message: "Subscribed Successfully!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error });
  }
});
const getContacts = catchAsyncErrors(async (req, res, next) => {
  const data = await ContactModel.find();
  res.status(200).json({
    success: true,
    data,
  });
});
module.exports = {
  saveContact,
  saveSubscriber,
  getContacts,
};
