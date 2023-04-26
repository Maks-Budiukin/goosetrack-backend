const createHttpError = require("http-errors");
// const {  taskJoiSchema } = require("../../models");
const { catchAsync } = require("../../utils");
const { taskJoiUpdateSchema } = require("../../models/taskShema");

const checkUpdateData = catchAsync(async (req, res, next) => {
      
  const { error, value } = taskJoiUpdateSchema(req.body); 
  
        
    if (error) return next(createHttpError.BadRequest(error.details[0].message));
              
    req.body = value;
    
  next();
});

module.exports = {
  checkUpdateData,
};