import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div className='movie-card' style={{ backgroundColor: movie.color }}
      onClick={() => handleDeleteMovie(movie.title)}>
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
    </div>
  );
}
