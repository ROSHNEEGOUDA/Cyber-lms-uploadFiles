// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
// import { errorHandler } from './middlewares/error.js';
// import videoRoutes from './routes/video.js';
// import signUploadRoutes from './routes/sign-upload.js';

// dotenv.config();

// const app = express();
// const port = process.env.VITE_PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/videos', videoRoutes);
// app.use('/api/sign-upload', signUploadRoutes);

// // Error handler middleware
// app.use(errorHandler);

// // Start server
// app.listen(port, () => {
//     connectDB();
//     console.log(`Server is running on port ${port}`);
// });
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/error.js';
import videoRoutes from './routes/video.js';
import signUploadRoutes from './routes/sign-upload.js';
import courseRoutes from './routes/course.js'; // Add this line

dotenv.config();

const app = express();
const port = process.env.VITE_PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);
app.use('/api/sign-upload', signUploadRoutes);
app.use('/api/courses', courseRoutes); // Add this line

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
