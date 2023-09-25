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

const getPackageBySlug = catchAsyncErrors(async (req, res, next) => {
  try {
    let { slug } = req.params;
    const packages = await Packages.findOne({ slug: slug });

    if (packages.length === 0) {
      return res.status(404).json({ message: "Slug not found" });
    }
    res.status(200).json(packages);
  } catch (error) {
    next(error);
  }
});

const getAllPackages = catchAsyncErrors(async (req, res, next) => {
  let { resultPerPage, category } = req.query;
  resultPerPage = resultPerPage || 12;

  let condition = {};
  if (category) {
    condition.category = category;
  }
  condition.status = 1;
  const apiFeatures = new ApiFeatures(Packages.find(condition), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const packagesCount = await Packages.countDocuments(condition);
  const packages = await apiFeatures.query;

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

const DeletePackage = catchAsyncErrors(async (req, res, next) => {
  const user = await Packages.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
module.exports = {
  getPackages,
  getPackageBySlug,
  getAllPackages,
  getCategories,
  CreatePackage,
  DeletePackage,
};
