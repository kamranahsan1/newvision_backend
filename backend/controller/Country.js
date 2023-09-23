const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Country = require("../models/Country");
const { upload } = require("../upload");

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

const createCountry = catchAsyncErrors(async (req, res, next) => {
  const { name, description, featured } = req.body;

  const existingCountry = await Country.findOne({ name });

  if (existingCountry) {
    return res.status(400).json({
      success: false,
      message: "Country with the same name already exists.",
    });
  }
  const uploadedFile = req.files.mainImage;
  await upload(uploadedFile);
  const data = await Country.create({
    name: name,
    description,
    featured,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`,
  });
  res.status(200).json({
    success: true,
    data,
  });
});
const getAllCountries = catchAsyncErrors(async (req, res, next) => {
  const data = await Country.find({ status: 1 });
  res.status(200).json({
    success: true,
    data,
  });
});
module.exports = {
  getCountries,
  createCountry,
  getAllCountries,
};
