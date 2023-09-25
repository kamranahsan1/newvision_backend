const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Country = require("../models/Country");
const { upload } = require("../upload");
const DeleteCountry = catchAsyncErrors(async (req, res, next) => {
  const user = await Country.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully"
  });
});
const SingleCountry = catchAsyncErrors(async (req, res, next) => {
  const data = await Country.findById(req.params.id);
  res.status(200).json({
    success: true,
    data
  });
});
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
const EditCountry = catchAsyncErrors(async (req, res, next) => {
  const { name, description, featured, previousimage } = req.body;
  let imageroute = previousimage;
  console.log(req.files);
  if (req.files?.mainImage) {
    const uploadedFile = req.files.mainImage;
    console.log(
      `${req.protocol}"//"${req.hostname}:5000'/uploads/'${uploadedFile.name}`
    );
    imageroute = `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`;
  }
  try {
    //   console.log(name);
    //   const newContact = new VisaCategory({
    //     name,
    //     slug,
    //     description,
    //     viewType
    //   });
    const data = await Country.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        description: description,
        featured: featured,
        mainImage: imageroute
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false
      }
    );

    res.status(200).json({ message: "Form Edit successfully", data });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: error });
  }
});
const createCountry = catchAsyncErrors(async (req, res, next) => {
  const { name, description, featured } = req.body;

  const existingCountry = await Country.findOne({ name });

  if (existingCountry) {
    return res.status(400).json({
      success: false,
      message: "Country with the same name already exists."
    });
  }
  const uploadedFile = req.files.mainImage;
  await upload(uploadedFile);
  const data = await Country.create({
    name: name,
    description,
    featured,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`
  });
  res.status(200).json({
    success: true,
    data
  });
});
const getAllCountries = catchAsyncErrors(async (req, res, next) => {
  const data = await Country.find({ status: 1 });
  res.status(200).json({
    success: true,
    data
  });
});
module.exports = {
  getCountries,
  createCountry,
  SingleCountry,
  EditCountry,
  DeleteCountry,
  getAllCountries
};
