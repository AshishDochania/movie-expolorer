const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = 'a54077a7';

app.get('/api/movies', async (req, res) => {
  const { title, genre } = req.query;
  try {
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title || ''}&type=movie`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching movie data');
  }
});

app.get('/api/movie', async (req, res) => {
    const { id } = req.query;
    try {
      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error fetching movie details');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
