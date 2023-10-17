import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/movies.css';

const MovieItem = ({ movie }) => {
    return (
        <div className="movie-item">
            <Link to={`/detaljsidan/${movie.id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <div className="poster">
                    <img
                        src={movie.poster}
                        alt="Movie Poster"
                        className="movie-poster"
                    />
                </div>
                <div className="movie-info" style={{ marginLeft: '10px' }}>
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-description">{movie.genre} I {movie.duration} I {movie.ageRating}</p>
                </div>
                <Link to={`/detaljsidan/${movie.id}`} style={{ marginLeft: 'auto' }}>
                    <button className="btn btn-primary">Detaljer</button>
                </Link>
            </Link>
        </div>
    );
};

export default MovieItem;