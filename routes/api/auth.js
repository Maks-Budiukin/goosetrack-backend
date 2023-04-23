const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const { checkRegisterData } = require("../../middlewares/user/checkRegisterData");
const { checkLoginData } = require("../../middlewares/user/checkLoginData");

router.post("/register", checkRegisterData, ctrl.register);

router.post("/login", checkLoginData, ctrl.login);

module.exports = router;
