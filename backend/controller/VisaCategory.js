const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const VisaCategory = require("../models/VisaCategory");
const ApiFeatures = require("../utils/ApiFeatures");

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

module.exports = {
  getViewCategory,
};
