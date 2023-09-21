const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const VisaCategory = require("../models/VisaCategory");
const VisaSchema = require("../models/Visa");
const ApiFeatures = require("../utils/ApiFeatures");
const Visa = require("../models/Visa");

const getViewCategory = catchAsyncErrors(async (req, res, next) => {
  let { resultPerPage } = req.query;
  resultPerPage = resultPerPage || 4;

  const apiFeatures = new ApiFeatures(VisaCategory.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const data = await apiFeatures.query;
  res.status(200).json(data);
});
const getVisas = catchAsyncErrors(async (req, res, next) => {
  const data = await Visa.find();
  res.status(200).json({
    success: true,
    data
  });
});
const PostVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const { description, name, parent, slug, status } = req.body;
  const data = await VisaCategory.create({
    parent: parent,
    slug: slug,
    status: status,
    description: description,
    name: name
  });
  res.status(200).json({
    success: true,
    data
  });
});
const PostVisa = catchAsyncErrors(async (req, res, next) => {
  const {
    NumberOfStay,
    NumberOfStayName,
    category,
    country,
    description,
    name
  } = req.body;
  const data = await VisaSchema.create({
    NumberOfStay: NumberOfStay,
    NumberOfStayName: NumberOfStayName,
    category: category,
    country: country,
    description: description,
    name: name
  });
  res.status(200).json({
    success: true,
    data
  });
});

module.exports = {
  PostVisaCategory,
  getViewCategory,
  getVisas,
  PostVisa
};
