import React from 'react';

function SeIdag15Plus() {
  return (
    <div className="se-idag-container">
      <h2 className="content-title">Se Idag 15+</h2>
      <div className="movie-info">
        <div className="movie">
          <p className="showtime">Visning: 16:00</p>
          <h3 className="Movie-title">Saw X , Sal A</h3>
          <h3 className="Movie-title">Nun 2 , Sal B</h3>
        </div>
        <div className="movie">
          <p className="showtime">Visning: 20:00</p>
          <h3 className="Movie-title">Saw X , Sal B</h3>
          <h3 className="Movie-title">Nun 2 , Sal A</h3>
        </div>
        {/* Add more movie entries as needed */}
      </div>
    </div>
  );
}

export default SeIdag15Plus;
