const { User } = require("../../models");
const createHttpError = require("http-errors");
const { catchAsync, createSignToken } = require("../../utils");

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const Newuser = await User.findOne({ email }).select(
    "+password -updatedAt -createdAt -token"
  );

  const err = createHttpError.Unauthorized("Email or password is wrong");

  if (!Newuser) return next(err);

  const passwordIsValid = await Newuser.checkPassword(
    password,
    Newuser.password
  );

  if (!passwordIsValid) return next(err);

  // user.password = null;

  const token = createSignToken(Newuser._id);

  const user = await User.findByIdAndUpdate(Newuser._id, { token }).select(
    "-password -updatedAt -createdAt"
  );

  res.json({
    data: user,
  });
});

module.exports = login;
