const express = require("express");
const { getSubscriber, postsubscriber } = require("../controller/Subscriber");
const router = express.Router();

router.route("/api/getSubscriber").get(getSubscriber);
router.route("/api/postsubscriber").post(postsubscriber);

module.exports = router;
