const express = require("express");
const router = express.Router();
const { CreateUser ,loginUser,logOut} = require("../controller/userController");
router.route("/api/createuser").post(CreateUser);
router.route("/api/loginUser").post(loginUser);
router.route("/api/logOut").post(logOut);
module.exports = router;
