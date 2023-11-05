import express from 'express';
import { deleteCarousel, getAllCarousel, saveCarousel } from '../controllers/carouselControllers.js';
import { requireAuth } from '../middleware/requireauth.js';

const router = express.Router();

//get all carousels
router.get('/', getAllCarousel);

//add a new post
router.post('/', requireAuth , saveCarousel);

//delete a new post
router.post('/delete/:id', requireAuth , deleteCarousel);

export default router;
