const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { date, number } = require("joi");

const taskShema = Schema(
  {
    titleTask: {
      type: String,
      required: true,
      // required: [true, "Set name for task"],
    },
    dateTask: {
      type: Date,
      // type: String,
      // default: Date.now,
    },
    startTimeTask: {
      type: String,
    },
    endTimeTask: {
      type: String,
    },
    ownerTask: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    priorityTask: {
      type: String,
      trim: true,
      enum: ["low", "medium", "high"],
      default: "low",
      required: true,
    },
    categoryTask: {
      type: String,
      trim: true,
      enum: ["toDo", "inProgress", "done"],
      default: "toDo",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Task = model("task", taskShema);

const taskJoiSchema = Joi.object({
  titleTask: Joi.string().max(250).required(),
  dateTask: Joi.date().greater(new Date("2020-12-01")).required(),
  startTimeTask: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .required(),
  endTimeTask: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .required()
    .min(Joi.ref("startTimeTask")),
  // priorityTask: Joi.string().only(["low", "medium", "high"]).required(),
  priorityTask: Joi.string().empty("").required(),
  // categoryTask: Joi.string().only(["toDo", "inProgress", "done"]).required(),
  categoryTask: Joi.string().empty("").required(),
});

module.exports = {
  Task,
  taskJoiSchema,
};