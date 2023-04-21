const Contacts = require('../../models/contact/contactsSchema');
const { catchAsync } = require('../../utils');

const updateInfo = catchAsync(async (req, res, next) => {
    const { _id } = req.user;

    const updatedUser = await Contacts.findByIdAndUpdate(_id, req.body, { new: true });

    res.status(200).json({
      updatedUser,
    });
});

module.exports = updateInfo;