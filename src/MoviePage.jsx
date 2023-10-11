import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moviesData from './components/data/movies.json';

const MoviePage = () => {
    const { movieId } = useParams();
    const movie = moviesData.find((movie) => movie.id === parseInt(movieId, 10));

    if (!movie) {
        
        return <div>Movie not found.</div>;
    }

    const posterStyle = {
        maxWidth: '100%',
        maxHeight: '50vh', 
        objectFit: 'contain', 
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="my-4">{movie.title}</h1>
                </div>
                <div className="col-md-6 text-md-end">
                    <Link to="/boka">
                        <button className="btn btn-primary mb-4">Boka Här </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={movie.poster}
                        alt="Movie Poster"
                        className="img-fluid"
                        style={posterStyle}
                    />
                </div>
                <div className="col-md-6 mt-2">
                    <iframe
                        width="100%"
                        height="350"
                        src={movie.trailerURL} 
                        title="Movie Trailer"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h1 className="my-4"></h1>
                    <ul>
                            <li style={{ display: 'flex' }}>
                            <span style={{ width: '150px' }}>Genre:</span>
                            <span>{movie.genre}</span>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <span style={{ width: '150px' }}>Åldersgräns:</span>
                            <span>{movie.ageRating}</span>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <span style={{ width: '150px' }}>Premiär:</span>
                            <span>{movie.releaseDate}</span>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <span style={{ width: '150px' }}>Längd:</span>
                            <span>{movie.duration}</span>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <span style={{ width: '150px' }}>Språk:</span>
                            <span>{movie.language}</span>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <span style={{ width: '150px' }}>Regissör:</span>
                            <span>{movie.director}</span>
                        </li>
                        <li style={{ display: 'flex' }}>
                        <span style={{ width: '150px' }}>Skådespelare:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        {movie.cast.join(', ')} 
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2></h2>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
