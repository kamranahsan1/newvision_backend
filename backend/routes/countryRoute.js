const express = require("express");
const { getCountries } = require("../controller/Country");
const router = express.Router();

router.route("/api/countries").get(getCountries);

module.exports = router;
