const createHttpError = require("http-errors");
const { User } = require("../../models");
const { catchAsync } = require("../../utils");

const register = catchAsync(async (req, res, next) => {
console.log('регістрація')

  const { email, password, name } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new createHttpError.Conflict("Email is already in use");
  }

  const newUser = await User.create({ password, email, name });

  if (!newUser) return next(createHttpError.NotFound());

  res.status(201).json({ message: "User created" });
});

module.exports = register;
