const { User } = require("../../models");
const { catchAsync } = require("../../utils");

const current = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id).select(
    "-password -updatedAt -createdAt"
  );

  res.status(200).json({
    data: user,
  });
});

module.exports = current;
