const monoose = require('mongoose');

const CommunityPostSchema = new mongoose.Schema({
    // fields should be tags, comment, likes, images, description
    tags: {
        type: [String],
        required: true,
    },
    // comments should be array of strings
    comments: {
        type: [String],
        required: true,
    },
    // likes should be array of user id
    likes: {
        type: [monoose.Schema.Types.ObjectId],
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const CommunityPost = mongoose.model('CommunityPost', CommunityPostSchema);