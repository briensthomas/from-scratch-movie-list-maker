import React from 'react';

export default function MovieForm({ setMovieTitle,
  movieTitle,
  setMovieDirector,
  movieDirector,
  setMovieYearReleased,
  movieYearReleased,
  setMovieColor,
  movieColor,
  submitMovie }) {
  return (
    <div className='form-and-preview'>
      <div className='movie-form'>

  
        <form onSubmit={submitMovie}>
          <label>
            Title: <input required value={movieTitle} 
              onChange={(e) => setMovieTitle(e.target.value)} />
          </label>

          <label> 
        Director: <input required type='text' value={movieDirector}
              onChange={(e) => setMovieDirector(e.target.value)} />
          </label>

          <label> Year Released:
            <input type='number' value={movieYearReleased}
              onChange={(e) => setMovieYearReleased(e.target.value)} />
          </label>

          <label>Background Color:
            <select required value={movieColor}
              onChange={(e) => setMovieColor(e.target.value)} >
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
          </label>
          <button>Add Movie</button>
        </form>
      </div>
      <div className='movie-preview'>
        <div className='preview' style={{ background: movieColor }}>
          <h2>{movieTitle}</h2>
          <h3>{movieDirector}</h3>
          <p>{movieYearReleased}</p>
        </div>
      </div>
    </div>
  );
}
