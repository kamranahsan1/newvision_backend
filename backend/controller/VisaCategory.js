const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const VisaCategory = require("../models/VisaCategory");
const VisaSchema = require("../models/Visa");
const ApiFeatures = require("../utils/ApiFeatures");
const Visa = require("../models/Visa");
const { upload } = require("../upload");
const { generateFileName } = require("../utils/FileNameGeneration");
const SingleVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const data = await VisaCategory.findById(req.params.id);
  res.status(200).json({
    success: true,
    data
  });
});
const SingleVisa = catchAsyncErrors(async (req, res, next) => {
  const data = await VisaSchema.findById(req.params.id);
  res.status(200).json({
    success: true,
    data
  });
});
const EditVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const {
    description,
    name,
    parent,
    slug,
    status,
    previousimage,
    isNavigation
  } = req.body;
  let imageroute = previousimage;
  if (req.files?.mainImage) {
    const ImageName = generateFileName();
    const uploadedFile = req.files.mainImage;
    imageroute = `${req.protocol}://${req.hostname}:5000/uploads/${ImageName}`;
  }
  try {
    const data = await VisaCategory.findByIdAndUpdate(
      req.params.id,
      {
        parent: parent,
        slug: slug,
        status: status || 1,
        description: description,
        isNavigation: isNavigation,
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
  const data = await Visa.find().populate("category").populate("country");
  res.status(200).json({
    success: true,
    data
  });
});
const PostVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const uploadedFile = req.files.mainImage;
  console.log(uploadedFile);
  const { description, name, parent, slug, status, isNavigation } = req.body;
  const ImageName = generateFileName();
  await upload(uploadedFile, ImageName);
  const data = await VisaCategory.create({
    parent: parent,
    isNavigation: isNavigation,
    slug: slug,
    status: status,
    description: description,
    name: name,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${ImageName}.${
      uploadedFile.mimetype.split("/")[1]
    }`
  });
  res.status(200).json({
    success: true,
    data
  });

  // res.status(200).json({
  //   success: true
  // });
});
const DeleteVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const user = await VisaCategory.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully"
  });
});
const DeleteVisa = catchAsyncErrors(async (req, res, next) => {
  const user = await VisaSchema.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully"
  });
});
const PostVisa = catchAsyncErrors(async (req, res, next) => {
  const {
    NumberOfStay,
    NumberOfStayName,
    category,
    country,
    type,
    description,
    name
  } = req.body;
  let data = {};

  if (req.files && req.files.mainImage !== null) {
    const uploadedFile = req.files.mainImage;
  const ImageName = generateFileName();
  await upload(uploadedFile, ImageName);
    data = {
      NumberOfStay: NumberOfStay,
      NumberOfStayName: NumberOfStayName,
      type: type,
      category: category,
      country: country,
      description: description,
      name: name,
     mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${ImageName}.${
      uploadedFile.mimetype.split("/")[1]
    }`
    };
  } else {
    data = {
      NumberOfStay: NumberOfStay,
      NumberOfStayName: NumberOfStayName,
      category: category,
      country: country,
      description: description,
      name: name
    };
  }

  const createdData = await VisaSchema.create(data);

  res.status(200).json({
    success: true,
    data: createdData
  });
});
const EditVisa = catchAsyncErrors(async (req, res, next) => {
  const {
    NumberOfStay,
    NumberOfStayName,
    tour,
    category,
    country,
    description,
    type,
    name,
    previousimage
  } = req.body;
  let imageroute = previousimage;
  if (req.files?.mainImage) {
    const uploadedFile = req.files.mainImage;
  const ImageName = generateFileName();
  await upload(uploadedFile, ImageName);
    console.log(
      `${req.protocol}"//"${req.hostname}:5000'/uploads/'${uploadedFile.name}`
    );
    imageroute = `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`;
  }
  try {
    const data = await VisaSchema.findByIdAndUpdate(
      req.params.id,
      {
        NumberOfStay: NumberOfStay,
        NumberOfStayName: NumberOfStayName,
        tour: tour,
        type: type,
        category: category,
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
const getVisaCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await VisaCategory.find();
  res.status(200).json(categories);
});
const getAllVisas = catchAsyncErrors(async (req, res, next) => {
  let { resultPerPage, slug } = req.query;

  if (!slug) {
    return res
      .status(400)
      .json({ status: false, message: "Slug parameter is missing" });
  }

  const visacateData = await VisaCategory.findOne({ slug: slug });
  if (!visacateData) {
    return res
      .status(404)
      .json({ status: false, message: "Visa Category not found" });
  }

  resultPerPage = resultPerPage || 12;
  delete req.query.slug;
  req.query["category"] = visacateData._id;
  console.log("req.query", req.query);
  const apiFeatures = new ApiFeatures(Visa.find(), req.query)
    .search()
    .filter()
    .sort()
    .pagination(resultPerPage);

  const visaCount = await Visa.countDocuments({ category: visacateData._id });
  const visas = await apiFeatures.query;

  res.status(200).json({
    status: true,
    visas,
    visaCount,
    resultPerPage
  });
});
const SingleVisaSlug = catchAsyncErrors(async (req, res, next) => {
  const data = await VisaCategory.findOne(req.params.slug);
  if (!data) {
    res.status(404).json({
      success: false,
      message: "Visa Category Not Found!"
    });
  }
  res.status(200).json({
    success: true,
    data
  });
});

module.exports = {
  getVisaCategories,
  PostVisaCategory,
  getViewCategory,
  getVisas,
  PostVisa,
  DeleteVisaCategory,
  DeleteVisa,
  SingleVisaCategory,
  EditVisaCategory,
  SingleVisa,
  EditVisa,
  getAllVisas,
  SingleVisaSlug
};
