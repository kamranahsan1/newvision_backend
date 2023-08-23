const express = require("express");
const { getAllPackages, getCategories } = require("../controller/packages");
const router = express.Router();

router.route("/packages").get(getAllPackages);
router.route("/categories").get(getCategories);

module.exports = router;
