import React from 'react';
import Movie from './Movie.js';

export default function MovieList({ filteredMovies, handleDeleteMovie }) {
  return (
    <div className='bottom'>
      {
        filteredMovies.map((movie, i) => 
          <Movie key={movie.title + i} 
            movie={movie} 
            handleDeleteMovie={handleDeleteMovie} />)
      }
    </div>
  );
}
