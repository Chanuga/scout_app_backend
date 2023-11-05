import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const carouselSchema = new Schema({
    image_url: {
        type: String,
        required: true
    },
    is_delete: {
        type: Boolean,
        required: true
    }
}, { timestamps: true});

export const CarouselModel = mongoose.model('Carousel', carouselSchema);
