const ApiFeatures = require("../utils/ApiFeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Tours = require("../models/Tours");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const getTour = catchAsyncErrors(async (req, res, next) => {
  const params = req.query;
  let id = null;
  let days = null;
  if (params.id && params.id !== undefined) {
    try {
      id = new ObjectId(params.id);
    } catch (err) {
      id = new ObjectId("64e5ac1e7b1799fa0b234724");
    }
  } else {
    id = new ObjectId("64e5ac1e7b1799fa0b234724");
  }

  if (params.days) {
    days = parseInt(params.days);
    if (isNaN(days)) {
      days = 30;
    }
  }
  delete params["id"];
  delete params["days"];
  params.country = id;
  params.Day = { lte: days + 1 };
  const apiFeatures = new ApiFeatures(Tours.find(), params).search().filter();
  const tours = await apiFeatures.query;
  const toursCount = tours.length;

  res.status(200).json({
    status: true,
    tours,
    toursCount,
  });
});

module.exports = { getTour };
