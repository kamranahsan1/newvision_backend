const ApiFeatures = require("../utils/ApiFeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Packages = require("../models/Packages");
const Category = require("../models/Category");

const getPackages = catchAsyncErrors(async (req, res, next) => {
  let { category } = req.query;
  category = category || "Uae Packages";

  const packages = await Packages.find();
  res.status(200).json(packages);
});

const getAllPackages = catchAsyncErrors(async (req, res, next) => {
  let { resultPerPage } = req.query;
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
  cache.set(cacheKey, categories);
  res.status(200).json(categories);
});

module.exports = {
  getPackages,
  getAllPackages,
  getCategories,
};
