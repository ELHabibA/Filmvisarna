import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [screeningDates, setScreeningDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/movies/${movieId}`);
        const movieData = await response.json();
        setMovie(movieData);

        const screeningsResponse = await fetch('/api/screenings');
        const screeningsData = await screeningsResponse.json();

        const uniqueDates = Array.from(new Set(screeningsData.map(screening => screening.time.split('T')[0])));
        setScreeningDates(uniqueDates);

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
              <div>
                <label>Se våra visningar här:</label>
                <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                  <option value="">Välj datum</option>
                  {screeningDates.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
                {selectedDate && (
                  <Link to={`/boka/${movieId}/${selectedDate}`}>
                    <button className="btn btn-primary">Boka biljetter</button>
                  </Link>
                )}
              </div>
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
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 mt-2">
                  <iframe
                    width="100%"
                    height="350"
                    src={movie.description.trailerURL}
                    title="Movie Trailer"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-md-12 mt-2">
                  <p>{movie.description.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12">
                <h2></h2>
                <ul>
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
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              {selectedDate && (
                <div className="col-md-6">
                  {movie.screenings && movie.screenings.length > 0 ? (
                    <ul>
                      {movie.screenings
                        .filter((screening) => screening.time.split('T')[0] === selectedDate)
                        .map((screening) => (
                          <li key={screening.id}>{screening.time}</li>
                        ))}
                    </ul>
                  ) : null}
                </div>
              )}
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
