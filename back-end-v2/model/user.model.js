// createa a model for user in mongoose
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // email is unique
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // password is required and has a minimum length of 7
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    // age is required and must be a positive number
    age: {
        type: Number,
        required: true,
        validate: (value) => {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        },
        trim: true
    },
    // jobTitle is required
    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    // address is required
    address: {
        type: String,
        required: true,
        trim: true
    },
    // TODO: Might require it later
    // jwt token
    // token: {
    //     type: String,
    //     required: true
    // }
    
});

module.exports = mongoose.model('User', userSchema)