const ApiFeatures = require("../utils/ApiFeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Tours = require("../models/Tours");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { upload } = require("../upload");
const EditTour = catchAsyncErrors(async (req, res, next) => {
  const { time, Day, type, country, description, name, previousimage } =
    req.body;
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
    const data = await Tours.findByIdAndUpdate(
      req.params.id,
      {
        time: time,
        Day: Day,
        type: type,
        country: country,
        description: description,
        name: name,
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
const gettoursv2 = catchAsyncErrors(async (req, res, next) => {
  const data = await Tours.find().populate("country");
  res.status(200).json({
    success: true,
    data
  });
});
const DeleteTours = catchAsyncErrors(async (req, res, next) => {
  const user = await Tours.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully"
  });
});
const CreateTour = catchAsyncErrors(async (req, res, next) => {
  const { time, Day, type, country, description, name } = req.body;
  const uploadedFile = req.files.mainImage;
  await upload(uploadedFile);
  const data = await Tours.create({
    time: time,
    Day: Day,
    type: type,
    country: country,
    description: description,
    name: name,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`
  });
  res.status(200).json({
    success: true,
    data
  });
});
const getTour = catchAsyncErrors(async (req, res, next) => {
  const params = req.query;
  let id = null;
  let days = null;
  let sort = null;
  if (params.id && params.id !== undefined) {
    try {
      id = new ObjectId(params.id);
    } catch (err) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid Country ID" })
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
  // if (!sort) {
  //   apiFeatures.sort({ _id: 1 });
  // } else {
  //   apiFeatures.sort(sort);
  // }

  const tours = await apiFeatures.query;
  const toursCount = tours.length;

  res.status(200).json({
    status: true,
    tours,
    toursCount
  });
});
const getGtour = catchAsyncErrors(async (req, res, next) => {
  const data = await Tours.find({ status: 1 });
  res.status(200).json({
    success: true,
    data
  });
});
const SingleTour = catchAsyncErrors(async (req, res, next) => {
  const data = await Tours.findById(req.params.id);
  res.status(200).json({
    success: true,
    data
  });
});

module.exports = {
  getTour,
  SingleTour,
  gettoursv2,
  CreateTour,
  DeleteTours,
  getGtour,
  EditTour
};
