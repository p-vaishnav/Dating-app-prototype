// import user model
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    try {
        // TODO: store the email and password in the database
        const user = await User.find({email, password})
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while logging in'});
    }

    // create the jwt token
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
    
    // add the token to the cookie
    res.cookie('token', token);
}

const signup = async (req, res) => {
    const {name, email, password, jobTitle, address} = req.body;

    if (!name || !email || !password || !jobTitle || !address) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    try {
        // add the entry to the database, where data will be sent from the front-end by req.body
        const user = await User.create(req.body)
        console.log(user);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while inserting the user'});
    }

    return res.status(200).json({msg: 'User added successfully'});
}

const logout = async (req, res) => {
    try {
        // remove the token from the database
        res.clearCookie('token');
        res.send({msg: 'Logged out successfully'});
    } catch (error) {
        res.status(500).send()
    }
}

const deleteAccount = async (req, res) => {
    const {email} = req.body;
    try {
        await User.deleteOne({email});
        return res.status(200).json({msg: 'User deleted successfully'});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while deleting the user'});
    }
}

module.exports = {login, signup, logout, deleteAccount}