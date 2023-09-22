const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/Category");
const PostCategory = catchAsyncErrors(async (req, res, next) => {
  const { name, slug, description, viewType } = req.body;
  try {
    //   console.log(name);
    //   const newContact = new Category({
    //     name,
    //     slug,
    //     description,
    //     viewType
    //   });
    const data = await Category.create({
      name: name,
      slug: slug,
      description: description,
      viewType: viewType
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
    message: "User Deleted Successfully"
  });
});
module.exports = {
  PostCategory,
  DeleteCategory
};
