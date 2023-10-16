import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Card } from "react-bootstrap";

export default function MoviesList(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/movies');
                const moviesListed = await response.json();
                setMovies(moviesListed);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

   return (
  <>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <Card className='moviesListCard'>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Row>
              <Col sm={4} className='p-3'>
                <img className="posterMoviesList" src={movie.description.poster} style={{
                  width: '150px',
                  height: 'auto',
                  border: '2px solid black',
                }} alt="Movie Poster" />
              </Col>
              <Col sm={4} className='p-3'>
                <strong>Title:</strong> {movie.title}
                <br />
                <strong>Genre:</strong> {movie.description.genre}
                <br />
                <strong>Duration:</strong> {movie.description.duration} min {/*Omvandla till timmar?? */}
                <br />
                <strong>Åldersgräns:</strong> {movie.description.ageRating} år
              </Col>
              <Col sm={4} className='p-3'>
                <Link to={`/detaljsidan/${movie.id}`}>
                  <button className="btn btn-primary" style={{ marginLeft: '10px' }}>Detaljer</button>
                </Link>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </Card>
    )}
  </>
);
}

