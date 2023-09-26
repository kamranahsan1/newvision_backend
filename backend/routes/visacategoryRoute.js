const express = require("express");
const {
  getViewCategory,
  getCategories,
  getVisaCategories,
  SingleVisaSlug,
  PostVisa,
  getVisas,
  PostVisaCategory,
  DeleteVisa,
  DeleteVisaCategory,
  SingleVisaCategory,
  EditVisaCategory,
  SingleVisa,
  EditVisa,
  getAllVisas,
} = require("../controller/VisaCategory");
const router = express.Router();

router.route("/api/EditVisa/:id").put(EditVisa);
router.route("/api/EditVisaCategory/:id").put(EditVisaCategory);
router.route("/api/SingleVisaCategory/:id").get(SingleVisaCategory);
router.route("/api/visaCategories").get(getViewCategory);
router.route("/api/getAllVisas").get(getAllVisas);
router.route("/api/SingleVisa/:id").get(SingleVisa);
router.route("/api/SingleVisaSlug/:slug").get(SingleVisaSlug);
router.route("/api/viewcategories").get(getViewCategory);
router.route("/api/getVisas").get(getVisas);
router.route("/api/PostVisa").post(PostVisa);
router.route("/api/PostVisaCategory").post(PostVisaCategory);
router.route("/api/DeleteVisa/:id").delete(DeleteVisa);
router.route("/api/DeleteVisaCategory/:id").delete(DeleteVisaCategory);

module.exports = router;
