const { User } = require("../../models");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, {
    avatarURL: req.file.path,
  });

  res.status(201).json({ message: "User photo updated" });
};

module.exports = updateAvatar;
