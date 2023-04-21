const express = require("express");

const router = express.Router();

const { columns: ctrl } = require("../../controllers");

router.get("/", ctrl.getColumns);

router.post("/", ctrl.postColumn);

router.patch("/:id", ctrl.updateColumn);

router.delete("/:id", ctrl.deleteColumn);

module.exports = router;
