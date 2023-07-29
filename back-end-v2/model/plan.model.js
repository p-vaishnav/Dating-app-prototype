const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    // fields should be name, cost, description, images
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    duration: {
        type: Date,
        required: true, 
    }
});