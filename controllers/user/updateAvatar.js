const { User } = require("../../models");
const { catchAsync } = require("../../utils");

const uploadCloud = require("../../middlewares/user/uploadImage");

const updateAvatar = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  //   console.log("REQ", req);

  const { user } = req;
  if (!user)
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access!" });

  try {
    const result = await uploadCloud.uploader.upload(req.file.path, {
      public_id: `${_id}_profile`,
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log(result);

    await User.findByIdAndUpdate(
      user._id,
      { avatarURL: result.url },
      { new: true }
    );
    res
      .status(201)
      .json({ success: true, message: "Your profile has updated!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error, try after some time" });
    console.log("Error while uploading profile image", error.message);
  }
});

module.exports = updateAvatar;

// const updateAvatar = catchAsync(async (req, res, next) => {
//     const { user } = req;
//     if (!user)
//         return res
//             .status(401)
//             .json({ success: false, message: "unauthorized access!" });

//     try {
//         const result = await cloudinary.uploader.upload(req.file.path, {
//             public_id: `${user._id}_profile`,
//             width: 500,
//             height: 500,
//             crop: "fill",
//         });

//         const updatedUser = await User.findByIdAndUpdate(
//             user._id,
//             { avatar: result.url },
//             { new: true }
//         );
//         res
//             .status(201)
//             .json({ success: true, message: "Your profile has updated!" });
//     } catch (error) {
//         res
//             .status(500)
//             .json({ success: false, message: "server error, try after some time" });
//         console.log("Error while uploading profile image", error.message);
//     }
// };
