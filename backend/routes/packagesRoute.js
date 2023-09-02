import express from "express";
import { getAllPackages, getCategories } from "../controller/Packages";

const router = express.Router();

router.route("/packages").get(getAllPackages);
router.route("/categories").get(getCategories);

module.exports = router;
