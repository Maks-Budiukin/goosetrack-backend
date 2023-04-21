const Task = require("../../models/taskShema");
const { catchAsync } = require("../../utils");

const remove = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;

  await Task.findByIdAndRemove(contactId);

  res.status(200).json({ message: "contact deleted" });
});

module.exports = remove;
