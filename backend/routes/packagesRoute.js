const express = require("express");
const { getAllPackages, getCategories } = require("../controller/Packages");
const router = express.Router();

console.log(getAllPackages);
console.log(getCategories);
//router.route("/packages").get(getAllPackages);
//router.route("/categories").get(getCategories);

module.exports = router;
