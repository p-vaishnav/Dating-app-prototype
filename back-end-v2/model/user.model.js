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
        // TODO: decrypt the password
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
        trim: true
    },
    // address is required
    address: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        // latitude and longitude is required
        latitude: {
            type: Number,
            trim: true
        },
        longitude: {
            type: Number,
            trim: true
        }
    },
    // profileImage is required, it is a array of strings, which shoud be a url, and a check of url should be maintained
    profileImage: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            // check with the regex if string is valid or not
            const regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            if (!regex.test(value)) {
                throw new Error('Invalid URL')
            }
        }
    },
    // personality type is required
    profileDescription: {
        type: String,
        trim: true
    },
    views: {
        type: [mongoose.Schema.Types.ObjectId],
    },
    personalityType: {
        type: String
    },
    interestes: {
        // by default 5 should be given
        type: [String],
        limit: 5,
    },
    images: {
        type: [String],
        limit: 5,      
    },
    plan: {
        planId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        purchaseDate: {
            type: Date,
        },
    }
});

module.exports = mongoose.model('User', userSchema)