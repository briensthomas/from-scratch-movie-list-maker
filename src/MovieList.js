import React from 'react';
import Movie from './Movie';

export default function MovieList({ filteredMovies, handleDeleteMovie }) {
  return (
    <div className='bottom'>
      {
        filteredMovies.map((movie, i) => <Movie className='movie-card' 
          key={movie.title + i} movie={movie} handleDeleteMovie={handleDeleteMovie} />)
      }
    </div>
  );
}
