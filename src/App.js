import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'A Knight\'s Tale',
      director: 'Brian Helgeland',
      year: '2001',
      color: 'red'
    },
  ]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieYearReleased, setMovieYearReleased] = useState('');
  const [movieColor, setMovieColor] = useState('red');


  function submitMovie(e) {
    e.preventDefault();

    const movie = {
      title: movieTitle,
      director: movieDirector,
      year: movieYearReleased,
      color: movieColor
    };

    setMovies([...movies, movie]);
    setMovieTitle('');
    setMovieDirector('');
    setMovieYearReleased('');
    setMovieColor('');
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
        <MovieList movies={movies} 
          handleDeleteMovie={handleDeleteMovie}/>
      </div>

    </div>
  );
}

export default App;
