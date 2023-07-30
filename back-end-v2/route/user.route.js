// creating a routing template for user
const express = require('express')
const isAuthenticated = require('../middleware/isAuthenticated')

const router = express.Router()

const {login, signup, logout, deleteAccount, increaseProfileViewers} = require('../controller/user.controller');
const User = require('../model/user.model');

// login
router.post('/login', login);

// signup
router.post('/signup', signup);

// logout
router.get('/logout', isAuthenticated , logout);

// delete profile by the email provided
router.delete('/delete', isAuthenticated ,deleteAccount);

// interests, personalityType, jobTitle, location, profileImage, description, interestes, images they should be come in the update profile
router.put('/update', isAuthenticated , (req, res) => {res.send('update profile')});

// increase the view-count
router.put('/view/:userId', isAuthenticated , increaseProfileViewers);

module.exports = router