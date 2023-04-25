const { Task } = require("../../models");
const { catchAsync } = require("../../utils");

const addTask = catchAsync(async (req, res, next) => {
  const newTaskData = {
    ...req.body,
    owner: req.user._id,
  };
  const newTask = await Task.create(newTaskData).select(
    "-owner -updatedAt -createdAt"
  );

  res.status(201).json({
     data: newTask,
  });
});

module.exports = addTask;
