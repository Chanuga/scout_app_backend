import express from 'express';
import { loginUser, signupUser } from '../controllers/userControllers.js';

const router = express.Router();

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)

export default router;
