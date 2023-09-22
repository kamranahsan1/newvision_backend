const ApiFeatures = require("../utils/ApiFeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Tours = require("../models/Tours");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const gettoursv2 = catchAsyncErrors(async (req, res, next) => {
  const data = await Tours.find();
  res.status(200).json({
    success: true,
    data,
  });
});
const getTour = catchAsyncErrors(async (req, res, next) => {
  const params = req.query;
  let id = null;
  let days = null;
  if (params.id && params.id !== undefined) {
    try {
      id = new ObjectId(params.id);
    } catch (err) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid Country ID" }),
      };
    }
  }

  if (params.days) {
    days = parseInt(params.days);
    if (isNaN(days)) {
      days = 7;
    }
  }

  delete params["id"];
  delete params["days"];
  params.country = id;
  params.Day = { lte: days };

  const apiFeatures = new ApiFeatures(Tours.find(), params).search().filter();

  if (params.sort) {
    apiFeatures.sort({ _id: 1 });
  }

  const tours = await apiFeatures.query;
  const toursCount = tours.length;

  res.status(200).json({
    status: true,
    tours,
    toursCount,
  });
});

module.exports = { getTour, gettoursv2 };
