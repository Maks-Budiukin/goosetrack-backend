const {Task} = require("../../models");

const { catchAsync } = require("../../utils");

const getTask = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  console.log(_id)

  const tasks = await Task.find({ ownerTask: _id });

  console.log(tasks)

 
  res.status(200).json({
    tasks,
  });
});

module.exports = getTask;
