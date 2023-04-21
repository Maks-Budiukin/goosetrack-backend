const { User } = require("./userShema");
const { regJoiSchema } = require("./userShema");
const { loginJoiSchema } = require("./userShema");
const { userPageJoiSchema } = require("./userShema");

const { Task } = require("./taskShema");
const { taskJoiSchema } = require("./taskShema");

module.exports = {
  User,
  regJoiSchema,
  loginJoiSchema,
  userPageJoiSchema,
  Task,
  taskJoiSchema,
};
