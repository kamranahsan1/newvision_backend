const express = require("express");
const { saveContact, saveSubscriber,getContacts } = require("../controller/Contact");
const router = express.Router();

router.route("/api/contact").post(saveContact);
router.route("/api/getContacts").get(getContacts);
router.route("/subscribe").post(saveSubscriber);

module.exports = router;
