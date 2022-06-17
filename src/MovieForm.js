import React from 'react';

export default function MovieForm({ 
  handleSubmit,
  movieTitle,
  setMovieTitle,
  movieDirector,
  setMovieDirector,
  movieYearReleased,
  setMovieYearReleased,
  movieColor,
  setMovieColor 
}) {
  return (
    <div className='form-and-preview'>
      <div className='movie-form'>

        <form onSubmit={handleSubmit}>
          <label>
        Movie Title:
            <input type='text' value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)} />
          </label>
          <label>
        Movie Director:
            <input type='text' value={movieDirector}
              onChange={(e) => setMovieDirector(e.target.value)} />
          </label>
          <label>
        Year the Movie was released:
            <input type='number' value={movieYearReleased}
              onChange={(e) => setMovieYearReleased(e.target.value)} />
          </label>
          <label>
          Movie Color
            <select value={movieColor}
              onChange={(e) => setMovieColor(e.target.value)}>
              <option value='red'>Red</option>
              <option value='orange'>Orange</option>
              <option value='yellow'>Yellow</option>
              <option value='green'>Green</option>
              <option value='blue'>Blue</option>
              <option value='indigo'>Indigo</option>
              <option value='violet'>Violet</option>
            </select>
          </label>
          <button>Add Movie</button>
        </form>
      </div>
      <div className='movie-preview'>
        <div className='preview' style={{ background: movieColor }}>
          <h3>{movieTitle}</h3>
          <p>{movieDirector}</p>
          <p>{movieYearReleased}</p>
        </div>
      </div>
    </div>
  );
}
