const express = require("express");

const router = express.Router();

const { user: ctrl } = require("../../controllers");

const { protect } = require("../../middlewares/user/protect");

router.use(protect);

router.get("/current", ctrl.current);

router.get("/logout", ctrl.logout);

router.patch("/info", ctrl.updateInfo);

module.exports = router;
