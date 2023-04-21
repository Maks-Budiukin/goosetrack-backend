const Task = require("../../models/");
const { catchAsync } = require("../../utils");

const add = catchAsync(async (req, res, next) => {
  const newTaskData = {
    ...req.body,
    owner: req.user,
  };
  const newTask = await Task.create(newTaskData);

  res.status(200).json({
    todo: newTask,
  });
});

module.exports = add;
