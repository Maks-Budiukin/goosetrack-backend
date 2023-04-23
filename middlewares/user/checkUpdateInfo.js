const createHttpError = require("http-errors");
const {  userPageJoiSchema } = require("../../models");
const { catchAsync } = require("../../utils");

const checkUpdateInfo = catchAsync(async (req, res, next) => {
      
    const { error, value } = userPageJoiSchema(req.body); 
        
    if (error) return next(createHttpError.BadRequest(error.details[0].message));
              
    req.body = value;
    
  next();
});

module.exports = {
  checkUpdateInfo,
};