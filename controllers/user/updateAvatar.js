const { User } = require("../../models");

// =============================================

const updateAvatar = async (req, res) => {
  //  avatarURL: req.file.path
};

module.exports = updateAvatar;

// =============================================

// const { catchAsync } = require("../../utils");

// const cloudinary = require("../../middlewares/user/uploadImage");

// const updateAvatar = catchAsync(async (req, res, next) => {
//   const { _id } = req.user;

//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       public_id: `${_id}_profile`,
//       width: 500,
//       height: 500,
//       crop: "fill",
//     });

//     console.log(result);

//     await User.findByIdAndUpdate(_id, { avatarURL: result.url }, { new: true });
//     res
//       .status(201)
//       .json({ success: true, message: "Your profile has updated!" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "server error, try after some time" });
//     console.log("Error while uploading profile image", error.message);
//   }
// });

// module.exports = updateAvatar;
