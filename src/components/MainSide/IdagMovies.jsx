import React from 'react';
import { Link } from 'react-router-dom';

function IdagMovies({ idagMovies, movieImages }) {
  return (
    <div className="idag-container">
      <h2 className="content-title">Idag på Bio</h2>
      <div className="movie-info">
        {idagMovies.map((movie, index) => (
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
    </div>
  );
}

export default IdagMovies;
