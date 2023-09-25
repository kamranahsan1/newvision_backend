const express = require("express");
const {
  getTour,
  gettoursv2,
  CreateTour,
  DeleteTours,
  getGtour,
  EditTour,SingleTour
} = require("../controller/GenerateTour");
const router = express.Router();

router.route("/api/getGtour").get(getGtour);
router.route("/api/generate-tour").get(getTour);
router.route("/api/generate-tourv2").get(gettoursv2);
router.route("/api/CreateTour").post(CreateTour);
router.route("/api/DeleteTours/:id").delete(DeleteTours);
router.route("/api/SingleTour/:id").get(SingleTour);
router.route("/api/EditTour/:id").put(EditTour);

module.exports = router;
