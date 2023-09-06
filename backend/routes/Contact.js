const express = require("express");
const { saveContact } = require("../controller/Contact");
const router = express.Router();

router.route("/contact").post(saveContact);
router.route("/subscribe").post(saveSubscriber);

module.exports = router;
