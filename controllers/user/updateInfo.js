const { User } = require("../../models");
const { catchAsync } = require("../../utils");

const updateInfo = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  console.log("REQ", req);

  const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  res.status(200).json({
    updatedUser,
  });
});

module.exports = updateInfo;
