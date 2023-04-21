const Task = require("../../models/taskShema");
const createHttpError = require("http-errors");
const { catchAsync } = require("../../utils");

const get = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const tasks = await Task.find({ owner: _id });

  if (tasks.length === 0)
    return next(createHttpError.NotFound("missing fields"));

  res.status(200).json({
    tasks,
  });
});

module.exports = get;
