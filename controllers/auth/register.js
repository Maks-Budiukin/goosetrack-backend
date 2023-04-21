const createHttpError = require('http-errors');
const Users = require('../../models/user/usersSchema');
const {catchAsync} = require('../../utils');


const register = catchAsync(async (req, res, next) => {
    
        const { email, password, name } = req.body;
    
        const newUser = await Users.create({ password, email, name });
        
        if (!newUser) return next(createHttpError.NotFound());
        
        res.status(201).json({message: "User created"});
        
});

module.exports = register;