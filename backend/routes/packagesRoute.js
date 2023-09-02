const express = require("express");
const { getPackages } = require("../controller/PackagesController");
const router = express.Router();

router.route("/packages").get(getAllPackages);
router.route("/categories").get(getCategories);

module.exports = router;
