const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const VisaCategory = require("../models/VisaCategory");
const VisaSchema = require("../models/Visa");
const ApiFeatures = require("../utils/ApiFeatures");
const Visa = require("../models/Visa");
const { upload } = require("../upload");
const SingleVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const data = await VisaCategory.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
});
const SingleVisa = catchAsyncErrors(async (req, res, next) => {
  const data = await VisaSchema.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
});
const EditVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const { description, name, parent, slug, status, previousimage } = req.body;
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
    const data = await VisaCategory.findByIdAndUpdate(
      req.params.id,
      {
        parent: parent,
        slug: slug,
        status: status || 1,
        description: description,
        name: name,
        mainImage: imageroute,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
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
  const data = await Visa.find();
  res.status(200).json({
    success: true,
    data,
  });
});
const PostVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const uploadedFile = req.files.mainImage;
  console.log(
    `${req.protocol}"//"${req.hostname}:5000'/uploads/'${uploadedFile.name}`
  );
  const { description, name, parent, slug, status } = req.body;
  // const uploadPath = __dirname + `\\uploads\\` + uploadedFile.name;

  // uploadedFile.mv(uploadPath, (err) => {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
  // });
  await upload(uploadedFile);
  const data = await VisaCategory.create({
    parent: parent,
    slug: slug,
    status: status,
    description: description,
    name: name,
    mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`,
  });
  res.status(200).json({
    success: true,
    data,
  });

  // res.status(200).json({
  //   success: true
  // });
});
const DeleteVisaCategory = catchAsyncErrors(async (req, res, next) => {
  const user = await VisaCategory.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
const DeleteVisa = catchAsyncErrors(async (req, res, next) => {
  const user = await VisaSchema.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
const PostVisa = catchAsyncErrors(async (req, res, next) => {
  const {
    NumberOfStay,
    NumberOfStayName,
    category,
    country,
    description,
    name,
  } = req.body;
  let data = {};

  if (req.files && req.files.mainImage !== null) {
    const uploadedFile = req.files.mainImage;
    await upload(uploadedFile);
    data = {
      NumberOfStay: NumberOfStay,
      NumberOfStayName: NumberOfStayName,
      category: category,
      country: country,
      description: description,
      name: name,
      mainImage: `${req.protocol}://${req.hostname}:5000/uploads/${uploadedFile.name}`,
    };
  } else {
    data = {
      NumberOfStay: NumberOfStay,
      NumberOfStayName: NumberOfStayName,
      category: category,
      country: country,
      description: description,
      name: name,
    };
  }

  const createdData = await VisaSchema.create(data);

  res.status(200).json({
    success: true,
    data: createdData,
  });
});
const EditVisa = catchAsyncErrors(async (req, res, next) => {
  const {
    NumberOfStay,
    NumberOfStayName,
    category,
    country,
    description,
    name,
    previousimage,
  } = req.body;
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
    const data = await VisaSchema.findByIdAndUpdate(
      req.params.id,
      {
        NumberOfStay: NumberOfStay,
        NumberOfStayName: NumberOfStayName,
        category: category,
        country: country,
        description: description,
        name: name,
        mainImage: imageroute,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
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

  const visacateData = await VisaCategory.findOne({ slug: slug });
  if (!visacateData) {
    return res
      .status(404)
      .json({ status: false, message: "Visa Category not found" });
  }

  resultPerPage = resultPerPage || 12;
  const apiFeatures = new ApiFeatures(Visa.find(), req.query)
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
};
