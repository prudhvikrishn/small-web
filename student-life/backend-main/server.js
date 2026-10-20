// Importing required modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
