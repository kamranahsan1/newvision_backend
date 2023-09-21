const express = require("express");
const {
  getViewCategory,
  getCategories,
  PostVisa,
  getVisas,
  PostVisaCategory
} = require("../controller/VisaCategory");
const router = express.Router();

router.route("/api/viewcategories").get(getViewCategory);
router.route("/api/getVisas").get(getVisas);
router.route("/api/PostVisa").post(PostVisa);
router.route("/api/PostVisaCategory").post(PostVisaCategory);

module.exports = router;
