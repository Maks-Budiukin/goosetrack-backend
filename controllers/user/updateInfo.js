const { User } = require("../../models");
const { catchAsync } = require("../../utils");

const updateInfo = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  if (req.file) {
    req.body.avatarURL = req.file.path;
  }

  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  }).select("-password -updatedAt -createdAt -token");

  res.status(200).json({
    data: user,
  });
});

module.exports = updateInfo;
