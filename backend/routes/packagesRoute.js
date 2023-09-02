const express = require("express");
const { getAllPackages, getCategories } = require("../controller/Packages.js");
const router = express.Router();

router.route("/packages").get(getAllPackages);
router.route("/categories").get(getCategories);

module.exports = router;
