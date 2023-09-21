const express = require("express");
const {
  getPackages,
  getAllPackages,
  getCategories
} = require("../controller/PackagesController");
const { PostCategory } = require("../controller/Category");
const router = express.Router();

router.route("/api/packages").get(getAllPackages);
router.route("/api/categories").get(getCategories);
router.route("/postcategory").post(PostCategory);

module.exports = router;
