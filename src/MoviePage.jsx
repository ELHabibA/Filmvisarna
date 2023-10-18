import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MoviePage = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const { movieId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/movies/${movieId}`);
                const movieData = await response.json();
                setMovie(movieData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [movieId]);

    const posterStyle = {
        maxWidth: '100%',
        maxHeight: '50vh',
        objectFit: 'contain',
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : movie ? (
                <div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="my-4">{movie.title}</h1>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <Link to="/boka">
                                <button className="btn btn-primary mb-4">Boka Här</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={movie.description.poster}
                                alt="Movie Poster"
                                className="img-fluid"
                                style={posterStyle}
                            />
                        </div>
                        <div className="col-md-6 mt-2">
                            <iframe
                                width="100%"
                                height="350"
                                src={movie.description.trailerURL}
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
            {movie && (
              <>
                <li style={{ display: 'flex' }}>
                  <span style={{ width: '150px' }}>Genre:</span>
                  <span>{movie.description.genre}</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ width: '150px' }}>Åldersgräns:</span>
                  <span>{movie.description.ageRating}</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ width: '150px' }}>Premiär:</span>
                  <span>{movie.description.releaseDate}</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ width: '150px' }}>Längd:</span>
                  <span>{movie.description.duration}</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ width: '150px' }}>Språk:</span>
                  <span>{movie.description.language}</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <span style={{ width: '150px' }}>Regissör:</span>
                  <span>{movie.description.director}</span>
                </li>
              </>
            )}
            {movie?.cast && movie.cast.length > 0 && (
              <li style={{ display: 'flex' }}>
                <span style={{ width: '150px' }}>Skådespelare:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {movie.cast.join(', ')}
              </li>
            )}
          </ul>
        </div>
        <div className="col-md-6">
                <h2></h2>
                <p>{movie.description.description}</p>
            </div>
        </div>
    </div>
    ) : (
    <p>Movie not found</p>
    )}
    </div>
    );
};

export default MoviePage;