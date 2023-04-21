const express = require("express");

const router = express.Router();

const { user: ctrl } = require("../../controllers");

const protect = require("../../middlewares/user/protect");

router.post("/current", ctrl.current);

router.get("/logout", protect, ctrl.logout);

router.patch("/info", ctrl.updateInfo);

module.exports = router;
