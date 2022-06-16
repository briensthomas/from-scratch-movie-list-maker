import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('Movie Title');
  const [movieDirector, setMovieDirector] = useState('Director Name');
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('Year Released');
  const [movieFormColor, setMovieFormColor] = useState('green');

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
      <div className='movie-form'>
        Section for new movie inputs
        <MovieForm setMovieTitle={setMovieTitle}
          setMovieDirector={setMovieDirector}
          setMovieFormYearReleased={setMovieFormYearReleased}
          setMovieFormColor={setMovieFormColor} 
          submitMovie={submitMovie} />
      </div>

      <div>
        Section to render a movie card
        <Movie />
      </div>

      <div>
        Section to show the list of movies
        <MovieList />
      </div>

    </div>
  );
}

export default App;
