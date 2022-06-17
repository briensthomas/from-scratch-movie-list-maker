import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { useEffect, useState } from 'react';


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

  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: movieTitle,
      director: movieDirector,
      year: movieYearReleased,
      color: movieColor
    };
    setMovies([...movies, movie]);
    // resets the form inputs
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

  function handleFilterByName(filterByName) {
    setFilterByName(filterByName);

    const filteredList = movies.filter(movie => movie.title.toLowerCase()
      .includes(filterByName.toLowerCase()));

    setFilteredMovies(filteredList);
  }

  useEffect(() => {
    setFilteredMovies(movies);
    setFilterByName('');
  }, [movies]);

  return (
    <div className="App">
      <MovieForm handleSubmit={handleSubmit} 
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
        movieDirector={movieDirector}
        setMovieDirector={setMovieDirector}
        movieYearReleased={movieYearReleased}
        setMovieYearReleased={setMovieYearReleased}
        movieColor={movieColor}
        setMovieColor={setMovieColor}/>
      <hr />
      <label> Filter Movies by Name: 
        <input value={filterByName} onChange={(e) => 
          handleFilterByName(e.target.value)} />
      </label>
      <MovieList 
        filteredMovies={filteredMovies}
        handleDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
