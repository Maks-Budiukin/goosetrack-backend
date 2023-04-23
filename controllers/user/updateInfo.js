const { User } = require("../../models");
const { catchAsync } = require("../../utils");

const updateInfo = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  }).select(
    "-password -updatedAt -createdAt -token"
  );

  res.status(200).json({
     result: {
      user,
    },
  });
});

module.exports = updateInfo;
