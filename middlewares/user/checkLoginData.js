const createHttpError = require("http-errors");
const {  loginJoiSchema } = require("../../models");
const { catchAsync } = require("../../utils");

const checkLoginData = catchAsync(async (req, res, next) => {
      
    const { error, value } = loginJoiSchema(req.body); 
        
    if (error) return next(createHttpError.BadRequest(error.details[0].message));
              
    req.body = value;
    
  next();
});

module.exports = {
  checkLoginData,
};