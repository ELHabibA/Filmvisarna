import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/movies.css';
import convertHours from '../../utilities/convertHours.jsx';
import { Row, Col } from 'react-bootstrap';

function MovieItem({ movie }) {
  const time = convertHours(movie.description.duration);
  return (
    <>
      <Row>
        <Col>
          <Link to={`/detaljsidan/${movie.id}`}> 
            <div className="poster">
              <img
                src={movie.description.poster}
                alt="Movie Poster"
                className="movie-poster"
              />
              
            </div>
          </Link>
        </Col>

        <Col className="movie-info">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-description">{movie.description.genre} I Längd: {time} I Åldersgräns: {movie.description.ageRating} år</p>
        </Col>
        
        <Col>
            <Link to={`/detaljsidan/${movie.id}`}> <button className="btn btn-primary">Detaljer</button></Link>
        </Col>
       
      </Row>     
</>
  );
};

export default MovieItem;