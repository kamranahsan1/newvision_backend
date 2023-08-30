const express = require("express");
const { getTour } = require("../controller/GenerateTour");
const router = express.Router();

router.route("/generate-tour").get(getTour);

module.exports = router;
