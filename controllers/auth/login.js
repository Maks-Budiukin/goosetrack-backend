const { User } = require("../../models");
const createHttpError = require("http-errors");
const { catchAsync, createSignToken } = require("../../utils");

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select(
    "+password -updatedAt -createdAt -token"
  );

  const err = createHttpError.Unauthorized("Email or password is wrong");

  if (!user) return next(err);

  const passwordIsValid = await user.checkPassword(password, user.password);

  if (!passwordIsValid) return next(err);

  user.password = null;

  const token = createSignToken(user._id);

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    result: {
      token,
      user,
    },
  });
});

module.exports = login;
