const { Task } = require("../../models");

const { catchAsync } = require("../../utils");

const getTask = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const tasks = await Task.find({ owner: _id }).select(
    "-owner -updatedAt -createdAt"
  );

  res.status(200).json({
    tasks,
  });
});

module.exports = getTask;
