const { catchAsync } = require("../../utils");

const current = catchAsync(async (req, res, next) => {
    
       const user = req.user;

        user.password = null;
        
        res.status(200).json({user})   
});

module.exports = current;