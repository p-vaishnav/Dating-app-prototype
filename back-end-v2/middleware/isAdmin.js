const User = require('../model/user.model');

// user heirarch as of now, 1: admin, 2: moderator, 3: user
const isAdmin = async (req, res, next) => {
    // check if req.user.role is set to 1
    if (req.user.role !== 1) {
        return res.status(401).json({msg: 'Not authorized to access this route'});
    }
    next();
}

module.exports = isAdmin