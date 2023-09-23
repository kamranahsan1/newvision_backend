const express = require("express");
const {
  getCountries,
  createCountry,
  getAllCountries,
} = require("../controller/Country");
const router = express.Router();

router.route("/api/countries").get(getCountries);
router.route("/api/getCountries").get(getAllCountries);
router.route("/api/createCountry").post(createCountry);

module.exports = router;
