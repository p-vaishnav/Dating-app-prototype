// creating a routing template for user
const express = require('express')
const router = express.Router()

const {login, signup, logout, deleteAccount} = require('../controller/user.controller')

// create routes for login, signup, logout, profile, update profile, delete profile
// login
router.post('/login', login);

// signup
router.post('/signup', signup);

// logout
router.post('/logout', logout);

// delete profile by the email provided
router.delete('/delete', deleteAccount);

module.exports = router