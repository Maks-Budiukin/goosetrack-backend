const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// const authRouter = require('./routes/api/auth')
// const tasksRouter = require("./routes/api/tasks");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api/users", authRouter);
// app.use("/api/tasks", tasksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
