const {User} = require('../../models');
const jwt = require('jsonwebtoken');
const { catchAsync } = require('../../utils');
const createHttpError = require('http-errors');

const protect = catchAsync(async (req, res, next) => {
  
    
  const { authorization } = req.headers;

  const [bearer, token] = authorization.split(' ');

    
  const err = createHttpError.Unauthorized("Not authorized");

  if (bearer !== "Bearer") return next(err);

  if (!token) return next(err);

 let decodedToken;

 try {
   decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return next(err);
  }
  
  const user = await User.findById(decodedToken.id);

  if (!user) return next(err);

  req.user = user;

  next();
});




module.exports = {
  protect,
};
