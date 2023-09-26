const express = require("express");
const {
  getAllPackages,
  getCategories,
  CreatePackage,
  DeletePackage,
  SinglePackage,
  getTourBySlug,
  editPackage,
} = require("../controller/PackagesController");
const {
  PostCategory,
  DeleteCategory,
  EditCategory,
  SingleCategory,
} = require("../controller/Category");
const router = express.Router();
router.route("/api/getTourBySlug/:slug").get(getTourBySlug);
router.route("/api/packages").get(getAllPackages);
router.route("/api/CreatePackage").post(CreatePackage);
router.route("/api/editPackage/:id").post(editPackage);
router.route("/api/categories").get(getCategories);
router.route("/api/SinglePackage/:id").get(SinglePackage);
router.route("/api/SingleCategory/:id").get(SingleCategory);
router.route("/api/DeleteCategory/:id").delete(DeleteCategory);
router.route("/api/EditCategory/:id").put(EditCategory);
router.route("/api/DeletePackage/:id").delete(DeletePackage);
router.route("/api/postcategory").post(PostCategory);

module.exports = router;
