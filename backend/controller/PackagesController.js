const ApiFeatures = require("../utils/ApiFeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Packages = require("../models/Packages");
const Category = require("../models/Category");
const { upload } = require("../upload");

const getPackages = catchAsyncErrors(async (req, res, next) => {
  let { category } = req.query;
  category = category || "Uae Packages";

  const packages = await Packages.find();
  res.status(200).json(packages);
});

const getAllPackages = catchAsyncErrors(async (req, res, next) => {
  let { resultPerPage, category } = req.query;
  const cateData = Category.findById(category);
  if (!cateData) {
    return res
      .status(404)
      .json({ status: false, message: "Category not found" });
  }
  resultPerPage = resultPerPage || 12;
  const apiFeatures = new ApiFeatures(Packages.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const packages = await apiFeatures.query;
  const packagesCount = packages.length;

  res.status(200).json({
    status: true,
    packages,
    packagesCount,
    resultPerPage,
  });
});

const getCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json(categories);
  /*
  const cacheKey = "categories";
  const cachedCategories = cache.get(cacheKey);
  if (cachedCategories) {
    res.status(200).json(cachedCategories);
  } else {
    const categories = await Category.find();
    cache.set(cacheKey, categories);
    res.status(200).json(categories);
  }*/
});

const CreatePackage = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    description,
    inclusionsList,
    attractions,
    category,
    featured,
    country,
    countryCode,
    status,
  } = req.body;
  const uploadedFile = req.files.mainImage;
  await upload(uploadedFile);

  const data = await Packages.create({
    name: name,
    description: description,
    inclusionsList: inclusionsList,
    attractions: attractions,
    category: category,
    featured: featured,
    country: country,
    countryCode: countryCode,
    status: status,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`,
  });
  res.status(200).json({
    success: true,
    data,
  });
});

const editPackage = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    description,
    inclusionsList,
    attractions,
    category,
    featured,
    country,
    countryCode,
    status,
  } = req.body;
  let imageroute = previousimage;
  if (req.files?.mainImage) {
    const uploadedFile = req.files.mainImage;
    imageroute = `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`;
    await upload(uploadedFile);
  }

  const data = await Packages.findByIdAndUpdate({
    name: name,
    description: description,
    inclusionsList: inclusionsList,
    attractions: attractions,
    category: category,
    featured: featured,
    country: country,
    countryCode: countryCode,
    status: status,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`,
  });
  res.status(200).json({
    success: true,
    data,
  });
});

const DeletePackage = catchAsyncErrors(async (req, res, next) => {
  const user = await Packages.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

const SinglePackage = catchAsyncErrors(async (req, res, next) => {
  const data = await Packages.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
});

module.exports = {
  getPackages,
  getAllPackages,
  editPackage,
  SinglePackage,
  getCategories,
  CreatePackage,
  DeletePackage,
};
