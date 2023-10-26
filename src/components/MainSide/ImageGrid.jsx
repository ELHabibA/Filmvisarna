// ImageGrid.js
import React from 'react';
import { Link } from 'react-router-dom';

function ImageGrid({ movieImages, movieIds, movieTitles }) {
  return (
    <div className="image-grid">
      {movieImages.map((image, index) => (
        <Link to={`/detaljsidan/${movieIds[index]}`} key={index}>
          <div className={`image-item ${index < 2 ? 'movie-image' : ''}`}>
            <img src={image} alt={`Movie ${index + 1}`} />
            <div className="movie-item">
              <div className="movie-titles">{movieTitles[index]}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ImageGrid;
