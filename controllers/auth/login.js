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

  const token = await createSignToken(Newuser._id);

  console.log(token);

  const user = await User.findByIdAndUpdate(Newuser._id, { token },
    {
    new: true,
  }).select(
    "-password -updatedAt -createdAt"
  );



  res.json({
    data: user,
  });
});

module.exports = login;
