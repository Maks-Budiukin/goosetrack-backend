const express = require("express");

const router = express.Router();

const { user: ctrl } = require("../../controllers");

router.post("/current", ctrl.getCurrent);

router.get("/logout", ctrl.logout);

router.patch("/info", ctrl.updateUser);

module.exports = router;
