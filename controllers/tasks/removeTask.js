const createHttpError = require("http-errors");
const { Task } = require("../../models");
const { catchAsync } = require("../../utils");

const removeTask = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const tasks = await Task.findById(id).select("owner");

  const { _id } = req.user;

  if (!tasks.owner.equals(_id)) return next(createHttpError.NotFound());

  await Task.findByIdAndRemove(id);

  res.status(200).json({ message: "Task removed" });
});

module.exports = removeTask;
