import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const timestamp = Date.now();
  const favorite = 'Inception';
  const debug = false;

  useEffect(() => {
    if (debug) {
      console.log('Debug mode ON', { timestamp, favorite });
    }
    console.log('App mounted at', timestamp);
  }, []);

  const formatTitle = (str) => {
    if (!str) return str;
    return str
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!title) {
      console.warn('Please enter a movie title!');
      return;
    }

    const newMovie = {
      id: Date.now(),
      title: title,
      comment: comment,
      rating: Number(rating),
    };

    setMovies((prev) => [...prev, newMovie]);

    setTitle('');
    setComment('');
    setRating(1);
  };

  const handleRemoveMovie = (movieIdToRemove) => {
    setMovies((list) => list.filter((movie) => movie.id !== movieIdToRemove));
  };

  const renderStars = (starCount) => '⭐'.repeat(Number(starCount) || 0);

  const notes = ['watched', 'pending', 'later'];
  let idx = 0;
  const pickNote = () => notes[idx++ % notes.length];

  return (
    <div className="App">
      <h1>My Movie Watch List</h1>

      <form onSubmit={handleAddMovie} className="movie-form">
        <div>
          <label>Movie Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. The Matrix"
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="e.g. Recommended by a friend"
          />
        </div>
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <button type="submit">Add Movie</button>
      </form>

      <div className="movie-list">
        <h2>Movies to Watch:</h2>

        {movies.length === 0 ? (
          <p>No movies added yet. Add one above!</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <h3>{formatTitle(movie.title)}</h3>
              <p className="movie-rating">{renderStars(movie.rating)}</p>
              {movie.comment && <p className="movie-comment">"{movie.comment}"</p>}
              <p className="movie-note">{pickNote()}</p>
              <button className="remove-btn" onClick={() => handleRemoveMovie(movie.id)}>
                &times;
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;