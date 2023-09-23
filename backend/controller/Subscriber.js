const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Subscriber = require("../models/Subscriber");

const postsubscriber = catchAsyncErrors(async (req, res, next) => {
  const { email, status } = req.body;
  try {
    const data = await Subscriber.create({
      email: email,
      status: status,
    });

    res.status(200).json({ message: "Form data saved successfully", data });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: error });
  }
});
const getSubscriber = catchAsyncErrors(async (req, res, next) => {
  const SubscriberData = await Subscriber.find();
  res.status(200).json(SubscriberData);

  /*
  const cacheKey = "countries";
  const cachedCountries = cache.get(cacheKey);

  if (cachedCountries) {
    res.status(200).json(cachedCountries);
  } else {
    const countries = await Country.find();
    cache.set(cacheKey, countries);
    res.status(200).json(countries);
  }
  */
});

module.exports = {
  getSubscriber,
  postsubscriber,
};
