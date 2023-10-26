import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import convertHours from './utilities/convertHours';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [screeningDates, setScreeningDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedScreening, setSelectedScreening] = useState(null);
  const [screeningsData, setScreeningData] = useState([]);

  const navigate = useNavigate();

  let { movieId } = useParams();
  movieId = +movieId; // from string to number

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(`/api/movies/${movieId}`);
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const screeningsResponse = await fetch('/api/screenings');
        const screeningsData = await screeningsResponse.json();
        setScreeningData(screeningsData);

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

  const renderScreeningOptions = () => {
    // Get screenings for this movie
    let screenings = screeningsData.filter(x => x.movies_id === movieId);
    return screenings.map(({ id, time }) => <option key={id} value={id}>
      {new Date(time).toLocaleString('sv-SE').slice(0, -3)}
    </option>);
  }

  function gotoScreening({ target }) {
    navigate('/boka/' + target.value);
  }

  const cardStyle = {
    backgroundColor: 'rgba(211, 211, 211, 0.6)',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    padding: '20px',
  };

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
        <div className="white-card" style={cardStyle}> {/* Add the white card styling */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="my-4">{movie.title}</h1>
            </div>
            <div className="col-md-6 text-md-end">
              <div>
                <label className='p-2'>Välj visning att boka här: </label>
                <select
                  value={selectedDate}
                  onChange={gotoScreening}
                >
                  <option value="">Välj datum</option>
                  {renderScreeningOptions()}
                </select>
                {selectedScreening && (
                  <Link to={`/boka/${selectedScreening.id}`}>
                    <button className="btn btn-primary">Boka biljetter</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mt-2">
              <iframe
                width="100%"
                height="385"
                src={movie.description.trailerURL}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-4">
              <img
                src={movie.description.poster}
                alt="Movie Poster"
                className="img-fluid"
                style={posterStyle}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h2></h2>
              <p>{movie.description.description}</p>
            </div>
            <div className="col-md-4">
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
                      <span>{convertHours(movie.description.duration)}</span>
                    </li>
                    <li style={{ display: 'flex' }}>
                      <span style={{ width: '150px' }}>Språk:</span>
                      <span>{movie.description.language}</span>
                    </li>
                    <li style={{ display: 'flex' }}>
                      <span style={{ width: '150px' }}>Regissör:</span>
                      <span>{movie.description.director}</span>
                    </li>
                    <li style={{ display: 'flex' }}>
                      <span style={{ width: '150px' }}></span>
                      <span>{movie.cast}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            {selectedDate && (
              <div className="col-md-6">
                {screenings.length > 0 ? (
                  <ul>
                    {screenings
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
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MoviePage;