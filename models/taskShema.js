const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { date, number } = require("joi");

const taskShema = Schema(
  {
    title: {
      type: String,
      required: true,
      // required: [true, "Set name for task"],
    },
    date: {
      type: Date,
      // type: String,
      // default: Date.now,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    priority: {
      type: String,
      trim: true,
      enum: ["low", "medium", "high"],
      default: "low",
      required: true,
    },
    category: {
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
  title: Joi.string().max(250).required(),
  date: Joi.date().greater(new Date("2020-12-01")).required(),
  startTime: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .required(),
  endTime: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .required()
    .min(Joi.ref("startTime")),
  // priorityTask: Joi.string().only(["low", "medium", "high"]).required(),
  priority: Joi.string().empty("").required(),
  // categoryTask: Joi.string().only(["toDo", "inProgress", "done"]).required(),
  category: Joi.string().empty("").required(),
});

module.exports = {
  Task,
  taskJoiSchema,
};
