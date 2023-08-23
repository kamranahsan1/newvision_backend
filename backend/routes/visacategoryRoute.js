const express = require("express");
const {
  getViewCategory,
  getCategories,
} = require("../controller/VisaCategory");
const router = express.Router();

router.route("/viewcategories").get(getViewCategory);

module.exports = router;
