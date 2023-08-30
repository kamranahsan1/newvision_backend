const express = require("express");
const router = express.Router();

const packageRoute = require("./packagesRoute");
const countryRoute = require("./countryRoute");
const visacategoryRoute = require("./visacategoryRoute");
const tour = require("./Tour");

router.use(packageRoute);
router.use(countryRoute);
router.use(visacategoryRoute);
router.use(tour);

module.exports = router;
