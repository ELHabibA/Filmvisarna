import React from 'react';

function KidsContainer() {
  return (
    <div className="kids-container">
      <h2 className="content-Title">Se Idag 5+</h2>
      <div className="movie-info">
        {/* Movie title and showtime for kids' content */}
        <div className="movie">
          <p className="Showtime">Visning: 10:00</p>
          <h3 className="movie-Title">MamaMu , Sal A</h3>
          <h3 className="movie-Title">Barbie , Sal B</h3>
        </div>
        {/* Add more kids' movie entries as needed */}
        <div className="movie">
          <p className="Showtime">Visning: 13:00</p>
          <h3 className="movie-Title">MamaMu , Sal B</h3>
          <h3 className="movie-Title">Barbie , Sal A</h3>
        </div>
      </div>
    </div>
  );
}

export default KidsContainer;
