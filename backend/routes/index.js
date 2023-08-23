const express = require("express");
const router = express.Router();

const packageRoute = require("./packagesRoute");
const countryRoute = require("./countryRoute");
const visacategoryRoute = require("./visacategoryRoute");

router.use(packageRoute);
router.use(countryRoute);
router.use(visacategoryRoute);

module.exports = router;
