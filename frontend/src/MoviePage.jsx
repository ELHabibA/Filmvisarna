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
        maxHeight: '70vh', 
        objectFit: 'contain', 
    };

    return (
        <div className="container">
           <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="my-4">{movie.title}</h1>
        </div>
        <div className="col-md-6 text-md-end">
          <button className="btn btn-primary mb-4">Boka Här</button>
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
                        height="500"
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
                        <li>Genre: {movie.genre}</li>
                        <li>Åldersgräns: {movie.ageRating}</li>
                        <li>Premiär: {movie.releaseDate}</li>
                        <li>Längd: {movie.duration}</li>
                        <li>Språk: {movie.language}</li>
                        <li>Regissör: {movie.director}</li>
                        <li>Skådespelare: {movie.cast.join(', ')}</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
