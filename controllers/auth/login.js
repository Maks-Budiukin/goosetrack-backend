const User = require('');
const createHttpError = require('http-errors');
const {catchAsync, createSignToken} = require('../../utils');


const login = catchAsync(async (req, res, next) => {
    
        const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select('+password');
    
    const err = createHttpError.Unauthorized("Emailhjtr or password is wrong")

        if (!user) return next(err);
    
        const passwordIsValid = await user.checkPassword(password, user.password);

        if (!passwordIsValid) return next(err);
        
        const token = createSignToken(user._id);

        await User.findByIdAndUpdate(user._id, { token });
        
        res.status(201).json({});
        
});

module.exports = login;