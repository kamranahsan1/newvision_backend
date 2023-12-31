const ApiFeatures = require("../utils/ApiFeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Packages = require("../models/Packages");
const Category = require("../models/Category");
const { upload } = require("../upload");
const { generateUniqueSlug } = require("../utils/Functions");
const { generateFileName } = require("../utils/FileNameGeneration");
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
  const inclusionsArray = inclusionsList.split("\n").map((item) => item.trim());
  const attractionsArray = attractions.split("\n").map((item) => item.trim());

  uploadedFile = req.files.mainImage;
  const ImageName = generateFileName();

  await upload(uploadedFile, ImageName);

  let slug = generateUniqueSlug(name);
  const existingPackage = await Packages.findOne({ slug });

  if (existingPackage) {
    slug = slug + "_" + existingPackage._id;
  }

  const data = await Packages.create({
    name: name,
    slug: slug,
    description: description,
    inclusionsList: inclusionsArray,
    attractions: attractionsArray,
    category: category,
    featured: featured,
    country: country,
    countryCode: countryCode,
    status: status,
    slug: slug,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${ImageName}.${
      uploadedFile.mimetype.split("/")[1]
    }`,
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
    previousimage,
  } = req.body;

  const inclusionsArray = inclusionsList.split("\n").map((item) => item.trim());
  const attractionsArray = attractions.split("\n").map((item) => item.trim());

  let imageroute = previousimage;
  if (req.files?.mainImage) {
    const uploadedFile = req.files.mainImage;
    imageroute = `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`;
    const ImageName = generateFileName();
    await upload(uploadedFile, ImageName);
  }

  let slug = generateUniqueSlug(name);
  const existingPackage = await Packages.findOne({ slug });

  if (existingPackage) {
    slug = slug + "_" + existingPackage._id;
  }

  const data = await Packages.findByIdAndUpdate(req.params.id, {
    name: name,
    slug: slug,
    description: description,
    inclusionsList: inclusionsArray,
    attractions: attractionsArray,
    category: category,
    featured: featured,
    country: country,
    countryCode: countryCode,
    status: status,
    mainImage: imageroute,
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
const getTourBySlug = catchAsyncErrors(async (req, res, next) => {
  const data = await Packages.findOne({ slug: req.params.slug });
  res.status(200).json({
    success: true,
    data,
  });
});
module.exports = {
  getPackages,
  getTourBySlug,
  getAllPackages,
  editPackage,
  SinglePackage,
  getCategories,
  CreatePackage,
  DeletePackage,
};
