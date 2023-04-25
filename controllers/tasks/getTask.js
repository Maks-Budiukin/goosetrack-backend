const { Task } = require("../../models");

const { catchAsync } = require("../../utils");

const getTask = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const { year, month } = req.query;
  
  // const tasks = await Task.find({ owner: _id }).select(
  //   "-owner -updatedAt -createdAt"
  // );

  const tasks = await Task.find({
    $and: [
      { owner: _id },
      {
        $expr:
          {
          $and: [
              { $eq: [{ $year: "$date" }, year] },
              { $eq: [{ $month: "$date" }, month] }
           ]
        }
      }
    ]
  }).select(
    "-owner -updatedAt -createdAt"
  );
  


  res.status(200).json({
    task: tasks,
  });
});

module.exports = getTask;
