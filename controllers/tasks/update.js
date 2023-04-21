const {Task} = require("../../models");
const createHttpError = require("http-errors");
const { catchAsync } = require("../../utils");

const update = catchAsync(async (req, res, next) => {
  const taskData = req.body;

  if (Object.keys(taskData).length === 0)
    return next(createHttpError.NotFound("missing fields"));

  const { TaskId } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(TaskId, req.body, {
    new: true,
  });

  res.status(200).json({
    updatedTask,
  });
});

module.exports = update;
