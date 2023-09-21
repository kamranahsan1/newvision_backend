const express = require("express");
const { getTour ,gettoursv2} = require("../controller/GenerateTour");
const router = express.Router();

router.route("/api/generate-tour").get(getTour);
router.route("/api/generate-tourv2").get(gettoursv2);

module.exports = router;
