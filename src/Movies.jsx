import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import moviesData from './components/data/movies.json';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';

const Movies = () => {
    
         //const [moviesDatan, setMoviesData] = useState([{}]);

    // useEffect(() => {
    //     fetch("/api/movies").then(response => response.json
    //     ).then(
    //         data => {
    //             setMoviesData(data)
    //         }
    //     )
    // }, []);
     const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Deklarera loading-variabeln

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovies(data);
        setLoading(false); // När datan är hämtad, sätt loading till false
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Om det uppstår ett fel, sätt loading till false
      }
    };


    fetchData();
  }, []);
    
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

    const { movieId } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // State for selected age and genre
    const [selectedAge, setSelectedAge] = useState(queryParams.get('age') || 'Alla åldrar');
    const [selectedGenre, setSelectedGenre] = useState(queryParams.get('genre') || 'Alla genrer');

    // State for button color and text
    const [ageButtonColor, setAgeButtonColor] = useState('warning');
    const [ageButtonText, setAgeButtonText] = useState('Välj ålder');

    // Deklarera färgvariabler här
    const [genreButtonColor, setGenreButtonColor] = useState('primary');
    const [genreButtonText, setGenreButtonText] = useState('Välj genre');

    // Alla filmer, inklusive filtrering
    const [allMovies, setAllMovies] = useState(moviesData);

    // Deklarera variabler för unika genrer
    const uniqueGenres = [...new Set(moviesData.map((movie) => movie.genre))];

    // Define unique age categories
    const uniqueAges = ['Alla åldrar', 'Barn', 'Pensionär', 'Vuxen'];

    // Filtrera filmer baserat på vald ålder och genre
    const filterMovies = (age, genre) => {
        return moviesData.filter((movie) => {
            if (age === 'Alla åldrar' ||
                (age === 'Barn' && (movie.genre === 'Animerat' || movie.genre === 'Fantasy')) ||
                (age === 'Pensionär' || age === 'Välj ålder') ||  // Allow "Pensionär" to select all movies
                (age === 'Vuxen')) {
                if (genre === 'Alla genrer' || genre === movie.genre) {
                    return true;
                }
            }
            return false;
        });
    };

    // Update URL and state when selecting age
    const handleAgeSelection = (ageCategory) => {
        queryParams.set('age', ageCategory);
        setSelectedAge(ageCategory);
        setAgeButtonColor(ageCategory === 'Alla åldrar' ? 'primary' : 'warning');
        setAgeButtonText(ageCategory);
        window.history.replaceState({}, '', `?${queryParams.toString()}`);
    };

    // Update URL and state when selecting genre
    const handleGenreSelection = (selectedGenre) => {
        queryParams.set('genre', selectedGenre);
        setSelectedGenre(selectedGenre);
        setGenreButtonColor(selectedGenre === 'Alla genrer' ? 'primary' : 'danger');
        setGenreButtonText(selectedGenre);
        window.history.replaceState({}, '', `?${queryParams.toString()}`);
    };
    const handleReset = () => {
        setSelectedAge('Alla åldrar');
        setSelectedGenre('Alla genrer');
        // Uppdatera URL och knappfärger/text här
    };


    useEffect(() => {
        // Update button text and color based on selected parameters
    }, [selectedGenre, selectedAge]);

    // Filter movies
    const filteredMovies = filterMovies(selectedAge, selectedGenre);

    return (
        <div>
            <img
                src="https://i-viaplay-com.akamaized.net/viaplay-prod/575/668/1686897326-b16e011791d011412639483343f89c9f3af6f360.jpg?width=400&height=600"
                alt="Filmer Poster"
                style={{
                    width: '100%', // täcker från vänster till höger
                    height: '400px',
                    objectFit: 'cover',
                    border: '2px solid black',
                }}
            />
            <h1>Filmer</h1>
            <div>
      <h2>Movie List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
            <div>
                {/* Filtrering för ålder */}
                <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '15px' }}>
                    <Dropdown className="mx-auto"> {/* Använd mx-auto för att centrera */}
                        <Dropdown.Toggle variant={ageButtonColor} id="ageDropdown">
                            {ageButtonText}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {uniqueAges.map((ageCategory) => (
                                <Dropdown.Item
                                    key={ageCategory}
                                    onClick={() => handleAgeSelection(ageCategory)}
                                >
                                    {ageCategory}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                {/* Filtrering för genre */}
                <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '15px' }}>
                    <Dropdown className="mx-auto"> {/* Använd mx-auto för att centrera */}
                        <Dropdown.Toggle variant={genreButtonColor} id="genreDropdown">
                            {genreButtonText}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {uniqueGenres.map((genre) => (
                                <Dropdown.Item
                                    key={genre}
                                    onClick={() => handleGenreSelection(genre)}
                                >
                                    {genre}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                {/*Film - lista*/}
                <div className="movie-list">
                    {filteredMovies.map((movie) => (
                        <div key={movie.id} className="movie-item" style={{ marginBottom: '10px' }}>
                            <Link to={`/detaljsidan/${movie.id}`} style={linkStyle}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ marginRight: '20px' }}>
                                            <img
                                                src={movie.poster}
                                                alt="Movie Poster"
                                                className="img-fluid"
                                                style={{
                                                    width: '150px',
                                                    height: 'auto',
                                                    border: '2px solid black',
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h2 style={{ fontSize: '20px', marginBottom: '5px' }}>{movie.title}</h2>
                                            <p style={{ margin: 0, fontSize: '16px' }}>{movie.genre} I {movie.duration} I {movie.ageRating}</p>
                                        </div>
                                    </div>
                                    <Link to={`/detaljsidan/${movie.id}`}>
                                        <button className="btn btn-primary" style={{ marginLeft: '10px' }}>Detaljer</button>
                                    </Link>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movies;