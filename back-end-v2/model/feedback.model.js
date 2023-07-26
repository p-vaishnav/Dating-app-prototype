// create a model for the feedback collection
const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    // fields should be user_id type Object.Id, feedback_user_id type Object.Id, rating type Number
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    feedback_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // TODO: should be filled with questions
    rating: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema)