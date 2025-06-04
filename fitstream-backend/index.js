import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import workoutRoutes from './routes/workoutRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// ✅ Routes
app.use('/api', authRoutes);
app.use('/api/workouts', workoutRoutes);

// ✅ Root health check
app.get('/', (req, res) => {
  res.send('FitStream+ backend is running!');
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
