// implement jwt auth middleware
require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../model/user.model')

const isAuthenticated = async (req, res, next) => {
    try {
        // get the token from the header
        const token = req.header('Authorization').replace('Bearer ', '')
        // verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // find the user with the id and token
        const user = await User.findOne({ _id: decoded._id })
        
        if (!user) {
            throw new Error()
        }
        
        // add the user and token to the request
        req.user = user
        req.token = token
        // call the next middleware
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = isAuthenticated