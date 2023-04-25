const express = require("express");

const router = express.Router();

const { tasks: ctrl } = require("../../controllers");

const { protect } = require("../../middlewares/user/protect");

router.use(protect);

router.get("/:date", ctrl.getTask);

router.post("/", ctrl.addTask);

router.patch("/:id", ctrl.updateTask);

router.delete("/:id", ctrl.removeTask);

module.exports = router;
