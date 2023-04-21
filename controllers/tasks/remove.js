const Task = require('');
const { catchAsync } = require('../../utils');

const remove = catchAsync(async (req, res, next) => {
 
    const { contactId } = req.params;

    await Task.findByIdAndDelete(contactId);

    res.status(200).json({ "message": "contact deleted" });
  
});

module.exports = remove;