import express from "express";
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"
import postsRoutes from './routes/posts.js'
import carouselRoutes from './routes/carousel.js'
import userRoutes from './routes/user.js'

dotenv.config();

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json()) // to access to request body of requests

//routes
app.use('/api/posts', postsRoutes) // post routes
app.use('/api/carousel', carouselRoutes) // carousel routes
app.use('/api/user', userRoutes) // user routes

// Catch-all route for unmatched routes
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

//listen to requests
// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to the db & listning on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })