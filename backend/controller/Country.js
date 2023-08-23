const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Country = require("../models/Country");

const getCountries = catchAsyncErrors(async (req, res, next) => {
  const countries = await Country.find();
  res.status(200).json(countries);
});

module.exports = {
  getCountries,
};
