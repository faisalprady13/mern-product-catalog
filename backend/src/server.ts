import dotenv from 'dotenv';
import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middlware
app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
  });
