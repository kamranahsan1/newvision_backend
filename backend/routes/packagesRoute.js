const express = require("express");
const {
  getAllPackages,
  getCategories,
  CreatePackage,
  DeletePackage
} = require("../controller/PackagesController");
const {
  PostCategory,
  DeleteCategory,
  EditCategory,
  SingleCategory
} = require("../controller/Category");
const router = express.Router();

router.route("/api/packages").get(getAllPackages);
router.route("/api/CreatePackage").post(CreatePackage);
router.route("/api/categories").get(getCategories);
router.route("/api/SingleCategory/:id").get(SingleCategory);
router.route("/api/DeleteCategory/:id").delete(DeleteCategory);
router.route("/api/EditCategory/:id").put(EditCategory);
router.route("/api/DeletePackage/:id").delete(DeletePackage);
router.route("/api/postcategory").post(PostCategory);

module.exports = router;
