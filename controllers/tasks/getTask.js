const { Task } = require("../../models");

const { catchAsync } = require("../../utils");

const getTask = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const { date } = req.params;

  const tasks = await Task.find({ owner: _id }).select(
    "-owner -updatedAt -createdAt"
  );

 const tasksDate = await Task.find({$expr: {$eq: [{$month: date}, 1]}}).select(
    "-owner -updatedAt -createdAt"
  );

  console.log(tasksDate);

  res.status(200).json({
     data: tasks,
  });
});

module.exports = getTask;
