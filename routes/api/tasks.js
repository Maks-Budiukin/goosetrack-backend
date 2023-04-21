const express = require("express");

const router = express.Router();

const { tasks: ctrl } = require("../../controllers");

router.get("/", ctrl.getTasks);

router.post("/", ctrl.postTask);

router.patch("/:id", ctrl.updateTask);

router.delete("/:id", ctrl.deleteTask);

module.exports = router;
