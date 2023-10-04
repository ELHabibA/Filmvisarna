import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from './components/data/movies.json'; 

const MoviePage = () => {
    const { movieId } = useParams();
    const movie = moviesData.find((movie) => movie.id === parseInt(movieId, 10));

    if (!movie) {
        // If movie is not found
        return <div>Movie not found.</div>;
    }

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
            src={movie.poster} //  Image URL
            alt="Movie Poster"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <iframe
            width="100%"
            height="250"
            src={movie.trailerURL} // Trailer URL
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
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
          <p>
          <p>{movie.description}</p>
          </p>
        </div>
      </div>
    </div>
    );
};

export default MoviePage;