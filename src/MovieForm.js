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
    <div>
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
          <select value={movieColor}
            onChange={(e) => setMovieColor(e.target.value)}>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value=''>Yellow</option>
            <option value=''>Green</option>
            <option value=''>Blue</option>
            <option value=''>Indigo</option>
            <option value=''>Violet</option>
          </select>
        </label>
      </form>
    </div>
  );
}
