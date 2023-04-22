const {Task} = require("../../models");
const createHttpError = require("http-errors");
const { catchAsync } = require("../../utils");

const updateTask = catchAsync(async (req, res, next) => {
  const taskData = req.body;

  if (Object.keys(taskData).length === 0)
    return next(createHttpError.NotFound("missing fields"));

  const { id } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    updatedTask,
  });
});

module.exports = updateTask;