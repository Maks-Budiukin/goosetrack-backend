const { Task } = require("../../models");
const { catchAsync } = require("../../utils");

const addTask = catchAsync(async (req, res, next) => {
  const newTaskData = {
    ...req.body,
    owner: req.user._id,
  };
  const newTask = await Task.create(newTaskData);

  res.status(200).json({
    task: newTask,
  });
});

module.exports = addTask;
