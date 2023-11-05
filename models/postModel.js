import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    is_delete: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true});

export const PostModel = mongoose.model('Post', postSchema);