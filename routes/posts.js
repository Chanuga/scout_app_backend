import express from 'express';
import { deletePost, getAllPosts, getPostByID, savePost, updatePost } from '../controllers/postControllers.js';
import { requireAuth } from '../middleware/requireauth.js';

const router = express.Router();

// add authentication to all routes
// router.use(requireAuth)

//get all posts
router.get('/', getAllPosts);

//get a post by id
router.get('/:id', getPostByID);

//add a new post
router.post('/', requireAuth, savePost);

//delete a new post
router.post('/delete/:id', requireAuth, deletePost);

//edit a new post
router.put('/:id', requireAuth, updatePost);

export default router;