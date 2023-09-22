const express = require("express");
const {
  getViewCategory,
  getCategories,
  PostVisa,
  getVisas,
  PostVisaCategory,
  DeleteVisa,
  DeleteVisaCategory
} = require("../controller/VisaCategory");
const router = express.Router();

router.route("/api/viewcategories").get(getViewCategory);
router.route("/api/getVisas").get(getVisas);
router.route("/api/PostVisa").post(PostVisa);
router.route("/api/PostVisaCategory").post(PostVisaCategory);
router.route("/api/DeleteVisa/:id").delete(DeleteVisa);
router.route("/api/DeleteVisaCategory/:id").delete(DeleteVisaCategory);

module.exports = router;
