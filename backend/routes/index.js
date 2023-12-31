const express = require("express");
const router = express.Router();

const countryRoute = require("./countryRoute");
const visacategoryRoute = require("./visacategoryRoute");
const Contact = require("./Contact");
const tour = require("./Tour");
const packageRoute = require("./packagesRoute");
const SubscriberRoutes = require("./Subscriber");
const userroutes=require("./userroutes")

router.use(SubscriberRoutes);
router.use(userroutes);
router.use(packageRoute);
router.use(countryRoute);
router.use(visacategoryRoute);
router.use(tour);
router.use(Contact);

module.exports = router;
