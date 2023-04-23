const express = require("express");

const router = express.Router();

const uploadImage = require("../../middlewares/user/uploadImage");

const { user: ctrl } = require("../../controllers");

const { protect } = require("../../middlewares/user/protect");

router.use(protect);

router.get("/current", ctrl.current);

router.get("/logout", ctrl.logout);

router.patch("/info", ctrl.updateInfo);

router.post("/info", uploadImage.single("image"), ctrl.updateAvatar);

module.exports = router;
