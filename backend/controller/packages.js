const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Packages = require("../models/Packages");

const getPackages = catchAsyncErrors(async (req, res, next) => {
  let { category } = req.query;
  category = category || "Uae Packages";

  const packages = await Packages.find();
  res.status(200).json(packages);
});

module.exports = {
  getPackages,
};
