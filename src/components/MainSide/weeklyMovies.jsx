// WeeklyMovies.js

import React from 'react';
import { Link } from 'react-router-dom';

function WeeklyMovies({ data, movieImages, toggleLibrary, showKidsLibrary }) {
  return (
    <div className="idag-container">
      <h2 className="content-title">Veckans på Bio</h2>
      <button className="custom-button" onClick={toggleLibrary}>
        {showKidsLibrary ? 'Barn 5+' : 'Vuxna 15+'}
      </button>
      <div className="movie-images-container">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="movie-row">
            {row.map((movie, index) => (
              <Link to={`/detaljsidan/${movie.id}`} key={index}>
                <div className="movie">
                  <img src={movieImages[movie.id - 1]} alt={`Movie ${movie.id}`} />
                  {movie.text.map((line, i) => (
                    <div key={i} className="image-text">
                      {line}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyMovies;
