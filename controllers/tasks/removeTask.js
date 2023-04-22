const {Task} = require("../../models");
const { catchAsync } = require("../../utils");

const removeTask = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await Task.findByIdAndRemove(id);

  res.status(200).json({ message: "Task remove" });
});

module.exports = removeTask;
