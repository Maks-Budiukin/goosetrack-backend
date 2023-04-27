const express = require("express");

const router = express.Router();

const { tasks: ctrl } = require("../../controllers");

const { protect } = require("../../middlewares/user/protect");
const { checkCreateData } = require("../../middlewares/task/checkCreateData");
const { checkUpdateData } = require("../../middlewares/task/checkUpdateData");

router.use(protect);

router.get("/", ctrl.getTask);

router.post("/", checkCreateData, ctrl.addTask);

router.patch("/:id",checkUpdateData , ctrl.updateTask);

router.delete("/:id", ctrl.removeTask);

module.exports = router;
