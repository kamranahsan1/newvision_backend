const express = require("express");
const {
  getCountries,
  createCountry,
  getAllCountries,
  EditCountry,
  SingleCountry,
  DeleteCountry
} = require("../controller/Country");
const router = express.Router();

router.route("/api/DeleteCountry/:id").delete(DeleteCountry);
router.route("/api/SingleCountry/:id").get(SingleCountry);
router.route("/api/EditCountry/:id").put(EditCountry);
router.route("/api/countries").get(getCountries);
router.route("/api/getCountries").get(getAllCountries);
router.route("/api/createCountry").post(createCountry);

module.exports = router;
