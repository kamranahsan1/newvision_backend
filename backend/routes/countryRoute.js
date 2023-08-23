const express = require("express");
const { getCountries } = require("../controller/Country");
const router = express.Router();

router.route("/countries").get(getCountries);

module.exports = router;
