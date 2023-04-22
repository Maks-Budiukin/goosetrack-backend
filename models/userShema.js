const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const JoiPhone = require("joi-phone-number");
const bcrypt = require("bcryptjs");

const userShema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      default: "",
    },
    birthday: {
      type: Date,
      default: "",
    },
    telegram: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      default: "",
      // required: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// Custom method
userShema.methods.checkPassword = (candidate, hash) => bcrypt.compare(candidate, hash);

const User = model("user", userShema);

const regJoiSchema = Joi.object({
  name: Joi.string().max(16).required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userPageJoiSchema = Joi.object({
  userName: Joi.string().max(16).required(),
  email: Joi.string().required(),
  phone: Joi.string()
    .trim()
    .empty("")
    .trim()
    .min(7)
    .max(13)
    .pattern(/^[+]?\d{2,7}[(\- .\s]?\d{2,7}([)\- .\s]?\d{2,7})*$/),
  birthday: Joi.date().greater(new Date("2020-12-01")),
  telegram: Joi.string().max(16),
});

/* const resendingJoiSchema = Joi.object({
  email: Joi.string().required().error(new Error("missing required field email")),
}); */

module.exports = {
  User,
  regJoiSchema,
  loginJoiSchema,
  userPageJoiSchema,
};
