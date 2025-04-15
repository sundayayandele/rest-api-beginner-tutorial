const express = require('express');

const app = express();

app.use(express.json());


// Middleware to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Middleware for simple validation
const validateMovie = (req, res, next) => {
  if (!req.body.title || !req.body.genre || !req.body.year) {
      return res.status(400).send('Title, genre, and year are required');
  }
  next();
};

// In-memory database (for demonstration purposes)
// In a real application, you would use a database like MongoDB or PostgreSQL
const movies = [];

// Get all movies
app.get('/movies', (req, res) => {
  res.json(movies);
  console.log(movies);
});

// Get a particular movie by ID
app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});

// Add a new movie
app.post('/movies', validateMovie, (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year
  };
  movies.push(movie);
  res.status(201).json(movie);
});

// Update a movie
app.put('/movies/:id', validateMovie, (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');

  movie.title = req.body.title;
  movie.genre = req.body.genre;
  movie.year = req.body.year;

  res.json(movie);
});

// Delete a movie
app.delete('/movies/:id', (req, res) => {
  const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
  if (movieIndex === -1) return res.status(404).send('Movie not found');

  const deletedMovie = movies.splice(movieIndex, 1);
  res.json(deletedMovie);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});