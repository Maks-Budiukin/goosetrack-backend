const express = require("express");

const router = express.Router();

const { auth: ctrl } = require("../../controllers");

router.post("/register", ctrl.signup);

router.post("/login", ctrl.login);

module.exports = router;
