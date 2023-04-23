const createHttpError = require("http-errors");
const { regJoiSchema, User } = require("../../models");
const { catchAsync } = require("../../utils");

const checkRegisterData = catchAsync(async (req, res, next) => {
      
    const { error, value } = regJoiSchema(req.body); 
        
    if (error) return next(createHttpError.BadRequest(error.details[0].message));
        
    const userExists = await User.exists({ email: value.email });    
       
    if (userExists) return next(createHttpError.Conflict("Email in use"));
               
    req.body = value;
    
  next();
});

module.exports = {
  checkRegisterData,
};