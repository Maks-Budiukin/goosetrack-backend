// const { User } = require("../../models");
// const { catchAsync } = require("../../utils");

// const updateAvatar = catchAsync(async (req, res, next) => {
//   if (!req.file) {
//     next(req, res);
//   }
//   const { _id } = req.user;
//   await User.findByIdAndUpdate(_id, {
//     avatarURL: req.file.path,
//   });

//   res.status(201).json({ message: "User photo updated" });
// });

// module.exports = updateAvatar;
