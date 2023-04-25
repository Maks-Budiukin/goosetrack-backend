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

const regJoiSchema = (data) =>
  Joi.object({
    name: Joi.string().max(16).required(),
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(6).max(30).required(),
  }).validate(data);

const loginJoiSchema = (data) =>
  Joi.object({
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(6).max(30).required(),
  }).validate(data);

const userPageJoiSchema = (data) =>
  Joi.object({
    name: Joi.string().max(16),
    email: Joi.string().min(4).max(255).email(),
    phone: Joi.string()
      .trim()
      .allow("")
      .max(13)
      .pattern(/^[+]?\d{2,7}[(\- .\s]?\d{2,7}([)\- .\s]?\d{2,7})*$/),
    birthday: Joi.date().greater(new Date("1923-12-01")),
    telegram: Joi.string().max(32).allow(""),
  }).validate(data);

/* const resendingJoiSchema = Joi.object({
  email: Joi.string().required().error(new Error("missing required field email")),
}); */

module.exports = {
  User,
  regJoiSchema,
  loginJoiSchema,
  userPageJoiSchema,
};
