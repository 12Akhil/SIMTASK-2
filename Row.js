import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from 'axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      if (!fetchUrl) {
        return;
      }
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="heading">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title} // Use 'movie.title' instead of 'movie.name'
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
