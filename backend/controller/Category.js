const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/Category");

const SingleCategory = catchAsyncErrors(async (req, res, next) => {
  const data = await Category.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
});

const PostCategory = catchAsyncErrors(async (req, res, next) => {
  const { name, slug, description, viewType } = req.body;
  try {
    const data = await Category.create({
      name: name,
      slug: slug,
      description: description,
      viewType: viewType,
    });

    res.status(200).json({ message: "Form data saved successfully", data });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: error });
  }
});

const DeleteCategory = catchAsyncErrors(async (req, res, next) => {
  const user = await Category.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

const EditCategory = catchAsyncErrors(async (req, res, next) => {
  const { name, slug, description, viewType } = req.body;
  try {
    const data = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        slug: slug,
        description: description,
        viewType: viewType,
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

module.exports = {
  PostCategory,
  DeleteCategory,
  SingleCategory,
  EditCategory,
};
