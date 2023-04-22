const express = require("express");
// const multer = require("multer");

const router = express.Router();

// const storage = multer.memoryStorage();

// const uploads = multer({ storage });

const { user: ctrl } = require("../../controllers");

const { protect } = require("../../middlewares/user/protect");

router.use(protect);

router.get("/current", ctrl.current);

router.get("/logout", ctrl.logout);

router.patch("/info", ctrl.updateInfo);

router.post("/info", ctrl.updateAvatar);

module.exports = router;
