import { PostModel } from '../models/postModel.js'

// get all
export const getAllPosts = async (req, res) => {
    // const user_id = req.user._id
    try {
        const posts = await PostModel.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// get post by id 
export const getPostByID = async (req, res) => {
    const { id } = req.params;
    try {
        const posts = await PostModel.findById({_id: id});
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// save
export const savePost = async (req, res) => {
    const { title, description, image_url } = req.body
    const user_id = req.user._id
    try {
        const post = await PostModel.create({title, description, image_url, is_delete: false, user_id: user_id });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// delete
export const deletePost = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user._id
    try {
        const post = await PostModel.findByIdAndUpdate({_id: id}, {is_delete : true});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// update
export const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findByIdAndUpdate({_id: id}, {...req.body});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}