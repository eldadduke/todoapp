import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    competed: {
        type: Boolean,
        default: false,
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;