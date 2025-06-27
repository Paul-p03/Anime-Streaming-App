const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Content model
const Content = mongoose.model('Content', new mongoose.Schema({
  title: String,
  part: Number,
  description: String,
  trailerUrl: String,
  episodes: [{
    episodeNumber: Number,
    title: String,
    summary: String
  }]
}));

// API Routes
app.get('/api/parts', async (req, res) => {
  // Sample data
  const parts = [
    {
      title: "Phantom Blood",
      part: 1,
      description: "The beginning of the Joestar bloodline's saga...",
      trailerUrl: "https://www.youtube-nocookie.com/embed/49d3pZG0lXc?si=NXhi8AO-x034ur0N"
    },
    {
      title: "Stardust Crusaders",
      part: 2,
      description: "Jotaro and crew battle through Egypt...",
      trailerUrl: "https://www.youtube-nocookie.com/embed/XKpD3WtFRCs?si=aqxzPdSx3YPv7eQe"
    }
  ];
  
  res.json(parts);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));