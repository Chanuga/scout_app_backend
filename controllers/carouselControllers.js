import { CarouselModel } from "../models/carouselModel.js";

// get all
export const getAllCarousel = async (req, res) => {
    // const user_id = req.user._id
    try {
        const posts = await CarouselModel.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// save
export const saveCarousel = async (req, res) => {
    const { image_url } = req.body
    const user_id = req.user._id
    try {
        const post = await CarouselModel.create({image_url, is_delete: false, user_id: user_id });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// delete
export const deleteCarousel = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await CarouselModel.findByIdAndUpdate({_id: id}, {is_delete : true});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}