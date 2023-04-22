const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { date, number } = require("joi");

const taskShema = Schema({
  titleTask: {
    type: String,
    // required: [true, "Set name for task"],
  },
  dateTask: {
    // type: date,
    type: String,
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
    enum: ["low", "medium", "high"],
    default: "low",
  },
  categoryTask: {
    type: String,
    enum: ["toDo", "inProgress", "done"],
    default: "toDo",
  },
});

const Task = model("task", taskShema);

const taskJoiSchema = Joi.object({
  titleTask: Joi.string().max(250).required(),
  // dateTask: Joi.date().format("YYYY-MM-DD").required(),
  startTimeTask: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .required(),
  endTimeTask: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .required()
    .min(Joi.ref("startTimeTask")),
  // priorityTask: Joi.string().only(["low", "medium", "high"]).required(),
  // categoryTask: Joi.string().only(["toDo", "inProgress", "done"]).required(),
});

module.exports = {
  Task,
  taskJoiSchema,
};
