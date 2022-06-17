import react from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieYearReleased, setMovieYearReleased] = useState('');
  const [movieColor, setMovieColor] = useState('');

  function handleSubmit() {
    
  }

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

    </div>
  );
}

export default App;
