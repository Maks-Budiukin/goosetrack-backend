const express = require("express");

const router = express.Router();

const { auth: ctrl } = require("../../controllers");

router.post("/register", ctrl.signup);

router.post("/login", ctrl.login);

router.post("/current", ctrl.getCurrent);

router.get("/logout", ctrl.logout);

router.patch("/info", ctrl.updateUser);

module.exports = router;
