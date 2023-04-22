const {Task} = require("../../models");
const { catchAsync } = require("../../utils");

const addTask = catchAsync(async (req, res, next) => {
  const newTaskData = {
    ...req.body,
    ownerTask: req.user,
  };
  const newTask = await Task.create(newTaskData);

  res.status(200).json({
    todo: newTask,
  });
});

module.exports = addTask;
