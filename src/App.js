import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'A Knight\'s Tale',
      director: 'Brian Helgeland',
      year: '2001',
      color: 'red'
    },
    {
      title: 'The Northman',
      director: 'Robert Eggers',
      year: '2022',
      color: 'blue'
    },
    {
      title: 'The Black Phone',
      director: 'Scott Derrickson',
      year: '2022',
      color: 'violet'
    }
  ]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieYearReleased, setMovieYearReleased] = useState('');
  const [movieColor, setMovieColor] = useState('red');

  const [filterByName, setFilterByName] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

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

  function handleDeleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);
    movies.splice(index, 1);
    setMovies([...movies]);
  }
// Filter Movies
  function handleFilterMovies(filterByName) {
    setFilterByName(filterByName);

    const filteredByName = movies.filter(movie => movie.title.toLowerCase()
      .includes(filterByName.toLowerCase()));
// If the filter argument is undefined, set the visible movies in state to be the array
// of all movies.
    setFilteredMovies(filteredByName);
  }

// Manage state:
  useEffect(() => {
    setFilteredMovies(movies);
    setFilterByName('');
  }, [movies]);

  return (
    <div className="App">
      <header>
        Movies Sort of
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
      <label>
        Filter Movies by Title:
        <input value={filterByName} onChange={(e) => handleFilterMovies(e.target.value)} />
      </label>
      <hr></hr>

      <div>
        <MovieList filteredMovies={filteredMovies} 
          handleDeleteMovie={handleDeleteMovie}/>
      </div>

    </div>
  );
}

export default App;
