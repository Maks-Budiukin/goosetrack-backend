const {User} = require("../../models");
const createHttpError = require("http-errors");
const { catchAsync } = require("../../utils");

const logout = catchAsync(async (req, res, next) => {
   console.log('sfvsfssfsd')
  
  const { _id } = req.user;

  console.log('sfvsfssfsd')

   console.log(req.user)

   console.log(_id)

  const updatedUser = await User.findByIdAndUpdate(_id, { token: null });

  if (!updatedUser) return next(createHttpError.NotFound());

  res.status(204).json();
});

module.exports = logout;
