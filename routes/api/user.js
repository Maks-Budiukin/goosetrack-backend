const express = require("express");

const router = express.Router();

const uploadImage = require("../../middlewares/user/uploadImage");

const { user: ctrl } = require("../../controllers");

const { protect } = require("../../middlewares/user/protect");
const { checkUpdateInfo } = require("../../middlewares/user/checkUpdateInfo");

router.use(protect);

router.get("/current", ctrl.current);

router.get("/logout", ctrl.logout);

router.patch(
  "/info",
  uploadImage.single("image"),
  checkUpdateInfo,
  ctrl.updateInfo
);

// router.post("/info", uploadImage.single("image"), ctrl.updateAvatar);

module.exports = router;
