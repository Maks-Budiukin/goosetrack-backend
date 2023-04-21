const { Schema, model } = require("mongoose");
const Joi = require("joi");
const JoiPhone = require("joi-phone-number");

const userShema = Schema({
  userName: {
    type: String,
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
  },
  birthday: {
    type: String,
  },
  telegram: {
    type: String,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

const User = model("user", userShema);

const regJoiSchema = Joi.object({
  userName: Joi.string().max(16).required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const userPageJoiSchema = Joi.object({
  userName: Joi.string().max(16).required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  phone: JoiPhone.string().phoneNumber({ defaultCountry: "UA", format: "e164" }).validate("494322456"),
  birthday: Joi.date().format("YYYY-MM-DD"),
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
