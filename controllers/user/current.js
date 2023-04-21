const { catchAsync } = require("../../utils");

const current = catchAsync(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    name: user.name,
    email: user.email,
  });
});

module.exports = current;
