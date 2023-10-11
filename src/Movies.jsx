import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moviesData from './components/data/movies.json';

const Movies = () => {

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center',
    };

    const movieListStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    };

    const movieItemStyle = {
        width: 'calc(25% - 10px)',
        marginBottom: '20px',
    };

    const { movieId } = useParams();

    return (
        <div>
            <h1>Filmer</h1>
            <div className="movie-list" style={movieListStyle}>
                {moviesData.map((movie) => (
                    <div key={movie.id} className="movie-item" style={movieItemStyle}>
                        <Link to={`/detaljsidan/${movie.id}`} style={linkStyle}>
                            <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>{movie.title}</h2>
                            <img
                                src={movie.poster}
                                alt="Movie Poster"
                                className="img-fluid"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: '2px solid white',
                                }}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;