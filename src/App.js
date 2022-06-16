import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieYearReleased, setMovieYearReleased] = useState('');
  const [movieColor, setMovieColor] = useState('');


  function submitMovie(e) {
    e.preventDefault();
  }

  function handleDeleteMovie() {

  }

  function handleFilterMovies() {

  }

  useEffect(() => {

  });

  return (
    <div className="App">
      <header>

      </header>
      <div className='top'>
        <MovieForm setMovieTitle={setMovieTitle}
          movieTitle={movieTitle}
          setMovieDirector={setMovieDirector}
          movieDirector={movieDirector}
          setMovieYearReleased={setMovieYearReleased}
          movieYearReleased={movieYearReleased}
          setMovieColor={setMovieColor} 
          movieColor={movieColor}
          submitMovie={submitMovie} />
      </div>

      

      <div>
        Section to show the list of movies
        <MovieList />
      </div>

    </div>
  );
}

export default App;
