const express = require("express");
const {
  getPackages,
  getAllPackages,
  getCategories,
  
} = require("../controller/PackagesController");
const { PostCategory,DeleteCategory } = require("../controller/Category");
const {CreatePackage,DeletePackage}=require("../controller/Packages")
const router = express.Router();

router.route("/api/packages").get(getAllPackages);
router.route("/api/CreatePackage").post(CreatePackage);
router.route("/api/categories").get(getCategories);
router.route("/api/DeleteCategory/:id").delete(DeleteCategory);
router.route("/api/DeletePackage/:id").delete(DeletePackage);
router.route("/postcategory").post(PostCategory);

module.exports = router;
