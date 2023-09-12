const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Country = require("../models/Country");

const getCountries = catchAsyncErrors(async (req, res, next) => {
  const countries = await Country.find();
  res.status(200).json(countries);

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
  getCountries,
};
