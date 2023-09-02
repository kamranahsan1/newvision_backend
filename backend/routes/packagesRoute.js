const express = require("express");
const {
  getPackages,
  getAllPackages,
  getCategories,
} = require("../controller/PackagesController");
const router = express.Router();

router.route("/packages").get(getAllPackages);
router.route("/categories").get(getCategories);

module.exports = router;
